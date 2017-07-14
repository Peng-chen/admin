package com.admin.control.admin;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.admin.enums.ResourceType;
import com.admin.error.ServerErrorCode;
import com.admin.pojo.ResultMap;
import com.admin.service.ParamsService;
import com.admin.enums.ResourceType;
import com.admin.error.ServerErrorCode;
import com.admin.pojo.ResultMap;
import com.admin.service.ParamsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class AdminRefreshController {

//	@Autowired
//	private ParamsService paramsService;


    @RequestMapping(value = "/refreshActivity", method = RequestMethod.GET)
    public @ResponseBody Map<String, Object> refreshActivity(ModelMap modelMap,
                                                             HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        response.setContentType("application/json");
        Map<String, Object> result = new HashMap<String, Object>();
        String token = request.getParameter("token");
        if (token == null) {
            result.put("status", false);
            result.put("token", 0);
            return result;
        } else if (AdminUserCache.getAdminUser(token) == null) {
            result.put("status", false);
            result.put("token", 0);
            return result;
        }
		ResultMap resultMap=new ResultMap();
//        ResultMap resultMap = paramsService
//                .refreshServersCache(ResourceType.ACTIVITY);
        if (resultMap.getStatusCode() == ServerErrorCode.SERVER_OK) {
            result.put("status", true);
        } else {
            result.put("status", false);
        }
        return result;
    }



}
