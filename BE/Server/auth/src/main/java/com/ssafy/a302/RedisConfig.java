package com.ssafy.a302;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.StringRedisSerializer;

@Configuration
public class RedisConfig {
	@Value("${REDIS_HOST}")
	private String redisHost;
	
	@Value("${REDIS_PORT}")
	private int redisPort;
	
	@Value("${REDIS_PASSWORD}")
	private String redisPassword;

	
	@Bean
	public RedisConnectionFactory redisConnectionFactory() {
//		return new LettuceConnectionFactory(redisHost, redisPort);
		RedisStandaloneConfiguration redisStandaloneConfiguration = new RedisStandaloneConfiguration();
		redisStandaloneConfiguration.setHostName(redisHost);
		redisStandaloneConfiguration.setPort(redisPort);
        redisStandaloneConfiguration.setPassword(redisPassword); //redis에 비밀번호가 설정 되어 있는 경우 설정해주면 됩니다.
        LettuceConnectionFactory lettuceConnectionFactory = new LettuceConnectionFactory(redisStandaloneConfiguration);
        return lettuceConnectionFactory;
	}
	
	
	//별도의 설정없이 RedisTemplate 메서드로 Redis 서버에 명령어 수행 가능 
	@Bean
	public RedisTemplate<String, String> redisTemplate(){
		// redisTemplate 에서 set, get,delete 사용 
		RedisTemplate<String, String> redisTemplate = new RedisTemplate<>();
		//redis-cli를 통해 데이터 조회 시, 알아볼 수 없는 형태로 출력되는 것을 방지 
		redisTemplate.setKeySerializer(new StringRedisSerializer());
		redisTemplate.setValueSerializer(new StringRedisSerializer());
		redisTemplate.setConnectionFactory(redisConnectionFactory());
		
		return redisTemplate;
	}
}
