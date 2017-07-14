package com.admin.dao.impl;

import com.admin.dao.UserCache;
import com.admin.utils.MGameProperty;
import com.admin.dao.UserCache;
import com.admin.utils.MGameProperty;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.apache.commons.collections.CollectionUtils;

/**
 * @author liuye
 * @ClassName UserCacheImpl
 * @Description
 * @date 2015/4/3
 */

public class UserCacheImpl implements UserCache {
	private JedisPool jedisPool;
	private final static String inlineNameSpace = "user:inline:";

	public void setJedisPool(JedisPool jedisPool) {
		this.jedisPool = jedisPool;
	}

	@Override
	public boolean refreshUserInline(int userId) {
		Jedis resource = jedisPool.getResource();

		String status = resource.setex(inlineNameSpace + userId,
				MGameProperty.USER_CACHE_INLINE_TIME_S, String.valueOf(userId));

		jedisPool.returnResource(resource);

		return status.toUpperCase().equals("OK");
	}

	@Override
	public List<Integer> getAllInlineUsersId() {
		Jedis resource = jedisPool.getResource();
		Set<String> keys = resource.keys(inlineNameSpace + "*");
		jedisPool.returnResource(resource);

		List<Integer> usersId = new ArrayList<Integer>();
		for (String key : keys) {
			usersId.add(Integer.valueOf(key.split(":")[2]));
		}

		return usersId;
	}

	@Override
	public int getUsersInlineCount() {
		Jedis resource = jedisPool.getResource();
		Set<String> keys = resource.keys(inlineNameSpace + "*");
		return CollectionUtils.isEmpty(keys) ? 0 : keys.size();
	}

}
