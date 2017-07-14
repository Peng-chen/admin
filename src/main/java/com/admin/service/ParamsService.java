package com.admin.service;

import java.io.IOException;

import com.admin.enums.ResourceType;
import com.admin.pojo.ResultMap;

/**
 * 
 * @ClassName: ParamsService
 * @Description: 服务器初配置参数管理接口
 * @author tianyunjie
 * @date 2014年12月10日 上午10:47:19
 * 
 */
public interface ParamsService {
    /**
     * 刷新本机资源缓存
     * @param resourceType
     * @return
     */
    public ResultMap refreshResourceCache(ResourceType resourceType);

    /**
     * 刷新本机所有资源缓存
     * @param
     * @return
     */
    public ResultMap refreshResourceCache();
    /**
     * 刷新各个资源的MD5值
     * @return
     * @throws IOException 
     */
    public ResultMap refreshResoucesMd5(ResourceType type) throws IOException;
    /**
     * 获取各个资源的MD5值
     * @return
     */
    public ResultMap getResourcesMd5(int osId);

    /**
     * 刷新集群缓存
     * @param type
     * @return
     * @throws Exception 
     */
    public ResultMap refreshServersCache(ResourceType type) throws Exception;
}
