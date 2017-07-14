package com.admin.service.impl;

import com.admin.bean.User;
import com.admin.dao.UserDao;
import com.admin.error.UserErrorCode;
import com.admin.pojo.ResultMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class BaseServiceImpl {

	// 初始化log
	protected final static Logger LOGGER = LoggerFactory
			.getLogger(BaseServiceImpl.class);

    protected UserDao userDao;


	public UserDao getUserDao() {
		return userDao;
	}


	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}


	public ResultMap getUserById(int userId) {
		ResultMap resultMap = getInitialResultMap();
		User user = userDao.selectUserById(userId);
		if (user == null) {
			resultMap
					.setStatusCode(UserErrorCode.REMOTE_USER_ACCOUNT_NOT_EXIST);
			return resultMap;
		}

		resultMap.setData(user);
		return resultMap;
	}

	/**
	 * 创建一个结果类实体
	 *
	 * @return
	 */
	protected static ResultMap getInitialResultMap() {
		return new ResultMap();
	}



	public ResultMap updateUser(User user) {
		assert user.getId() != null;
		ResultMap resultMap = getInitialResultMap();

		if (!userDao.updateUser(user)) {
			resultMap
					.setStatusCode(UserErrorCode.REMOTE_USER_ACCOUNT_NOT_EXIST);
		}
		return resultMap;
	}




}
