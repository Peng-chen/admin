package com.admin.error;

/**
 * 
 * @ClassName： ServerErrorCode
 * @Description: 服务器有关的错误码
 * @author chenyifeng
 * @date 2014年11月24日09:32:34
 * 
 */
public interface ServerErrorCode {

	/**
	 * 服务端正常执行!
	 */
	public static int SERVER_OK = 0;

	/**
	 * 服务器内部错误！
	 */
	public static final int SERVER_INTERNAL_ERROR = ErrorCodeConfig.SERVER_ERROR_CODE_BASE + 1;

	/**
	 * 参数错误！
	 */
	public static final int SERVER_PARAM_ERROR = ErrorCodeConfig.SERVER_ERROR_CODE_BASE + 2;

	/**
	 * 数据库错误！
	 */
	public static final int SERVER_DATABASE_ERROR = ErrorCodeConfig.SERVER_ERROR_CODE_BASE + 3;

	/**
	 * token超时！
	 */
	public static final int SERVER_TOKEN_OUT_TIME = ErrorCodeConfig.SERVER_ERROR_CODE_BASE + 4;

	/**
	 * 110005 memcached出错！
	 */
	public static final int MEMCACHED_ERROR = ErrorCodeConfig.SERVER_ERROR_CODE_BASE + 5;
	/**
	 * 游戏数据异常，存在作弊
	 */
	public static final int MGAME_GAME_RESULT_ERROR = ErrorCodeConfig.SERVER_ERROR_CODE_BASE + 6;
	/**
	 * 游戏通关失败
	 */
	public static final int MGAME_GAME_GATE_FAILED = ErrorCodeConfig.SERVER_ERROR_CODE_BASE + 7;
	/**
	 * 用户新增体验权限失败
	 */
	public static final int MGAME_GAME_FREE_EXPERIENCE_FAILED = ErrorCodeConfig.SERVER_ERROR_CODE_BASE + 8;

	/**
	 * 开启宝箱失败
	 */
	public static final int MGAME_GAME_GET_TREASURE_FAILED = ErrorCodeConfig.SERVER_ERROR_CODE_BASE + 9;

	/**
	 * 当前游戏版本不正确
	 */
	public static final int MGAME_GAME_VERSION_NOT_CORRECT = ErrorCodeConfig.SERVER_ERROR_CODE_BASE + 10;

	/**
	 * 未知错误
	 */
	public static final int UNKNOW_ERROR = ErrorCodeConfig.SERVER_ERROR_CODE_BASE + 11;

	/**
	 * 服务器维护中
	 */
	public static final int SERVER_MAINTAINING = ErrorCodeConfig.SERVER_ERROR_CODE_BASE + 12;

	/**
	 *  好友接收体力达到上限
	 */
	public static final int FRIENDS_MUSCLE_RECEIVE_OVER = ErrorCodeConfig.SERVER_ERROR_CODE_BASE  +  13;
}
