package com.admin.utils;

import org.slf4j.LoggerFactory;

import java.net.InetAddress;
import java.net.UnknownHostException;

public class MGameProperty {
	/**
	 * 用户token有效期
     * 默认为1天
	 */
	public final static int CACHE_PERIOD_TIME = 60 * 60 * 1 * 24;

    /**
     * 在线用户统计的时长
     */
    public final static long INLIE_INTERVAL_TIME_MS = 60 * 1000 * 10;

    /**
     * 保存一个小时内的玩家在线信息
     */
    public final static long INLIE_REMAIN_TIME_MS = INLIE_INTERVAL_TIME_MS * 6;

    /**
     * 用户信息存在在redis服务器的时长
     */
    public final static long USER_REDIS_REMAIN_MS = INLIE_REMAIN_TIME_MS;

	/**
	 * 用户最大体力值
	 */
	public final static int USER_MUSCLE_MAX_COUNT = 6;
	/**
	 * 活动时间内登陆赠送的体力值
	 */
	public final static int USER_MUSCLE_ACTIVITY_GIVE_COUNT = 6;

	/**
	 * 体力恢复时间,单位：毫秒  60分钟
	 */
	public final static int USER_MUSCLE_RECOVERY_TIME = 1000 * 60 * 60;
	/**
	 * 单位时间恢复的体力值
	 */
	public final static int USER_MUSCLE_RECOVERY_COUNT = 1;
	/**
	 * 剧情模式消耗体力点
	 */
	public final static int USER_MUSCLE_STORIES_GAME_COST = 1;
	/**
	 * 自由模式消耗体力点
	 */
	public final static int USER_MUSCLE_FREE_GAME_COST = 1;
	/**
	 * 挑战模式消耗体力点
	 */
	public final static int USER_MUSCLE_CHALLENGE_GAME_COST = 1;
	/**
	 * 剧情最大关卡
	 */
	public final static int STORY_MAX_LEVEL = 4;
	/**
	 * 每日多余重复成功挑战次数
	 */
	public final static int USER_CHALLENGE_REMAINDER_COUNT = 5;
	/**
	 * 响应状态码key
	 */
	public final static String RESPONSE_HEADER_SERVER_STATUS = "MGAME-STATUS";

	public final static String SERVER_LOCAL_HOST;

    /**
     * token valid time, second. 1 day
     */
    public final static int TOKEN_CACHE_PERIOD_TIME_S = 24 * 60 * 60;

    /**
     * user inline time, second. 10 minutes
     */
    public final static int USER_CACHE_INLINE_TIME_S = 10 * 60;
    /**
     * 每天最多能接收的体力数
     */
    public final static long USER_MAX_DAILY_RECEIVE_COUNT = 10;
    /**
     * 月卡所需残谱数
     */
    public final static int SUPER_USER_BROKEN_CHART_COST = 300;
    /**
     * 月卡默认有效期
     */
    public final static long SUPER_USER_DEFUALT_VAILD_TIME = 29L * 24 * 60 * 60 * 1000;
	public final static String LIFE_CADE_VALID_STOP_TIME = "2200-01-01 00:00:00";
    /**
     * 月卡用户体力恢复速度折扣
     */
    public final static float SPUER_USER_MUSCLE_RECOVERY_TIME_REBATE = 0.5f;
    /**
     * 月卡商品折扣
     */
    public final static float SPUER_USER_GOODS_PRICE_REBATE = 0.8f;

	/**
	 * 金币单抽花费
	 */
	public final static int GOLD_TREASURE_COST = 250;
	/**
	 * 金币十连抽花费
	 */
	public final static int GOLD_TREASURES_COST = 2400;

	/**
	 * 第一次残谱单抽花费
	 */
	public final static int FIRST_BROKEN_CHART_TREASURE_COST = 50;
	/**
	 * 第二次残谱单抽花费
	 */
	public final static int SECOND_BROKEN_CHART_TREASURE_COST = 50;
	/**
	 * 第三次残谱单抽花费
	 */
	public final static int THIRD_BROKEN_CHART_TREASURE_COST = 50;

	/**
	 * 第一次残谱十连抽花费
	 */
	public final static int FIRST_BROKEN_CHART_TREASURES_COST = 500;
	/**
	 * 第二次残谱十连抽花费
	 */
	public final static int SECOND_BROKEN_CHART_TREASURES_COST = 500;
	/**
	 * 第三次残谱十连抽花费
	 */
	public final static int THIRD_BROKEN_CHART_TREASURES_COST = 500;

	/**
	 * 1个碎片折算金币的价值
	 */
	//TODO
	public final static int PIECE_TO_GOLD_NUM = 20;
	/**
	 * 装备折算金币价值
	 */
	//TODO
	public final static int EQUIPS_TO_GOLD_NUM = 1000;

	/**
	 * 购买随机道具扣除金币
	 */
	public final static int RANDOM_PROP_COST_GOLD = 30;
    
    /**
	 * 解锁挑战关卡需要残谱数
	 */
	public final static int CHALLENGE_GATE_UNLOCK_COST = 150;
	/**
	 * 解锁挑战关卡折扣
	 */
	public final static float CHALLENGE_GATE_UNLOCK_REBATE = 0.8f;
	/**
	 * 补签花残谱数
	 */
    public final static int USER_RE_RECEIVE_LOGIN_AWARD = 10;
    public final static String USER_ACTION_LOG_NAMESPACE = "com.catpaw.mgame.user.action";
    public final static String USER_ACCESS_LOG_NAMESPACE = "com.catpaw.mgame.user.access";
    /**
     * 日志分隔符
     */
    public final static String USER_LOG_SEPARATOR  = " - ";

	/**
	 * 玩家好友上限
	 */
	public final static int USER_MAX_FRIENDS_NUMBER = 100;

	/**
	 * 升级歌曲解锁任务队列
	 */
	public final static String USER_LEVEL_UP_AWARD_QUEUE = "USER_LEVEL_UP_AWARD_QUEUE";

	static {
		String localHost = "unknown";
		try {
			localHost = InetAddress.getLocalHost().getHostAddress();
		} catch (UnknownHostException e) {
			LoggerFactory.getLogger(MGameProperty.class).warn(
					"can't get server host", e);
		}
		SERVER_LOCAL_HOST = localHost;
	}

	//每个材料对应头像的经验
	public final static int HEADIMAGE_MATERIAL_EXPERIENCE = 100;

	public final static float GOLD_COST_PER_MATERIAL = 15.27272727f;

	public final static float LIFE_CARD_ADDITION = 0.5F;

}
