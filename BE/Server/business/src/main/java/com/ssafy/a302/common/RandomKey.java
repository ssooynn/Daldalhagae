package com.ssafy.a302.common;

import org.springframework.stereotype.Repository;

@Repository
public class RandomKey {
	public int[] arr = new int[62];

	public RandomKey() {
		super();
		for (int i = 0; i < 62; i++) {
			if (i < 10) {
				arr[i] = 48 + i;
			} else if (i >= 10 && i < 36) {
				arr[i] = 55 + i;
			} else {
				arr[i] = 61 + i;
			}
		}

	}

	public String createKey() {
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < 20; i++) {
			int ran = (int) (Math.random() * 62);
			sb.append((char) arr[ran]);
		}

		return sb.toString();
	}
}
