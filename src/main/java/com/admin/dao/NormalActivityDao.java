package com.admin.dao;

import com.admin.bean.NormalActivity;
import com.admin.bean.NormalActivity;

import java.util.List;

public interface NormalActivityDao {
	/**
	 * 增加NormalActivity
     * @param normalActivity
     * @return
	 */
	public boolean insertNormalActivity(NormalActivity normalActivity);
	/**
	 * 更新NormalActivity
     * @param normalActivity
     * @return
	 */
	public boolean updateNormalActivity(NormalActivity normalActivity);
	/**
	 * 删除指定NormalActivity
	 * @param normalActivityId
	 * @return 
	 */
	public boolean deleteNormalActivity(int normalActivityId);
	/**
	 * 查看指定NormalActivity
	 * @param normalActivityId
	 * @return 指定NormalActivity
	 */
	public NormalActivity selectNormalActivity(int normalActivityId);
	/**
	 * 查看所有NormalActivity
	 * @return 所有的NormalActivity
	 */
//	public List<NormalActivity> selectNormalActivities();
	/**
	 * 查看活动
	 * @param state
	 * @return
	 */
	public List<NormalActivity> selectNormalActivities(int state);
	/**
	 * 查看玩家通过的活动
	 * @param userId
	 * @return
	 */
	public List<Integer> selectNormalActivitiesPassed(int userId);
	/**
	 * 用户是否完成某个活动
	 * @param userId
	 * @param activity
	 * @return
	 */
	public boolean isNormalActivityPassed(int userId, NormalActivity activity);
	/**
	 * 用户第一次完成活动
	 * @param userId
	 * @param activity
	 * @return
	 */
	public boolean updateUserNormalActivity(int userId, NormalActivity activity);
	/**
	 * 情况玩家已完成的活动
	 * @param type
	 * @return
	 */
	public boolean deleteUsersActivityPassed(int type);
}
