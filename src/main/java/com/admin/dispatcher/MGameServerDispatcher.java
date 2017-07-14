package com.admin.dispatcher;

import com.admin.error.ServerErrorCode;
import com.admin.service.UserService;
import com.admin.servlet.BodyReaderHttpServletRequestWrapper;
import com.admin.servlet.BodyReaderHttpServletResponseWrapper;
import com.admin.utils.MGameProperty;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.DispatcherServlet;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;

public class MGameServerDispatcher extends DispatcherServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = -4471517583062293982L;
	private UserService userService;

	private Logger userAccessLogger = LoggerFactory
			.getLogger(MGameProperty.USER_ACCESS_LOG_NAMESPACE);

	private static String[] transparentUrls = {
	};

	@Override
	protected void initFrameworkServlet() throws ServletException {
		super.initFrameworkServlet();
		userService = (UserService) getWebApplicationContext().getBean(
				"userService");
	}

	@Override
	protected void doDispatch(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		try {
			Map requestParams = request.getParameterMap();
			BodyReaderHttpServletRequestWrapper requstWrapper = new BodyReaderHttpServletRequestWrapper(
					request);

			BodyReaderHttpServletResponseWrapper responseWrapper = new BodyReaderHttpServletResponseWrapper(
					response);

			responseWrapper.setHeader("Access-Control-Allow-Origin", "*");
			if (isNeedToken(request.getPathInfo())) {
				// token检验
				String token = request.getHeader("token");

				if (!StringUtils.isEmpty(token)) {
					Integer userId = userService.getUserIdByToken(token);

					if (userId != null) {
//						userService.refreshUserInline(userId); // 标记用户在线
						requstWrapper.setAttribute("userId", userId);

						// 记录玩家行为
						if (userAccessLogger.isInfoEnabled()) {
							String cilentIp = StringUtils.isEmpty(request
									.getHeader("X-Forwarded-For")) ? request
									.getRemoteHost() : request
									.getHeader("X-Forwarded-For");
							StringBuilder builder = new StringBuilder();
							builder.append(MGameProperty.USER_LOG_SEPARATOR)
									.append(userId)
									.append(MGameProperty.USER_LOG_SEPARATOR)
									.append(request.getPathInfo())
									.append(MGameProperty.USER_LOG_SEPARATOR)
									.append(cilentIp);
							userAccessLogger.info(builder.toString());
						}
						super.doDispatch(requstWrapper, responseWrapper);
					} else {
						response.setIntHeader(
								MGameProperty.RESPONSE_HEADER_SERVER_STATUS,
								ServerErrorCode.SERVER_TOKEN_OUT_TIME);
						// System.out.println("token:"+token+"   url:"+request.getRequestURL()+"  "+request.getRequestURI());
					}
				} else {
					response.setIntHeader(
							MGameProperty.RESPONSE_HEADER_SERVER_STATUS,
							ServerErrorCode.SERVER_TOKEN_OUT_TIME);
					// System.out.println("token:"+token+"   url:"+request.getRequestURL()+"  "+request.getRequestURI());
				}
			} else {
				super.doDispatch(requstWrapper, responseWrapper);
			}

			response.getOutputStream().write(responseWrapper.getResponseData());
		} catch (Exception e){
			e.printStackTrace();
		}
	}

	/**
	 * 不需要权限检验的请求
	 * 
	 * @param url
	 * @return
	 */
	private boolean isNeedToken(String url) {
		for (String transparentUrl : transparentUrls) {
			if (transparentUrl.equals(url)) {
				return false;
			}
		}
		return true;
	}
}
