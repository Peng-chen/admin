package com.admin.cache;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import java.util.concurrent.ConcurrentHashMap;

import com.admin.bean.*;

/**
 * 
 * @ClassName: LocalCache
 * @Description: 本地缓存
 * @author tianyunjie
 * @date 2014年12月10日 上午10:18:56
 * 
 */
public class LocalCache {
	/**
	 * 活动缓存
	 */
	public static Map<Integer, NormalActivity> CACHE_NORMAL_ACTIVITY_MAP = new ConcurrentHashMap<Integer, NormalActivity>();

    /**
     * 大琴师公共资源的md5值，如歌曲，道具等资源
     */
    public static List<Map<String, Object>> CACHE_GAME_RESOURCE_MD5_LIST = new ArrayList<Map<String, Object>>();

	/**
	 * 商品md5值
	 */
	public static Map<Integer, String> CACHE_GOODS_MD5_MAP = new HashMap<Integer, String>();


}
