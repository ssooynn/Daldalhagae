package com.ssafy.a302.common;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@ConfigurationProperties("custom")
@Data
public class FilePath {
	private String petImageLoadPath;
	private String productImageLoadPath;
	private String petImageUploadPath;
	private String productImageUploadPath;
	private String reviewImageUploadPath;
	private String reviewImageLoadPath;
	
}
