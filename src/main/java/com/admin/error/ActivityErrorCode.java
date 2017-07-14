package com.admin.error;

public interface ActivityErrorCode {

	/**
	 * 240001 解析铺面列表或者奖励的josn失败，格式不正确！
	 */
	public static int JOSON_DECODE_ERROR = ErrorCodeConfig.ACTIVITY_ERROR_CODE_BASE+ 1;
    /**
     * 240002 解析周期或者类型失败,不是数字！
     */
    public static int NUMBER_DECODE_ERROR = ErrorCodeConfig.ACTIVITY_ERROR_CODE_BASE+ 2;


}
