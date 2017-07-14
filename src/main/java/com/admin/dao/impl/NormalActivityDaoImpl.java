package com.admin.dao.impl;

import java.util.*;

import com.admin.bean.NormalActivity;
import com.admin.dao.NormalActivityDao;
import com.admin.bean.NormalActivity;
import com.admin.dao.NormalActivityDao;

public class NormalActivityDaoImpl extends BaseDaoImpl implements
		NormalActivityDao {

	@Override
	public boolean insertNormalActivity(NormalActivity normalActivity) {
		return sqlSession.insert("normalActivity.insertNormalActivity",
				normalActivity) == 1;
	}

	@Override
	public boolean updateNormalActivity(NormalActivity normalActivity) {
		return sqlSession.update("normalActivity.updateNormalActivity",
				normalActivity) == 1;
	}

	@Override
	public boolean deleteNormalActivity(int normalActivityId) {
		return sqlSession.delete("normalActivity.deleteNormalActivity",
				normalActivityId) == 1;
	}

	@Override
	public NormalActivity selectNormalActivity(int normalActivityId) {
		return sqlSession.selectOne("normalActivity.selectNormalActivity",
				normalActivityId);
	}

//	@Override
//	public List<NormalActivity> selectNormalActivities() {
//		return sqlSession
//				.selectList("normalActivity.selectAllNormalActivities");
//	}
	
	@Override
	public List<NormalActivity> selectNormalActivities(int state) {
		Calendar c = Calendar.getInstance();
		int weekday = c.get(Calendar.DAY_OF_WEEK);
		if(weekday == 1){
			weekday = 7;
		} else {
			weekday = weekday-1;
		}

		Map<String, Object> params = new HashMap<String, Object>();
		params.put("state", state);

			params.put("weekday", weekday);

		return sqlSession
				.selectList("normalActivity.selectNormalActivities", params);

	}

	@Override
	public List<Integer> selectNormalActivitiesPassed(int userId) {
		return sqlSession.selectList(
				"normalActivity.selectNormalActivitiesPassed", userId);
	}

	@Override
	public boolean isNormalActivityPassed(int userId, NormalActivity activity) {
		Map<String, Integer> params = new HashMap<String, Integer>();
		params.put("userId", userId);
		params.put("type", activity.getType());
		params.put("activityId", activity.getId());
		return sqlSession.selectOne("normalActivity.isNormalActivityPassed",
				params);
	}

	@Override
	public boolean updateUserNormalActivity(int userId, NormalActivity activity) {
		Map<String, Integer> params = new HashMap<String, Integer>();
		params.put("userId", userId);
		params.put("type", activity.getType());
		params.put("activityId", activity.getId());
		return sqlSession.update("normalActivity.updateUserNormalActivity",
				params) == 1;
	}

	@Override
	public boolean deleteUsersActivityPassed(int type) {
		sqlSession.update("normalActivity.deleteUsersActivityPassed", type);
		return true;
	}

}
