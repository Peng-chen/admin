package com.admin.pojo;

import com.admin.error.ServerErrorCode;

/**
 * 
 * @ClassName: ResultMap
 * @Description: 返回结果类
 * @author chenyifeng
 * @date 2014年12月1日13:40:44
 * 
 */
public class ResultMap {
	// 状态码
	private int statusCode = ServerErrorCode.SERVER_OK;
	// 数据
	private Object data;

	public ResultMap() {
		statusCode = ServerErrorCode.SERVER_OK;
		data = null;
	}

	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}

	public int getStatusCode() {
		return statusCode;
	}

	@SuppressWarnings("unchecked")
	public <T> T getData() {
		return data == null ? null : (T) data;
	}

	public void setData(Object data) {
		this.data = data;
	}
}
