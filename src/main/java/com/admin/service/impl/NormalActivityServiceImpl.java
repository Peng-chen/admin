package com.admin.service.impl;

import com.admin.bean.NormalActivity;
import com.admin.dao.NormalActivityDao;
import com.admin.pojo.ResultMap;
import com.admin.error.ServerErrorCode;
import com.admin.service.NormalActivityService;

import java.util.*;

public class NormalActivityServiceImpl extends BaseServiceImpl implements
        NormalActivityService {

    private NormalActivityDao normalActivityDao;

    public void setNormalActivityDao(NormalActivityDao normalActivityDao) {
        this.normalActivityDao = normalActivityDao;
    }

    @Override
    public ResultMap postNormalActivity(NormalActivity normalActivity) {
        ResultMap resultMap = getInitialResultMap();
        boolean result = normalActivityDao.insertNormalActivity(normalActivity);
        if (!result) {
            resultMap.setStatusCode(ServerErrorCode.SERVER_DATABASE_ERROR);
        }
        return resultMap;
    }

    @Override
    public ResultMap putNormalActivity(NormalActivity normalActivity) {
        ResultMap resultMap = getInitialResultMap();
        boolean result = normalActivityDao.updateNormalActivity(normalActivity);
        if (!result) {
            resultMap.setStatusCode(ServerErrorCode.SERVER_DATABASE_ERROR);
        }
        return resultMap;
    }

    @Override
    public ResultMap deleteNormalActivity(int normalActivityId) {
        ResultMap resultMap = getInitialResultMap();
        boolean result = normalActivityDao
                .deleteNormalActivity(normalActivityId);
        if (!result) {
            resultMap.setStatusCode(ServerErrorCode.SERVER_DATABASE_ERROR);
        }
        return resultMap;
    }

    @Override
    public ResultMap getNormalActivity(int normalActivityId) {
        ResultMap resultMap = getInitialResultMap();
        NormalActivity normalActivity=null;
//        normalActivity = LocalCache.CACHE_NORMAL_ACTIVITY_MAP
//                .get(normalActivityId);
        if (normalActivity == null) {
            normalActivity = normalActivityDao
                    .selectNormalActivity(normalActivityId);
        }
        resultMap.setData(normalActivity);
        return resultMap;
    }

    @Override
    public ResultMap getNormalActivities(int state) {
        ResultMap resultMap = getInitialResultMap();
        Collection<NormalActivity> activities = null;
//        switch (state) {
//            case 1:
//                activities = LocalCache.CACHE_NORMAL_ACTIVITY_MAP.values();
//
//                Object[]keys = LocalCache.CACHE_NORMAL_ACTIVITY_MAP.keySet().toArray();
//                Arrays.sort(keys);
//
//                List<NormalActivity> normalActivities = new ArrayList<NormalActivity>();
//                for (Object key : keys){
//                    normalActivities.add(LocalCache.CACHE_NORMAL_ACTIVITY_MAP.get(Integer.parseInt(String.valueOf(key))));
//                }
//                resultMap.setData(normalActivities);
//
//                break;
//            case 0:
//            case -1:
//                activities = normalActivityDao.selectNormalActivities(state);
//                break;
//            default:
//                break;
//        }

      if(activities==null)
        activities = normalActivityDao.selectNormalActivities(state);

        if(resultMap.getData() == null) {
            resultMap.setData(activities);
        }
        return resultMap;
    }

    @Override
    public ResultMap getNormalActivitiesPassed(int userId) {
        ResultMap resultMap = getInitialResultMap();
        resultMap.setData(normalActivityDao
                .selectNormalActivitiesPassed(userId));
        return resultMap;
    }


}
