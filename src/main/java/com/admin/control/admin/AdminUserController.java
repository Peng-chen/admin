package com.admin.control.admin;

import java.text.ParseException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class AdminUserController {

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ModelAndView login(ModelMap modelMap, HttpServletRequest request,
			HttpServletResponse response) throws ParseException {
		String username = request.getParameter("name");
		String password = request.getParameter("password");
		String token = AdminUserCache.adminLogin(username, password);

		ModelAndView mv = new ModelAndView();
		if (token != null) {
			mv.setViewName("redirect:/admin/addActivity");
			mv.addObject("token", token);
			return mv;
		} else {
			mv.setViewName("redirect:/");

            mv.addObject("message", new String("account or password error"));
			return mv;
		}
	}

	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public ModelAndView logout(ModelMap modelMap, HttpServletRequest request,
			HttpServletResponse response) throws ParseException {

		ModelAndView mv = new ModelAndView();

		mv.setViewName("redirect:/");
		mv.addObject("token", null);
		return mv;

	}

}
