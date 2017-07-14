package com.admin.service;

import com.admin.annotation.UserAction;
import com.admin.bean.User;
import com.admin.pojo.ResultMap;

import java.util.List;
import java.util.Map;

/**
 * 
 * @InterfaceName: UserService
 * @Description: service接口
 * @author chenyifeng
 * @date 2014年12月1日13:37:54
 * 
 */
public interface UserService {

    /**
     * 根据玩家id获取用户信息
     * @param userId
     * @return
     */
    public ResultMap getUserById(int userId);

    /**
     * 根据玩家ids获取用户们的信息
     * @param userIds
     * @return
     */
    public ResultMap getUsersByIds(List<Integer> userIds);

	/**
	 * 添加好友
	 *
	 * @param userId
	 * @param friendId
	 * @return
	 */
    @UserAction
	public ResultMap postFriend(int userId, int friendId);


	public ResultMap getFriends(int userId);

    /**
     * 查询好友Id
     */
    public ResultMap getFriendIds(int userId);


    /**
     * 为了效率考虑，直接返回一个int类型
     * not resultmap
     * @param token
     * @return
     */
    public Integer getUserIdByToken(String token);

}
