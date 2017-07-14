package com.admin.error;

/**
 * @author liuye
 * @ClassName ErrorCodeConfig
 * @Description 服务器错误码的基本配置，用以分配错误码区段
 * @date 2015/3/2
 */

public interface ErrorCodeConfig {

    public static final int SERVER_ERROR_CODE_BASE      = 100000;

    public static final int USER_ERROR_CODE_BASE        = 110000;

    public static final int MUSIC_ERROR_CODE_BASE       = 120000;

    public static final int SCHEME_ERROR_CODE_BASE      = 130000;

    public static final int ALBUM_ERROR_CODE_BASE       = 140000;

    public static final int EMAILSYSTEM_ERROR_CODE_BASE = 150000;

    public static final int HEADIMAGE_ERROR_CODE_BASE   = 160000;

    public static final int EQUIP_ERROR_CODE_BASE       = 170000;

    public static final int GOODS_ERROR_CODE_BASE       = 180000;

    public static final int RECHARGEITEM_ERROR_CODE_BASE= 190000;

    public static final int PIECE_ERROR_CODE_BASE       = 200000;

    public static final int ORDER_ERROR_CODE_BASE       = 210000;

    public static final int GIFT_PACK_ERRPR_CODE_BASE   = 220000;

    public static final int MATERIAL_ERROR_CODE_BASE    = 230000;

    public static final int ACTIVITY_ERROR_CODE_BASE    = 240000;

    public static final int CHALLEGE_ERROR_CODE_BASE    = 250000;
}
