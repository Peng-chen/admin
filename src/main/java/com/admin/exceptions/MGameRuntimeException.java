package com.admin.exceptions;

public class MGameRuntimeException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 4194465554810828075L;

	// 状态码
	private Integer statusCode;

	public MGameRuntimeException(int statusCode) {
		this.statusCode = statusCode;
	}

	public MGameRuntimeException(int statusCode, String msg) {
		super(msg);
		this.statusCode = statusCode;
	}

	public Integer getStatusCode() {
		return statusCode;
	}
}
