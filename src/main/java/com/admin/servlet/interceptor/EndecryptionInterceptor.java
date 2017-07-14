package com.admin.servlet.interceptor;

import com.admin.servlet.BodyReaderHttpServletRequestWrapper;
import com.admin.servlet.BodyReaderHttpServletResponseWrapper;
import com.admin.utils.CustomizedPropertyConfigurer;
import com.admin.servlet.BodyReaderHttpServletRequestWrapper;
import com.admin.servlet.BodyReaderHttpServletResponseWrapper;
import com.admin.utils.CustomizedPropertyConfigurer;
//import com.admin.openapi.cipher.XXTea;
import org.apache.commons.lang3.ArrayUtils;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.List;

/**
 * 
 * @ClassName： EndecryptionInterceptor
 * @Description: 数据加解密拦截器
 * @author chenyifeng
 * @date 2015年6月18日10:06:02
 * 
 */

public class EndecryptionInterceptor implements HandlerInterceptor {

	// DES加密密码
	//private static final String DES_PASSWORD = "12345678";
	private static final byte[] DES_PASSWORD = "uoqjRwO8".getBytes();

	@Override
	public boolean preHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler) throws Exception {
		if (request.getContentLength() > 0) {
			BodyReaderHttpServletRequestWrapper requstWrapper = (BodyReaderHttpServletRequestWrapper) request;
//			requstWrapper.setBody(EncryptionDES.desCrypto(
//					requstWrapper.getBody(), DES_PASSWORD));

			//需要加密或解密的版本
			String version = request.getParameter("version");
			String passwardVersion = (String) CustomizedPropertyConfigurer.getContextProperty("client.passward.version");
			String[]passwardVersions = passwardVersion.split(",");
			List<String> passwardVersionList = Arrays.asList(passwardVersions);

			//如果在需要加密或解密的版本里，则进行加密或解密操作
			if(passwardVersionList.contains(version)) {
//				requstWrapper.setBody(XXTea.decrypt(requstWrapper.getBody(), DES_PASSWORD));
			} else {
				requstWrapper.setBody(requstWrapper.getBody());
			}
		}

		return true;
	}

	@Override
	public void postHandle(HttpServletRequest request,
			HttpServletResponse response, Object handler,
			ModelAndView modelAndView) throws Exception {
		byte[] data = ((BodyReaderHttpServletResponseWrapper) response)
				.getResponseData();
		if(!ArrayUtils.isEmpty(data)) {
			//data = EncryptionDES.desCrypto(data, DES_PASSWORD);

			//需要加密或解密的版本
			String version = request.getParameter("version");
			String passwardVersion = (String) CustomizedPropertyConfigurer.getContextProperty("client.passward.version");
			String[]passwardVersions = passwardVersion.split(",");
			List<String> passwardVersionList = Arrays.asList(passwardVersions);

			//如果在需要加密或解密的版本里，则进行加密或解密操作
			if(passwardVersionList.contains(version)) {
//				data = XXTea.encrypt(data, DES_PASSWORD);
			}


			/*for (String passwardVersionOne : passwardVersions){
				if(version.equals(passwardVersionOne)){
					data = XXTea.encrypt(data, DES_PASSWORD);
				}
			}*/

			((BodyReaderHttpServletResponseWrapper) response).reset();

			ServletOutputStream outputStream = response.getOutputStream();
			outputStream.write(data);
			outputStream.flush();
			outputStream.close();
		}
	}

	@Override
	public void afterCompletion(HttpServletRequest request,
			HttpServletResponse response, Object handler, Exception ex)
			throws Exception {

	}

}
