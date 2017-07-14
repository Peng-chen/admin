package com.admin.dao.impl;

import org.apache.ibatis.session.SqlSession;

/**
 * 
 * @ClassName: BaseDaoImpl
 * @Description 辅助类
 * @author chenyifeng
 * @date 2014年12月1日13:14:20
 * 
 */
public class BaseDaoImpl {
	protected SqlSession sqlSession;

	public void setSqlSession(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
}
