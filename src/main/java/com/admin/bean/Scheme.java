package com.admin.bean;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.util.List;

/**
 * 
 * @ClassName: Scheme
 * @Description: 谱面信息
 * @author tianyunjie
 * @date 2014年12月4日 下午1:09:40
 * 
 */

@JsonInclude(JsonInclude.Include.NON_NULL)
public class Scheme {
	// 编号
	private Integer id;
	// 文件
	private String tag;
	// note数
	private Integer limitNote;

	// 难度等级
	private int hardLevel;
	// 总共游戏次数
	private int totalPlayCount;
	// 最近游戏次数
	private int lastPlayCount;
	// 热度
	private int hot;
	// 创建时间
	private String createTime;
	//标准分
	private Integer standardScore;

	private List<Integer> scores;

	//	质量
	private Character quality;

	public Character getQuality() {
		return quality;
	}

	public void setQuality(Character quality) {
		this.quality = quality;
	}



	public List<Integer> getScores() {
		return scores;
	}

	public void setScores(List<Integer> scores) {
		this.scores = scores;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getTag() {
		return tag;
	}

	public void setTag(String tag) {
		this.tag = tag;
	}

	@JsonIgnore
	public Integer getLimitNote() {
		return limitNote;
	}

	public void setLimitNote(Integer limitNote) {
		this.limitNote = limitNote;
	}

	public int getHardLevel() {
		return hardLevel;
	}

	public void setHardLevel(int hardLevel) {
		this.hardLevel = hardLevel;
	}

	public int getTotalPlayCount() {
		return totalPlayCount;
	}

	public void setTotalPlayCount(int totalPlayCount) {
		this.totalPlayCount = totalPlayCount;
	}

	public int getLastPlayCount() {
		return lastPlayCount;
	}

	public void setLastPlayCount(int lastPlayCount) {
		this.lastPlayCount = lastPlayCount;
	}

	public int getHot() {
		return hot;
	}

	public void setHot(int hot) {
		this.hot = hot;
	}

	public String getCreateTime() {
		return createTime;
	}

	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}

	public Integer getStandardScore() {
		return standardScore;
	}

	public void setStandardScore(Integer standardScore) {
		this.standardScore = standardScore;
	}

	@Override
	public String toString() {
		return "Scheme [id=" + id + ", tag=" + tag + ", limitNote="
				+ limitNote + ", hardLevel=" + hardLevel + ", totalPlayCount="
				+ totalPlayCount + ", lastPlayCount=" + lastPlayCount
				+ ", hot=" + hot + ", createTime=" + createTime + "]";
	}

}
