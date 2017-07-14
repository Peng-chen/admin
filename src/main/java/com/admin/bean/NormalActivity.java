package com.admin.bean;

import com.admin.annotation.DBJsonType;

import java.io.Serializable;
import java.util.List;

public class NormalActivity implements Serializable {
	// id
	private Integer id;
	// 类型：1-每日，2-每周
	private Integer type;
	// 名称
	private String name;
	// 描述、简介
	private String description;
	// 谱面列表
	private List<Integer> schemes;
	// 首次挑战成功的奖励
    @DBJsonType(column = "massive_award", objectType = Award.class)
	private Award massiveAward;
	// 非首次挑战成功的奖励
    @DBJsonType(column = "least_award", objectType = Award.class)
	private Award leastAward;
	// 开始时间
	private String startTime;
	// 结束时间
	private String endTime;
    // Tag
    private String tag;
	//	周期
	private int period;


	public int getPeriod() {
		return period;
	}

	public void setPeriod(int period) {
		this.period = period;
	}



	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getType() {
		return type;
	}

	public void setType(Integer type) {
		this.type = type;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public List<Integer> getSchemes() {
		return schemes;
	}

	public void setSchemes(List<Integer> schemes) {
		this.schemes = schemes;
	}

	public Award getMassiveAward() {
		return massiveAward;
	}

	public void setMassiveAward(Award massiveAward) {
		this.massiveAward = massiveAward;
	}

	public Award getLeastAward() {
		return leastAward;
	}

	public void setLeastAward(Award leastAward) {
		this.leastAward = leastAward;
	}

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public String getEndTime() {
		return endTime;
	}

    public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

	public boolean sortNormalActivity(NormalActivity activity) {
		if (id < activity.getId()){
			return true;
		} else {
			return false;
		}
	}
}