package com.admin.error;

/**
 * 
 * @ClassName： UserErrorCode
 * @Description: 用户有关的错误码
 * @author chenyifeng
 * @date 2014年11月24日09:33:19
 * 
 */
public interface UserErrorCode {

	/**
	 * 110001 该账户已经存在！
	 */
	public static final int REMOTE_USER_ACCOUNT_EXIST = ErrorCodeConfig.USER_ERROR_CODE_BASE + 1;

	/**
	 * 110002 该账户不存在！
	 */
	public static final int REMOTE_USER_ACCOUNT_NOT_EXIST = ErrorCodeConfig.USER_ERROR_CODE_BASE + 2;

	/**
	 * 第三方平台账户未注册大琴师角色
	 */
	public static final int USER_PLATFORM_ACCOUNT_NOT_REGISTER = ErrorCodeConfig.USER_ERROR_CODE_BASE + 3;

	/**
	 * 第三方平台账户认证失败
	 */
	public static final int USER_PLATFORM_ACCOUNT_AUTH_FAILED = ErrorCodeConfig.USER_ERROR_CODE_BASE + 4;

	/**
	 * 第三方平台账户已经和大琴师账户绑定
	 */
	public static final int USER_PLATFORM_ACCOUNT_ALREADY_BIND = ErrorCodeConfig.USER_ERROR_CODE_BASE + 5;

	/**
	 * 110009 添加自己为好友！
	 */
	public static final int MGAME_USER_ADD_SELF_FRIEND = ErrorCodeConfig.USER_ERROR_CODE_BASE + 9;

	/**
	 * 100010 双方已经是好友关系！
	 */
	public static final int MGAME_USER_ALREADY_BE_FRIEND = ErrorCodeConfig.USER_ERROR_CODE_BASE + 10;

	/**
	 * 110011 体力不足
	 */
	public static final int MGAME_USER_MUSCLE_NOT_ENOUGH = ErrorCodeConfig.USER_ERROR_CODE_BASE + 11;

	/**
	 * 110012 装备非法
	 */
	public static final int MGAME_USER_ILLEGAL_EQUIP = ErrorCodeConfig.USER_ERROR_CODE_BASE + 12;

	/**
	 * 无效的设备激活码
	 */
	public static final int MGAME_INVALID_ACTIVATION_CODE = ErrorCodeConfig.USER_ERROR_CODE_BASE + 13;

	/**
	 * 111111 大琴师老账户未绑定猫爪账户的，需要设置猫爪账户并迁移至猫爪账户系统
	 */
	public static final int TO_SET_CATPAW = 111111;

	/**
	 * 残谱不足，扣除残谱失败
	 */
	public static final int MGAME_USER_COST_BROKENCHART_FAILED = ErrorCodeConfig.USER_ERROR_CODE_BASE + 14;

	/**
	 * 金币不足
	 */
	public static final int MGAME_USER_COST_GOLD_FAILED = ErrorCodeConfig.USER_ERROR_CODE_BASE + 15;

	/**
	 * 删除游客记录失败
	 */
	public static final int MGAME_DELETE_DEVICE_RELATION_FAILED = ErrorCodeConfig.USER_ERROR_CODE_BASE + 16;


	/**
	 * 目前已经是月卡用户无法购买
	 */
	public static final int MGAME_GAME_IS_SUPER_NOW = ErrorCodeConfig.USER_ERROR_CODE_BASE +17;

	/**
	 * 双方不是好友关系
	 */
	public static final int MGAME_GAME_NOT_FRIEND_RELATION = ErrorCodeConfig.USER_ERROR_CODE_BASE +18;

	/**
	 * 私信发送失败
	 */
	public static final int MGAME_GAME_SEND_MESSAGE_FAILED = ErrorCodeConfig.USER_ERROR_CODE_BASE +19;

	/**
	 * 您的好友上限已超过最大值
	 */
	public static final int MGAME_GAME_FRIENDS_OVER_MAX = ErrorCodeConfig.USER_ERROR_CODE_BASE +20;

	/**
	 * 更新签名失败
	 */
	public static final int MGAME_GAME_UPDATE_SIGNATURE_FAILED = ErrorCodeConfig.USER_ERROR_CODE_BASE +21;

	/**
	 * 招待码已送完
	 */
	public static final int MGAME_GAME_TREAT_CODE_RUN_OUT = ErrorCodeConfig.USER_ERROR_CODE_BASE +22;

	/**
	 * 招待玩家已经领满了招待码
	 */
	public static final int MGAME_GAME_TREAT_CODE_IS_FULL = ErrorCodeConfig.USER_ERROR_CODE_BASE +23;

	/**
	 * 玩家等级不够
	 */
	public static final int MGAME_GAME_USER_LEVEL_NOT_ENOUTH = ErrorCodeConfig.USER_ERROR_CODE_BASE +24;

	/**
	 * 招待玩家等级不够
	 */
	public static final int MGAME_GAME_TREAT_USER_LEVEL_NOT_ENOUTH = ErrorCodeConfig.USER_ERROR_CODE_BASE +25;

	/**
	 * 玩家活跃度积分不够
	 */
	public static final int MGAME_GAME_USER_ACTIVATION_SCORE_NOT_ENOUTH = ErrorCodeConfig.USER_ERROR_CODE_BASE +26;

	/**
	 * 该宝箱已经领取过
	 */
	public static final int MGAME_GAME_USER_BOX_HAS_GET = ErrorCodeConfig.USER_ERROR_CODE_BASE +27;

	/**
	 * 该账号存在风险,操作失败
	 */
	public static final int MGAME_GAME_ACCOUNT_EXCEPTION = ErrorCodeConfig.USER_ERROR_CODE_BASE +28;
}
