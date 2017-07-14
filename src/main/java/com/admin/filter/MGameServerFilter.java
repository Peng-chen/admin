package com.admin.filter;


import com.admin.control.BaseController;
import com.admin.utils.CustomizedPropertyConfigurer;
import com.admin.error.ServerErrorCode;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

public class MGameServerFilter implements Filter {

    private static String[] withoutVersionUrls = {
    };

    public void destroy() {}

    public void doFilter(ServletRequest request, ServletResponse response,
                         FilterChain chain) throws IOException, ServletException {

        HttpServletRequest req      = (HttpServletRequest)request;
        HttpServletResponse resp    = (HttpServletResponse)response;

        String version = req.getParameter("version");

        //过滤当前不支持的版本
        String supportVersion = (String) CustomizedPropertyConfigurer.getContextProperty("client.supportVersion");
        String[]supportVersions = supportVersion.split(",");
        List<String> supportVersionList = Arrays.asList(supportVersions);

        //如果当前版本不在支持版本内，则返回错误状态码

        if (isNeedVersion(req.getPathInfo())) {
            if (!supportVersionList.contains(version)) {
                resp.setIntHeader(BaseController.MGAME_STATUS, ServerErrorCode.MGAME_GAME_VERSION_NOT_CORRECT);
                return;
            }
        }
        chain.doFilter(req,resp);

    }

    public void init(FilterConfig filterConfig) throws ServletException {}


    private boolean isNeedVersion(String url) {
        for (String withoutVersionUrl : withoutVersionUrls) {
            if (withoutVersionUrl.equals(url)) {
                return false;
            }
        }
        return true;
    }
}
