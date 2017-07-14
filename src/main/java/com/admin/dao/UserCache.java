package com.admin.dao;

import java.util.List;

/**
 * @author liuye
 * @ClassName UserCache
 * @Description
 * @date 2015/4/3
 */

public interface UserCache {
    /**
     * 刷新一个玩家在线信息
     *
     * @param userId
     * @return
     */
    boolean refreshUserInline(int userId);

    /**
     * 获取所有在线玩家的id
     *
     * @return
     */
    List<Integer> getAllInlineUsersId();

    /**
     * 保存user信息到redis
     *
     * @param user
     * @return
     */
//    boolean saveUser(User user);

    /**
     * 部分更新用户信息
     *
     * @param userId
     * @param key
     * @param value
     * @return
     */
//    boolean updateUserPartial(int userId, String key, String value);

    /**
     * @param userId
     * @param map
     * @return
     */
//    boolean updateUserPartial(int userId, Map<String, String> map);

    /**
     * 获取redis缓存中的用户信息
     *
     * @param userId
     * @return {@code null} 用户不存在
     */
//    User getUserById(int userId);

    /**
     * 获取在线用户数
     *
     * @return
     */
    int getUsersInlineCount();
}
