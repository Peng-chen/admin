package com.admin.dao;

import java.util.List;
import java.util.Set;

import com.admin.bean.User;

/**
 * 
 * @ClassName: UserDao
 * @Description 大琴师游戏用户类Dao
 * @author chenyifeng
 * @date 2014年12月1日11:29:30
 * 
 */
public interface UserDao {


	/**
	 * 查看用户名是否被注册
	 * 
	 * @param nickname
	 * @return
	 */
	public boolean isExistUser(String nickname);

	/**
	 * 插入用户
	 * 
	 * @param user
	 * @return
	 */
	public boolean insertUser(User user);



	public boolean updateUser(User user);

	public User selectUserById(int userId);


	public User selectUserByDevice(String deviceCode,int areaId);


	/**
	 * 玩家添加好友
	 * 
	 * @param userId
	 * @param friendId
	 * @return
	 */
	public boolean insertUserFriend(int userId, int friendId);

	/**
	 * 查看玩家好友
	 * 
	 * @param userId
	 * @return
	 */
	public List<User> selectUserFriends(int userId);

	/**
	 * 查看玩家好友Ids
	 */
	public List<Integer> selectUserFriendIds(int userId);

	/**
	 * 查询好友添加请求
	 * @param userId
	 */
	public Set<String> quertFriendRequest(int userId);

}
