package com.admin.control.admin;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import com.admin.utils.CustomizedPropertyConfigurer;
import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.lang3.StringUtils;

public class AdminUserCache {
	// username-password
	private static Map<String, String> userPassword = new HashMap<String, String>();
	// username-token
	private static Map<String, String> userToken = new HashMap<String, String>();
	// token-username
	private static Map<String, String> tokenUser = new HashMap<String, String>();

	static {
		String[] admins = null;
		String[] passwords = null;

		String adminsString = CustomizedPropertyConfigurer.getContextProperty(
				"musicbloom.admins.username", String.class);
		if (!StringUtils.isEmpty(adminsString)) {
			admins = adminsString.split(",");
		}

		String passwordsString = CustomizedPropertyConfigurer
				.getContextProperty("musicbloom.admins.password", String.class);

		if (!StringUtils.isEmpty(passwordsString)) {
			passwords = passwordsString.split(",");
		}

		if (!ArrayUtils.isEmpty(admins) && !ArrayUtils.isEmpty(passwords)
				&& admins.length == passwords.length) {
			for (int i = 0; i < admins.length; i++) {
				userPassword.put(admins[i], passwords[i]);
			}
		}
	}

	/**
	 * 登陆获取token,token为空，登陆错误
	 * 
	 * @param userName
	 * @param password
	 * @return
	 */
	public static String adminLogin(String userName, String password) {
		if (!StringUtils.isEmpty(userName) && !StringUtils.isEmpty(password)) {
			if (password.equals(userPassword.get(userName))) {
				String oldToken = userToken.get(userName);
				if (oldToken != null) {
					tokenUser.remove(oldToken);
				}

				String newToken = UUID.randomUUID().toString().replace("-", "");
				userToken.put(userName, newToken);
				tokenUser.put(newToken, userName);
				return newToken;
			}
		}
		return null;
	}

	/**
	 * 根据token获取管理用户
	 * 
	 * @param token
	 * @return
	 */
	public static String getAdminUser(String token) {
		return tokenUser.get(token);
	}
}
