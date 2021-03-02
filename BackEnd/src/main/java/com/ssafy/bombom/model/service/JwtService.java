package com.ssafy.bombom.model.service;

import java.util.Map;

public interface JwtService {

	<T> String create(String key, T data, String subject);
	Map<String, Object> get(String key);
	String getMemberId();
	boolean isUsable(String jwt);
	
}
