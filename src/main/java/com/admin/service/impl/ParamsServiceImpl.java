package com.admin.service.impl;

import com.admin.bean.*;
import com.admin.dao.*;
import com.admin.service.ParamsService;
//import com.admin.utils.ChallengePassChecker;
import com.admin.utils.ClassInfoUtil;
import com.admin.utils.DataFormatUtil;
//import com.catpaw.eventframe.event.Event;
//import com.catpaw.eventframe.handler.Handler;
import com.admin.cache.LocalCache;
import com.admin.enums.ResourceType;
import com.admin.pojo.ResultMap;
import com.admin.queue.TaskQueue;
//import com.catpaw.utils.json.JsonUtils;
//import com.catpaw.utils.zookeeper.ZkClient;
import org.apache.curator.framework.CuratorFramework;
import org.apache.log4j.Logger;

import java.io.IOException;
import java.text.ParseException;
import java.util.*;


public class ParamsServiceImpl extends BaseServiceImpl implements ParamsService {
    private static final String ZOOKEEPER_RESOURCE_PATH = "/resource";
    private static String time = "yyyy-MM-dd HH:mm:ss";
    private Logger logger = Logger.getLogger("MusicBloom");

    private NormalActivityDao normalActivityDao;


//    private ZkClient zkClient;
    private CuratorFramework curatorFramework;


//    public void setZkClient(ZkClient zkClient) {
//        if (zkClient != null) {
//            this.zkClient = zkClient;
//            curatorFramework = zkClient.getZkClient();
//        }
//    }


    public void setNormalActivityDao(NormalActivityDao normalActivityDao) {
        this.normalActivityDao = normalActivityDao;
    }

    public void init() throws Exception {
        // TODO:以后做一个CacheLoader
        ClassInfoUtil.loadDBJsonTypeMap(); // 加载Json字段的映射Map

//		List<GameAreaInfo> lise = gameAreaDao.selectGameAreaInfo();
        //收集
        // refreshCollentions();

        //test();

//        refreshPieceInfo();
//        refreshLevelUp();
//        refreshPowerUp();
//        refreshPlatformCache();
//        refreshUserLevelExperiences();
//
//        // 由于组装缓存的时候，对其他缓存有依赖，所有顺序是重要的
//
//        // 顺序为：谱曲->歌曲->曲包
//        refreshSchemeCache();
//        refreshMusicCache();
//
//        refreshNormalActivityCache();
//
//        refreshStoryGateCache();
//        refreshChallengeCache();
//        refreshPropCache();
//        refreshHeadimageCache();
//        //刷新描述
//        refreshDescription();
//        refreshHeadImageEffectInfo();
//        refreshHeadimageInfo();
//        refreshEquipCache();
//        // 排行榜信息
//        refreshGoodsCache();
//        refreshAlbumCache();
//        refreshRechargeItemCache();
//
//        refreshAnnouncementCache();
//        refreshSystemEmailCache();
//        refreshVipCache();
//        refreshLoginAwardCache();
//
//        //refreshTreasure();
//
//        refreshGiftPack();
//
//        refreshPlatformGoodsRelation();
//
//        refreshFirstWeekLoginAwardCache();
//
//        registerServer();
//        addResourceChangedListener();
//
//        refreshLevelUpMusicAward();
//
//        refreshHeadimageUpdateInfo();
//
//        refreshInstruction();
//
//        refreshTreasures();
//
//        refreshTreasureShow();
//        //刷新材料补给
//        refreshMaterialRecharge();
//        //刷新边框
//        refreshHeadimageFrameInfo();
//        //刷洗treat_info
//        refresTreatInfo();
//
//        //刷新活跃度
//        refreshActivationInfo();
//
//        //刷新打榜积分奖励
//        refreshBeatScoreAward();
//
//        //刷新打榜奖励
//        refreshBeatAward();
//
//        //刷新版本下载url
//        refreshVersionUrl();
//
//        //刷新服务器各大区信息
//        refreshGameArea();

        logger.info("Load data successfully!");


//        //监听玩家升级发放奖励的时间
//        TaskQueue.getEvent().on(MGameProperty.USER_LEVEL_UP_AWARD_QUEUE, new Handler() {
//            @Override
//            public void handle(Event event) {
//                User user = (User) (event.getArgs()[0]);
//                Award award = (Award) (event.getArgs()[1]);
//                getUserAward(user, award);
//            }
//        });

        Thread thread = new LevelUpAwardHandlerThread();
        thread.start();

        refreshResoucesMd5(null);
    }


    public ResultMap refreshNormalActivityCache() {
        ResultMap resultMap = getInitialResultMap();
        List<NormalActivity> activities = normalActivityDao
                .selectNormalActivities(1);
        synchronized (LocalCache.CACHE_NORMAL_ACTIVITY_MAP) {
            LocalCache.CACHE_NORMAL_ACTIVITY_MAP.clear();
            for (NormalActivity normalActivity : activities) {

                String endTime = normalActivity.getEndTime();
                String startTime = normalActivity.getStartTime();
                if (endTime != null) {
                    try {
                        Date endDate = DataFormatUtil.parse(endTime, time);
                        normalActivity.setEndTime(String.valueOf(endDate.getTime() / 1000));

                        Date startDate = DataFormatUtil.parse(startTime, time);
                        normalActivity.setStartTime(String.valueOf(startDate.getTime() / 1000));
                    } catch (ParseException e) {
                        e.printStackTrace();
                    }
                }

                LocalCache.CACHE_NORMAL_ACTIVITY_MAP.put(
                        normalActivity.getId(), normalActivity);
            }
        }

//        // 初始化活动通过判定
//        ActivitiyPassChecker activitiesPassChecker = ActivitiyPassChecker
//                .getInstance();
//        synchronized (activitiesPassChecker) {
//            activitiesPassChecker.clearActivitiesChecker();
//            activitiesPassChecker.addActivitiesChecker(activities);
//        }

        try {
            refreshResoucesMd5(ResourceType.ACTIVITY);
        } catch (IOException e) {
            e.printStackTrace();
        }

        resultMap.setData(activities);
        return resultMap;
    }

    @Override
    public ResultMap refreshResoucesMd5(ResourceType type) throws IOException {
        ResultMap resultMap = getInitialResultMap();
//        if (type == null) {
//            synchronized (LocalCache.CACHE_GAME_RESOURCE_MD5_LIST) {
//                LocalCache.CACHE_GAME_RESOURCE_MD5_LIST.clear();
//
//                Map<String, Object> resourceInfo = new HashMap<String, Object>();
//                // 歌曲
//                resourceInfo.put("type", ResourceType.MUSIC);
//
//                resourceInfo.put("md5", DigestUtils.md5Hex(JsonUtils.toString(
//                        LocalCache.CACHE_MUSICPOJO_MAP.values()).getBytes(
//                        "utf-8")));
//                LocalCache.CACHE_GAME_RESOURCE_MD5_LIST.add(resourceInfo);
//                // 谱面
//				/*resourceInfo = new HashMap<String, Object>();
//				resourceInfo.put("type", ResourceType.SCHEME);
//				resourceInfo.put("md5", DigestUtils.md5Hex(JsonUtils.toString(
//						LocalCache.CACHE_SCHEME_MAP.values()).getBytes(
//						"utf-8")));
//				LocalCache.CACHE_GAME_RESOURCE_MD5_LIST.add(resourceInfo);*/
//
//                // 剧情
//                resourceInfo = new HashMap<String, Object>();
//                resourceInfo.put("type", ResourceType.STORY);
//                resourceInfo.put(
//                        "md5",
//                        DigestUtils.md5Hex(JsonUtils.toString(
//                                LocalCache.CACHE_STORY_MAP.values()).getBytes(
//                                "utf-8")));
//                LocalCache.CACHE_GAME_RESOURCE_MD5_LIST.add(resourceInfo);
//                // 挑战
//                resourceInfo = new HashMap<String, Object>();
//                resourceInfo.put("type", ResourceType.CHALLENGE);
//
//                resourceInfo.put("md5", DigestUtils.md5Hex(JsonUtils.toString(
//                        LocalCache.CACHE_CHALLENGE_MAP.values()).getBytes(
//                        "utf-8")));
//                LocalCache.CACHE_GAME_RESOURCE_MD5_LIST.add(resourceInfo);
//                // 活动
//                resourceInfo = new HashMap<String, Object>();
//                resourceInfo.put("type", ResourceType.ACTIVITY);
//                resourceInfo.put("md5", DigestUtils.md5Hex(JsonUtils.toString(
//                        LocalCache.CACHE_NORMAL_ACTIVITY_MAP.values())
//                        .getBytes("utf-8")));
//                LocalCache.CACHE_GAME_RESOURCE_MD5_LIST.add(resourceInfo);
//                // 道具
//                resourceInfo = new HashMap<String, Object>();
//                resourceInfo.put("type", ResourceType.PROP);
//                resourceInfo.put(
//                        "md5",
//                        DigestUtils.md5Hex(JsonUtils.toString(
//                                LocalCache.CACHE_PROP_MAP.values()).getBytes(
//                                "utf-8")));
//                LocalCache.CACHE_GAME_RESOURCE_MD5_LIST.add(resourceInfo);
//                // 头像
//                resourceInfo = new HashMap<String, Object>();
//                resourceInfo.put("type", ResourceType.HEAD_IMAGE);
//                resourceInfo.put("md5", DigestUtils.md5Hex(JsonUtils.toString(
//                        LocalCache.CACHE_HEADIMAGE_MAP.values()).getBytes(
//                        "utf-8")));
//                LocalCache.CACHE_GAME_RESOURCE_MD5_LIST.add(resourceInfo);
//                // 特效
//                resourceInfo = new HashMap<String, Object>();
//                resourceInfo.put("type", ResourceType.EQUIP);
//                resourceInfo.put(
//                        "md5",
//                        DigestUtils.md5Hex(JsonUtils.toString(
//                                LocalCache.CACHE_EQUIP_MAP.values()).getBytes(
//                                "utf-8")));
//                LocalCache.CACHE_GAME_RESOURCE_MD5_LIST.add(resourceInfo);
//                // 商品
//                LocalCache.CACHE_GOODS_MD5_MAP.put(0, DigestUtils.md5Hex(JsonUtils.toString(
//                        LocalCache.CACHE_PLATFORM_GOODS_MAP.get(0)).getBytes(
//                        "utf-8")));
//                LocalCache.CACHE_GOODS_MD5_MAP.put(1, DigestUtils.md5Hex(JsonUtils.toString(
//                        LocalCache.CACHE_PLATFORM_GOODS_MAP.get(1)).getBytes(
//                        "utf-8")));
//				/*resourceInfo = new HashMap<String, Object>();
//				resourceInfo.put("type", ResourceType.GOODS);
//				resourceInfo.put(
//						"md5",
//						DigestUtils.md5Hex(JsonUtils.toString(
//								LocalCache.CACHE_GOODS_MAP.values()).getBytes(
//								"utf-8")));
//				LocalCache.CACHE_GAME_RESOURCE_MD5_LIST.add(resourceInfo);*/
//
//                // 公告
//                resourceInfo = new HashMap<String, Object>();
//                resourceInfo.put("type", ResourceType.ANNOUNCEMENT);
//                resourceInfo.put("md5", DigestUtils.md5Hex(JsonUtils.toString(
//                        LocalCache.CACHE_ANNOUNCEMENT_MAP.values()).getBytes(
//                        "utf-8")));
//                LocalCache.CACHE_GAME_RESOURCE_MD5_LIST.add(resourceInfo);
//
//                // 曲包
//                resourceInfo = new HashMap<String, Object>();
//                resourceInfo.put("type", ResourceType.ALBUM);
//                resourceInfo.put(
//                        "md5",
//                        DigestUtils.md5Hex(JsonUtils.toString(
//                                LocalCache.CACHE_ALBUMS_MAP.values()).getBytes(
//                                "utf-8")));
//                LocalCache.CACHE_GAME_RESOURCE_MD5_LIST.add(resourceInfo);
//
//                // 充值类物品
//                resourceInfo = new HashMap<String, Object>();
//                resourceInfo.put("type", ResourceType.RECHARGEITEM);
//                resourceInfo.put("md5", DigestUtils.md5Hex(JsonUtils.toString(
//                        LocalCache.CACHE_RECHARGEITEM_MAP.values()).getBytes(
//                        "utf-8")));
//                LocalCache.CACHE_GAME_RESOURCE_MD5_LIST.add(resourceInfo);
//                // VIP
//                resourceInfo = new HashMap<String, Object>();
//                resourceInfo.put("type", ResourceType.VIP);
//                resourceInfo.put(
//                        "md5",
//                        DigestUtils.md5Hex(JsonUtils.toString(
//                                LocalCache.CACHE_VIP_MAP.values()).getBytes(
//                                "utf-8")));
//                LocalCache.CACHE_GAME_RESOURCE_MD5_LIST.add(resourceInfo);
//                // login award
//                resourceInfo = new HashMap<String, Object>();
//                resourceInfo.put("type", ResourceType.LOGIN_AWARD);
//                resourceInfo.put("md5", DigestUtils.md5Hex(JsonUtils.toString(
//                        LocalCache.CACHE_LOGIN_AWARD_MAP.values()).getBytes(
//                        "utf-8")));
//                LocalCache.CACHE_GAME_RESOURCE_MD5_LIST.add(resourceInfo);
//
//                //首7签到
//                resourceInfo = new HashMap<String, Object>();
//                resourceInfo.put("type", ResourceType.FIRST_WEEK_LOGIN_AWARD);
//                resourceInfo.put("md5", DigestUtils.md5Hex(JsonUtils.toString(
//                        LocalCache.CACHE_FIRST_WEEK_LOGIN_AWARD_MAP.values()).getBytes(
//                        "utf-8")));
//                LocalCache.CACHE_GAME_RESOURCE_MD5_LIST.add(resourceInfo);
//
//                //礼包
//                resourceInfo = new HashMap<String, Object>();
//                resourceInfo.put("type", ResourceType.GIFT_PACKS);
//                resourceInfo.put("md5", DigestUtils.md5Hex(JsonUtils.toString(
//                        LocalCache.CACHE_GIFT_PACK_MAP.values()).getBytes(
//                        "utf-8")));
//                LocalCache.CACHE_GAME_RESOURCE_MD5_LIST.add(resourceInfo);
//
//                //用户等级经验分布
//                resourceInfo = new HashMap<String, Object>();
//                resourceInfo.put("type", ResourceType.USER_EXPERENCE);
//                resourceInfo.put("md5", DigestUtils.md5Hex(JsonUtils.toString(
//                        LocalCache.CACHE_USER_LEVEL_EXPERIENCE_TABLE).getBytes(
//                        "utf-8")));
//                LocalCache.CACHE_GAME_RESOURCE_MD5_LIST.add(resourceInfo);
//            }
//        } else {
//            // TODO 初始时·CACHE_GAME_RESOURCE_MD5_LIST是空的
//            for (int i = 0; i < LocalCache.CACHE_GAME_RESOURCE_MD5_LIST.size(); i++) {
//                if (LocalCache.CACHE_GAME_RESOURCE_MD5_LIST.get(i).get("type") == type) {
//                    String md5 = null;
//                    switch (type) {
//                        case MUSIC:
//                            md5 = DigestUtils.md5Hex(JsonUtils.toString(
//                                    LocalCache.CACHE_MUSICPOJO_MAP.values())
//                                    .getBytes("utf-8"));
//                            break;
//                        case STORY:
//                            md5 = DigestUtils.md5Hex(JsonUtils.toString(
//                                    LocalCache.CACHE_STORY_MAP.values()).getBytes(
//                                    "utf-8"));
//                            break;
//                        case CHALLENGE:
//                            md5 = DigestUtils.md5Hex(JsonUtils.toString(
//                                    LocalCache.CACHE_CHALLENGE_MAP.values())
//                                    .getBytes("utf-8"));
//                            break;
//                        case ACTIVITY:
//                            md5 = DigestUtils.md5Hex(JsonUtils.toString(
//                                    LocalCache.CACHE_NORMAL_ACTIVITY_MAP.values())
//                                    .getBytes("utf-8"));
//                            break;
//                        case PROP:
//                            md5 = DigestUtils.md5Hex(JsonUtils.toString(
//                                    LocalCache.CACHE_PROP_MAP.values()).getBytes(
//                                    "utf-8"));
//                            break;
//                        case HEAD_IMAGE:
//                            md5 = DigestUtils.md5Hex(JsonUtils.toString(
//                                    LocalCache.CACHE_HEADIMAGE_MAP.values())
//                                    .getBytes("utf-8"));
//                            break;
//                        case EQUIP:
//                            md5 = DigestUtils.md5Hex(JsonUtils.toString(
//                                    LocalCache.CACHE_EQUIP_MAP.values()).getBytes(
//                                    "utf-8"));
//                            break;
//                        case GOODS:
//                            LocalCache.CACHE_GOODS_MD5_MAP.put(0, DigestUtils.md5Hex(JsonUtils.toString(
//                                    LocalCache.CACHE_PLATFORM_GOODS_MAP.get(0)).getBytes(
//                                    "utf-8")));
//                            LocalCache.CACHE_GOODS_MD5_MAP.put(1, DigestUtils.md5Hex(JsonUtils.toString(
//                                    LocalCache.CACHE_PLATFORM_GOODS_MAP.get(1)).getBytes(
//                                    "utf-8")));
//                            return resultMap;
//                        case ANNOUNCEMENT:
//                            md5 = DigestUtils.md5Hex(JsonUtils.toString(
//                                    LocalCache.CACHE_ANNOUNCEMENT_MAP.values())
//                                    .getBytes("utf-8"));
//                            break;
//                        case ALBUM:
//                            md5 = DigestUtils.md5Hex(JsonUtils.toString(
//                                    LocalCache.CACHE_ALBUMS_MAP.values()).getBytes(
//                                    "utf-8"));
//                            break;
//                        case RECHARGEITEM:
//                            md5 = DigestUtils.md5Hex(JsonUtils.toString(
//                                    LocalCache.CACHE_RECHARGEITEM_MAP.values())
//                                    .getBytes("utf-8"));
//                            break;
//                        case VIP:
//                            md5 = DigestUtils.md5Hex(JsonUtils.toString(
//                                    LocalCache.CACHE_VIP_MAP.values()).getBytes(
//                                    "utf-8"));
//                        case LOGIN_AWARD:
//                            md5 = DigestUtils.md5Hex(JsonUtils.toString(
//                                    LocalCache.CACHE_LOGIN_AWARD_MAP.values())
//                                    .getBytes("utf-8"));
//                            break;
//                        case SCHEME:
//                            md5 = DigestUtils.md5Hex(JsonUtils.toString(
//                                    LocalCache.CACHE_SCHEME_MAP.values())
//                                    .getBytes("utf-8"));
//                            break;
//                        case GIFT_PACKS:
//                            md5 = DigestUtils.md5Hex(JsonUtils.toString(
//                                    LocalCache.CACHE_GIFT_PACK_MAP.values())
//                                    .getBytes("utf-8"));
//                            break;
//                        default:
//                            break;
//                    }

//                    LocalCache.CACHE_GAME_RESOURCE_MD5_LIST.get(i).put("md5",
//                            md5);
//
//                    break;
//                }
//            }
//        }

        return resultMap;
    }

    @Override
    public ResultMap getResourcesMd5(int osId) {
        ResultMap resultMap = getInitialResultMap();

        String md5 = LocalCache.CACHE_GOODS_MD5_MAP.get(osId);


        resultMap.setData(LocalCache.CACHE_GAME_RESOURCE_MD5_LIST);
        for (Map<String, Object> map : LocalCache.CACHE_GAME_RESOURCE_MD5_LIST) {
            if (map.get("type") == ResourceType.GOODS) {
                map.put("md5", md5);
                return resultMap;
            }
        }

        Map<String, Object> map = new HashMap<String, Object>();
        map.put("type", ResourceType.GOODS);
        map.put("md5", md5);
        LocalCache.CACHE_GAME_RESOURCE_MD5_LIST.add(map);
        return resultMap;
    }

    private void registerServer() throws Exception {
//        if (curatorFramework != null) {
//            curatorFramework.newNamespaceAwareEnsurePath("/server/normal")
//                    .ensure(curatorFramework.getZookeeperClient());
//            curatorFramework
//                    .create()
//                    .withMode(CreateMode.EPHEMERAL)
//                    .forPath(
//                            "/server/normal/" + MGameProperty.SERVER_LOCAL_HOST);
//        }
    }

    private void addResourceChangedListener() throws Exception {
//        if (curatorFramework != null) {
//            curatorFramework.newNamespaceAwareEnsurePath(
//                    ZOOKEEPER_RESOURCE_PATH).ensure(
//                    curatorFramework.getZookeeperClient());
//            @SuppressWarnings("resource")
//            final NodeCache resourceNodeCache = new NodeCache(curatorFramework,
//                    ZOOKEEPER_RESOURCE_PATH);
//
//            resourceNodeCache.getListenable().addListener(
//                    new NodeCacheListener() {
//
//                        @Override
//                        public void nodeChanged() throws Exception {
//                            byte[] data = resourceNodeCache.getCurrentData()
//                                    .getData();
//                            String resourceType = new String(data);
//                            if (!StringUtils.isEmpty(resourceType.trim())) {
//                                refreshResourceCache(ResourceType
//                                        .valueOf(resourceType));
//
////check ephemeral node isExit,
//// if exit just change data
//// if not exit create new Node
//
//                                if (null != curatorFramework.checkExists().forPath("/resource/"
//                                        + MGameProperty.SERVER_LOCAL_HOST)) {
//
//                                    curatorFramework.setData().forPath("/resource/"
//                                            + MGameProperty.SERVER_LOCAL_HOST, (resourceType + " has refreshed")
//                                            .getBytes());
//
//
//                                } else {
//                                    curatorFramework
//                                            .create()
//                                            .withMode(CreateMode.EPHEMERAL)
//                                            .forPath(
//                                                    "/resource/"
//                                                            + MGameProperty.SERVER_LOCAL_HOST,
//                                                    (resourceType + " has refreshed")
//                                                            .getBytes());
//
//
//                                }
//
//
//                            }
//                        }
//                    });
//            resourceNodeCache.start();
//        }

    }

    @Override
    public ResultMap refreshServersCache(ResourceType type) throws Exception {
        ResultMap resultMap = getInitialResultMap();
//        if (curatorFramework != null) {
//            curatorFramework.setData().forPath(ZOOKEEPER_RESOURCE_PATH, type.toString().getBytes());
//        }
        return resultMap;
    }

    @Override
    public ResultMap refreshResourceCache(ResourceType resourceType) {
        ResultMap resultMap = getInitialResultMap();
        switch (resourceType) {
//            case MUSIC:
//                refreshMusicCache();
//                break;
//            case STORY:
//                refreshStoryGateCache();
//                break;
//            case CHALLENGE:
//                refreshChallengeCache();
//                break;
            case ACTIVITY:
                refreshNormalActivityCache();
                break;
            default:
                break;
        }
        return resultMap;
    }

    @Override
    public ResultMap refreshResourceCache() {

        ResultMap resultMap = getInitialResultMap();


                refreshNormalActivityCache();


        return resultMap;
    }

    //升级奖励处理内部线程
    class LevelUpAwardHandlerThread extends Thread {
        public void run() {
            while (true) {
                if (TaskQueue.isEmpty()) {
                    try {
                        sleep(2000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                } else {
                    try {
                        Object[] obj = (Object[]) TaskQueue.get();

                        User user = (User) (obj[0]);
                        Award award = (Award) (obj[1]);

//                        TaskQueue.getEvent().emit(MGameProperty.USER_LEVEL_UP_AWARD_QUEUE, user, award);

                        if (award.getMusics() != null && !award.getMusics().isEmpty()) {

                        }

                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            }
        }
    }
}
