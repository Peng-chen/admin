package com.admin.service;


import com.admin.bean.NormalActivity;
import com.admin.pojo.ResultMap;

public interface NormalActivityService {
	/**
	 * 增加NormalActivity
	 * 
	 * @param normalActivity
	 * @return ResultMap
	 */
	public ResultMap postNormalActivity(NormalActivity normalActivity);

	/**
	 * 更新NormalActivity
	 * 
	 * @param normalActivity
	 * @return ResultMap
	 */
	public ResultMap putNormalActivity(NormalActivity normalActivity);

	/**
	 * 删除指定NormalActivity
	 * 
	 * @param normalActivityId
	 * @return ResultMap
	 */
	public ResultMap deleteNormalActivity(int normalActivityId);

	/**
	 * 查看指定NormalActivity
	 * 
	 * @param normalActivityId
	 * @return ResultMap
	 */
	public ResultMap getNormalActivity(int normalActivityId);

	/**
	 * 查看所有NormalActivity
	 * 
	 * @return ResultMap
	 */
	// public ResultMap getNormalActivities();
	/**
	 * 查看活动
	 * 
	 * @param state
	 * @return
	 */
	public ResultMap getNormalActivities(int state);

	/**
	 * 查看通过的活动
	 * 
	 * @param userId
	 * @return
	 */
	public ResultMap getNormalActivitiesPassed(int userId);



}
