package com.admin.control.admin;

import com.admin.bean.NormalActivity;
import com.admin.pojo.ResultMap;
import com.admin.utils.DecodeSchemes;
import com.admin.bean.Award;
import com.admin.error.ServerErrorCode;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.text.ParseException;
import java.util.*;

/**
 * @author
 * @ClassName: AdminActivityController
 * @Description: 活动管理
 * @date
 */
@Controller
public class AdminActivityController {

//    @Autowired
//    private NormalActivityService normalActivityService;
//    @Autowired
//    private ParamsService paramsService;


    private Logger logger = Logger.getLogger("Activity");


    @RequestMapping(value = "/addActivity", method = RequestMethod.GET)
    public String addActivityView(ModelMap modelMap, HttpServletRequest request,
                               HttpServletResponse response) throws ParseException {
        response.setContentType("text/html;charset=utf-8");
        String token = request.getParameter("token");
        if (token == null) {
            return "index";
        } else if (AdminUserCache.getAdminUser(token) == null) {
            return "index";
        }


//        modelMap= DecodeAward.loadUsualData(modelMap);

        modelMap.put("token", token);
        modelMap.put("admin", AdminUserCache.getAdminUser(token));


        modelMap.put("btnactive", new String("activity"));
        modelMap.put("active", new String("addActivity"));
        modelMap.put("status", true);

        return "screen/activity/addActivity";
    }

    @RequestMapping(value = "/activity/all", method = RequestMethod.GET)
    public String showActivityView(ModelMap modelMap, HttpServletRequest request,
                                   HttpServletResponse response) throws ParseException {

        response.setContentType("text/html;charset=utf-8");

        String token = request.getParameter("token");
		if (token==null) {
			return "index";
		}else if(AdminUserCache.getAdminUser(token)==null){
			return "index";
		}



        modelMap.put("token", token);
        modelMap.put("admin", AdminUserCache.getAdminUser(token));

//        List<NormalActivity> beforeActivity = normalActivityService.getNormalActivities(-1).getData();
//
//        List<NormalActivity> nowActivity = normalActivityService.getNormalActivities(1).getData();
//
//        List<NormalActivity> futureActivity = normalActivityService.getNormalActivities(0).getData();
//



        //取三遍，再根据type遍历
        //todo  日产活动X3  红色表示过期、绿色表示正在、白色表示即将开放的

        //todo  打榜活动X3
//
//        modelMap.put("before-allActivitys", beforeActivity);
//        modelMap.put("now-allActivitys", nowActivity);
//        modelMap.put("future-allActivitys", futureActivity);


        modelMap.put("btnactive", new String("activity"));
        modelMap.put("active", new String("allActivitys"));

        modelMap.put("status", true);

        return "screen/activity/allActivitys";

    }



    @RequestMapping(value = "/activity/activityInfo", method = RequestMethod.GET)
    public String ActivityInfoView(ModelMap modelMap, HttpServletRequest request,
                                     HttpServletResponse response) throws ParseException {
        response.setContentType("text/html;charset=utf-8");
        String token = request.getParameter("token");

		if (token==null) {
			return "index";
		}else if(AdminUserCache.getAdminUser(token)==null){
			return "index";
		}

//        modelMap=DecodeAward.loadUsualData(modelMap);

        modelMap.put("token", token);
        modelMap.put("admin", AdminUserCache.getAdminUser(token));

        int id = Integer.valueOf(request.getParameter("activityId"));

//        ResultMap resultMap = normalActivityService.getNormalActivity(id);
//        modelMap.put("activity", resultMap.getData());
        ResultMap resultMap=new ResultMap();

        modelMap.put("btnactive", new String("activity"));
        modelMap.put("active", new String("allActivitys"));

        if (resultMap.getStatusCode() == ServerErrorCode.SERVER_OK) {
            modelMap.put("status", true);
        } else {
            modelMap.put("status", false);
        }

        return "screen/activity/activityInfo";
    }

    @RequestMapping(value = "/activity/update", method = RequestMethod.GET)
    public String updateActivityView(ModelMap modelMap, HttpServletRequest request,
                                     HttpServletResponse response) throws ParseException {
        response.setContentType("text/html;charset=utf-8");
        String token = request.getParameter("token");

		if (token==null) {
			return "index";
		}else if(AdminUserCache.getAdminUser(token)==null){
			return "index";
		}

//        modelMap=DecodeAward.loadUsualData(modelMap);

        modelMap.put("token", token);
        modelMap.put("admin", AdminUserCache.getAdminUser(token));

        int id = Integer.valueOf(request.getParameter("activityId"));

//        ResultMap resultMap = normalActivityService.getNormalActivity(id);
        ResultMap resultMap=new ResultMap();
//        modelMap.put("activity", resultMap.getData());


        modelMap.put("btnactive", new String("activity"));
        modelMap.put("active", new String("allActivitys"));

        if (resultMap.getStatusCode() == ServerErrorCode.SERVER_OK) {
            modelMap.put("status", true);
        } else {
            modelMap.put("status", false);
        }

        return "screen/activity/updateActivity";
    }


    @RequestMapping(value = "/activity/addActivity", method = RequestMethod.POST)
    public @ResponseBody  Map<String, Object> addActivity(ModelMap modelMap, HttpServletRequest request, HttpServletResponse response) throws ParseException {
        response.setContentType("application/json");
//
//        NormalActivity normalActivity=decodeActivity(request);
//        ResultMap resultMap=normalActivityService.postNormalActivity(normalActivity);

        ResultMap resultMap=new ResultMap();
        Map<String, Object> result = new HashMap<String, Object>();
        if (resultMap.getStatusCode() == ServerErrorCode.SERVER_OK) {

//            paramsService.refreshResourceCache(ResourceType.ACTIVITY);

            result.put("status", true);

        } else {
            result.put("status", false);
        }

        return result;
    }


    @RequestMapping(value = "/activity/updateActivity", method = RequestMethod.POST)
    public @ResponseBody  Map<String, Object> updateActivity(ModelMap modelMap, HttpServletRequest request, HttpServletResponse response) throws ParseException {
        response.setContentType("application/json");

        NormalActivity normalActivity=decodeActivity(request);
//        ResultMap resultMap=normalActivityService.putNormalActivity(normalActivity);
        ResultMap resultMap=new ResultMap();
        Map<String, Object> result = new HashMap<String, Object>();
        if (resultMap.getStatusCode() == ServerErrorCode.SERVER_OK) {
//            paramsService.refreshResourceCache(ResourceType.ACTIVITY);
            result.put("status", true);
        } else {
            result.put("status", false);

        }

        return result;
    }




    @RequestMapping(value = "/activity/deleteActivity", method = RequestMethod.POST)
    public @ResponseBody Map<String, Object> deleteActivity(ModelMap modelMap, HttpServletRequest request, HttpServletResponse response){

        response.setContentType("application/json");

        int id=Integer.parseInt(request.getParameter("activityId"));

        String token=request.getParameter("token");


//       ResultMap resultMap=normalActivityService.deleteNormalActivity(id);
        ResultMap resultMap=new ResultMap();
        Map<String, Object> result = new HashMap<String, Object>();
        if (resultMap.getStatusCode() == ServerErrorCode.SERVER_OK) {
//            paramsService.refreshResourceCache(ResourceType.ACTIVITY);
            result.put("status", true);
        } else {
            result.put("status", false);
        }

        return result;

    }


    private NormalActivity decodeActivity(HttpServletRequest request){

        NormalActivity normalActivity=null;

        int id=-1;
        int type = 0;
        String name = (String) request.getParameter("name");
        String description = (String) request.getParameter("description");
        String startTime = (String) request.getParameter("startTime").trim();
        String endTime = (String) request.getParameter("endTime").trim();
        String tag = (String) request.getParameter("tag");
        String schemesString = request.getParameter("schemes");
        int period = 0;
        Award leastAward = null;
        Award massiveAward = null;
       List< Integer> schemes=null;

        try {

            type = Integer.valueOf(request.getParameter("type"));
            period = Integer.valueOf(request.getParameter("period"));

            if(request.getParameter("id") != null){
                id= Integer.valueOf(request.getParameter("id"));
//                normalActivity = normalActivityService.getNormalActivity(id).getData();
                normalActivity=new NormalActivity();

            }else{

                normalActivity=new NormalActivity();

            }

            schemes= DecodeSchemes.convertStringToList(schemesString, ",", new Integer(1));


            //首次挑战奖励
            String[] firstBase = request.getParameterValues("firstBase[]");
            String[] firstProps = request.getParameterValues("firstProps[]");
            String[] firstHeads = request.getParameterValues("firstHeads[]");
            String[] firstMusic = request.getParameterValues("firstMusic[]");
            String[] firstEquip = request.getParameterValues("firstEquip[]");
            String[] firstFrame = request.getParameterValues("firstFrame[]");
            String[] firstPiece = request.getParameterValues("firstPiece[]");
            String[] firstMaterial = request.getParameterValues("firstMaterial[]");
//             massiveAward = DecodeAward.getAward(firstBase, firstProps, firstHeads, firstMusic,firstEquip,firstFrame,firstPiece,firstMaterial);

            //非首次挑战奖励
            String[] secondBase = request.getParameterValues("secondBase[]");
            String[] secondProps = request.getParameterValues("secondProps[]");
            String[] secondHeads = request.getParameterValues("secondHeads[]");
            String[] secondMusic = request.getParameterValues("secondMusic[]");
            String[] secondEquip = request.getParameterValues("secondEquip[]");
            String[] secondFrame = request.getParameterValues("secondFrame[]");
            String[] secondPiece = request.getParameterValues("secondPiece[]");
            String[] secondMaterial = request.getParameterValues("secondMaterial[]");
//            leastAward = DecodeAward.getAward(secondBase, secondProps, secondHeads, secondMusic,secondEquip,secondFrame,secondPiece,secondMaterial);


        } catch (NumberFormatException e) {

            e.printStackTrace();

            return normalActivity;

        }catch (Exception e) {

            e.printStackTrace();


            return normalActivity;

        }

        normalActivity.setName(name);
        normalActivity.setType(type);
        normalActivity.setPeriod(period);
        normalActivity.setTag(tag);
        normalActivity.setDescription(description);
        normalActivity.setSchemes(schemes);
        normalActivity.setMassiveAward(massiveAward);
        normalActivity.setLeastAward(leastAward);
        normalActivity.setEndTime(endTime.trim());
        normalActivity.setStartTime(startTime.trim());


        return normalActivity;


    }





}
