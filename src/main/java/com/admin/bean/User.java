package com.admin.bean;

import org.codehaus.jackson.annotate.JsonIgnore;
import org.codehaus.jackson.annotate.JsonIgnoreType;

import java.util.List;

/**
 * 
 * @ClassName: User
 * @Description 大琴师游戏用户类
 * @author chenyifeng
 * @date 2014年12月1日10:08:56
 * 
 */
public class User {
	// 游戏id
	protected Integer id;
	// 昵称
	protected String nickname;
	// 等级
	protected Integer level;
	// 经验
	protected Integer experience;
	// 金币
	protected Integer gold;
	// 残谱
	protected Integer brokenChart;
	// 体力
	protected Integer muscle;
	// 当前所处剧情关卡
	protected Integer currentStoryGate;
	// 战斗力
	protected Float power;
	// 当前头像
	protected Integer currentHeadImage;
	// 当前闯关关卡
	protected Integer currentChallengeGate;

	protected List<Integer> currentEquip;
	// VIP等级
	protected Integer vipLevel;
	// 是否是超级账户
	protected Boolean isSuper;
	//个人签名
	protected String signature;

	//抽奖次数，依次为残谱单抽、残谱十连抽
	protected List<Integer> dropTimes;

	protected Integer totalScore;

	protected Integer currentFrame;

	protected List<Integer> activationScore;

	protected boolean isLifeCard;

	protected int beatScores;

	protected int areaId;

	public int getAreaId() {
		return areaId;
	}

	public void setAreaId(int areaId) {
		this.areaId = areaId;
	}

	public int getBeatScores() {
		return beatScores;
	}

	public void setBeatScores(int beatScores) {
		this.beatScores = beatScores;
	}

	public boolean getIsLifeCard() {
		return isLifeCard;
	}

	public void setIsLifeCard(boolean isLifeCard) {
		this.isLifeCard = isLifeCard;
	}

	public List<Integer> getActivationScore() {
		return activationScore;
	}

	public void setActivationScore(List<Integer> activationScore) {
		this.activationScore = activationScore;
	}

	public Integer getCurrentFrame() {
		return currentFrame;
	}

	public void setCurrentFrame(Integer currentFrame) {
		this.currentFrame = currentFrame;
	}

	public Integer getTotalScore() {
		return totalScore;
	}

	public void setTotalScore(Integer totalScore) {
		this.totalScore = totalScore;
	}

	public List<Integer> getDropTimes() {
		return dropTimes;
	}

	public void setDropTimes(List<Integer> dropTimes) {
		this.dropTimes = dropTimes;
	}

	public String getSignature() {
		return signature;
	}

	public void setSignature(String signature) {
		this.signature = signature;
	}

	// 当前装备
	// @DBJsonType(column = "current_equip", objectType = UserEquip.class)
	// protected UserEquip currentEquip;
	// private String current_equip;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public Integer getLevel() {
		return level;
	}

	public void setLevel(Integer level) {
		this.level = level;
	}

	public Integer getExperience() {
		return experience;
	}

	public void setExperience(Integer experience) {
		this.experience = experience;
	}

	public Integer getGold() {
		return gold;
	}

	public void setGold(Integer gold) {
		this.gold = gold;
	}

	public Integer getBrokenChart() {
		return brokenChart;
	}

	public void setBrokenChart(Integer brokenChart) {
		this.brokenChart = brokenChart;
	}

	public Integer getCurrentStoryGate() {
		return currentStoryGate;
	}

	public void setCurrentStoryGate(Integer currentStoryGate) {
		this.currentStoryGate = currentStoryGate;
	}

	public Integer getMuscle() {
		return muscle;
	}

	public void setMuscle(Integer muscle) {
		this.muscle = muscle;
	}

	public Float getPower() {
		return power;
	}

	public void setPower(Float power) {
		this.power = power;
	}

	public Integer getCurrentHeadImage() {
		return currentHeadImage;
	}

	public void setCurrentHeadImage(Integer currentHeadImage) {
		this.currentHeadImage = currentHeadImage;
	}

	public List<Integer> getCurrentEquip() {
		return currentEquip;
	}

	public void setCurrentEquip(List<Integer> currentEquip) {
		this.currentEquip = currentEquip;
	}

	public Integer getCurrentChallengeGate() {
		return currentChallengeGate;
	}

	public void setCurrentChallengGate(Integer currentChallengeGate) {
		this.currentChallengeGate = currentChallengeGate;
	}

	public Integer getVipLevel() {
		return vipLevel;
	}

	public void setVipLevel(Integer vipLevel) {
		this.vipLevel = vipLevel;
	}

	public void setIsSuper(Boolean isSuper) {
		this.isSuper = isSuper;
	}

	public Boolean getIsSuper() {
		return isSuper;
	}
}
