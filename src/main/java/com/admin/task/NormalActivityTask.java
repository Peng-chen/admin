package com.admin.task;

import com.admin.enums.ResourceType;
import com.admin.service.NormalActivityService;
import com.admin.service.ParamsService;
import com.admin.enums.ResourceType;
import com.admin.service.NormalActivityService;
import com.admin.service.ParamsService;

public class NormalActivityTask {
	private ParamsService paramsService;
	private NormalActivityService normalActivityService;

	public void setParamsService(ParamsService paramsService) {
		this.paramsService = paramsService;
	}

	public void setNormalActivityService(
			NormalActivityService normalActivityService) {
		this.normalActivityService = normalActivityService;
	}

	public void refreshActivity() {
		paramsService.refreshResourceCache(ResourceType.ACTIVITY);
	}

}
