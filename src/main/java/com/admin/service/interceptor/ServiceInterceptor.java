package com.admin.service.interceptor;

import java.io.IOException;
import java.lang.annotation.Annotation;

import org.aopalliance.intercept.MethodInterceptor;
import org.aopalliance.intercept.MethodInvocation;
import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.admin.annotation.ParamInfo;
import com.admin.annotation.UserAction;
import com.admin.error.ServerErrorCode;
import com.admin.exceptions.MGameRuntimeException;
import com.admin.pojo.ResultMap;
import com.admin.utils.MGameProperty;
//import com.catpaw.utils.json.JsonUtils;
import com.fasterxml.jackson.core.JsonGenerationException;
import com.fasterxml.jackson.databind.JsonMappingException;

public class ServiceInterceptor implements MethodInterceptor {
	private static Logger userActionLogger = LoggerFactory
			.getLogger(MGameProperty.USER_ACTION_LOG_NAMESPACE);

	@Override
	public Object invoke(MethodInvocation methodInvocation) throws Throwable {
		Object result = null;
		try {
			result = methodInvocation.proceed();

			if (userActionLogger.isInfoEnabled()
					&& methodInvocation.getMethod().getAnnotation(
							UserAction.class) != null) {
				logUserAction(((ResultMap) result).getStatusCode(),
						methodInvocation);
			}

		} catch (Exception e) {
			ResultMap resultMap = new ResultMap();
			handlerException(resultMap, methodInvocation, e);
			result = resultMap;
		}
		return result;
	}

	/**
	 * 记录玩家日志
	 * 
	 * @param method
	 * @throws IOException
	 * @throws JsonMappingException
	 * @throws JsonGenerationException
	 */
	private void logUserAction(int status, MethodInvocation method)
			throws JsonGenerationException, JsonMappingException, IOException {
		StringBuffer sb = new StringBuffer();
		String methodDescription = method.getMethod()
				.getAnnotation(UserAction.class).description();
		if (StringUtils.isEmpty(methodDescription)) {
			methodDescription = method.getMethod().getName();
		}
		sb.append(MGameProperty.USER_LOG_SEPARATOR).append(methodDescription)
				.append(MGameProperty.USER_LOG_SEPARATOR).append(status)
				.append(MGameProperty.USER_LOG_SEPARATOR);
		Annotation[][] paramInfos = method.getMethod()
				.getParameterAnnotations();
		if (!ArrayUtils.isEmpty(paramInfos)) {
			sb.append("[");
			for (int i = 0; i < paramInfos.length; i++) {
				String description;
				if (!ArrayUtils.isEmpty(paramInfos[i])) {
					description = (paramInfos[i][0] == null && paramInfos[i][0] instanceof ParamInfo) ? "unkown"
							: ((ParamInfo) paramInfos[i][0]).description();
				} else {
					description = "unkown";
				}
				sb.append(description);
				if (i != paramInfos.length - 1) {
					sb.append(",");
				}
			}
			sb.append("]").append(MGameProperty.USER_LOG_SEPARATOR);
//					.append(JsonUtils.toString(method.getArguments()));
		}
		userActionLogger.info(sb.toString());
	}

	/**
	 * 处理异常,记录异常日志
	 * 
	 * @param resultMap
	 * @param method
	 * @param e
	 * @throws JsonGenerationException
	 * @throws JsonMappingException
	 * @throws IOException
	 */
	private void handlerException(ResultMap resultMap, MethodInvocation method,
			Exception e) throws JsonGenerationException, JsonMappingException,
			IOException {
		// TODO 这儿要根据异常的类型返回错误码
		if (resultMap == null) {
			resultMap = new ResultMap();
		}

		if (e instanceof MGameRuntimeException) {
			int statusCode = ((MGameRuntimeException) e).getStatusCode();
			resultMap.setStatusCode(statusCode);
		} else {
			resultMap.setStatusCode(ServerErrorCode.SERVER_INTERNAL_ERROR);
		}

		// 日志
		Logger logger = LoggerFactory.getLogger(method.getMethod()
				.getDeclaringClass());

		StringBuffer sb = new StringBuffer();
		String methodName = method.getMethod().getName();
		Object[] params = method.getArguments();
		sb.append(method.getMethod().getDeclaringClass().getName()).append(".")
				.append(methodName).append(" has a error:");
//				.append(JsonUtils.toString(params));
		logger.error(sb.toString(), e);
	}
}
