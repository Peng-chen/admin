package com.admin.httpinvoker;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class HttpServiceProvider {

	private static ApplicationContext context = new ClassPathXmlApplicationContext(
			"application-servlet.xml");

//	public static com.catpaw.platform.service.OauthService getOauthService() {
//		return (com.catpaw.platform.service.OauthService) context
//				.getBean("httpService");
//	}
}
