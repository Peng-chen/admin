package com.admin.dao.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.admin.bean.User;
import com.admin.dao.UserDao;

import redis.clients.jedis.JedisPool;


/**
 * 
 * @ClassName: UserDaoImpl
 * @Description 大琴师游戏用户类Dao实现类
 * @author chenyifeng
 * @date 2014年12月1日13:04:36
 * 
 */
public class UserDaoImpl extends BaseDaoImpl implements UserDao {

	private int firstStartMinutes = 11 * 60 + 30;
	private int firstEndMinutes	= 13 * 60 + 30;
	private int secondStartMinutes = 1 * 60 + 30;
	private int secondEndMinutes = 21 * 60 + 30;

	private JedisPool jedisPool;

	public void setJedisPool(JedisPool jedisPool) {
		this.jedisPool = jedisPool;
	}

	@Override
	public boolean isExistUser(String nickname) {
		int count = sqlSession.selectOne("user.isExistUserForNickname",
				nickname);
		return count == 1;
	}

	@Override
	public boolean insertUser(User user) {
		return sqlSession.insert("user.insertUser", user) == 1;
	}

	@Override
	public boolean updateUser(User user) {
		return sqlSession.update("user.updateUser", user) == 1;
	}

	@Override
	public User selectUserById(int userId) {
		return sqlSession.selectOne("user.selectUserById", userId);
	}


	@Override
	public boolean insertUserFriend(int userId, int friendId) {
		Map<String, Object> params = new HashMap<String, Object>();
		params.put("userId", userId);
		params.put("friendId", friendId);
		return sqlSession.update("user.insertUserFriend", params) == 1;
	}

	@Override
	public List<User> selectUserFriends(int userId) {
		return sqlSession.selectList("user.selectUserFriends", userId);
	}

	public List<Integer> selectUserFriendIds(int userId) {
		return sqlSession.selectList("user.selectUserFriendIds", userId);
	}


	@Override
	public User selectUserByDevice(String deviceCode, int areaId) {
		return null;
	}

	@Override
	public Set<String> quertFriendRequest(int userId) {
		return null;
	}
}
