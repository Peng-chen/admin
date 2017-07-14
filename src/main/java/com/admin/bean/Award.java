package com.admin.bean;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import java.util.List;
import java.util.Map;

/**
 *
 * @ClassName: Award
 * @Description: 奖品类，包含金币、体力、残谱和道具
 * @author chenyifeng
 * @date 2015年1月6日15:18:55
 *
 */
@JsonInclude(Include.NON_NULL)
public class Award {

	// 金币数量
	private Integer gold;
	// 经验
	private Integer experience;
	// 体力数量
	private Integer muscle;
	// 残谱数量
	private Integer brokenChart;
	// 各道具及其数量
	private List<Map<String, Integer>> props;
	// 歌曲
	private List<Integer> musics;
	// 头像
	private List<Integer> headImages;
	//碎片
//	private List<UserPieceRelation> pieces;
	//装备
	private List<Integer> equips;

	private List<UserMaterialRelation> materials;

	private Integer monthCard;

	private List<Integer> frames;

	public void copyAward(Award award){
		this.gold = award.getGold();
		this.experience = award.getExperience();
		this.muscle = award.getMuscle();
		this.brokenChart = award.getBrokenChart();
		this.props = award.getProps();
		this.musics = award.getMusics();
		this.headImages = award.getHeadImages();
//		this.pieces = award.getPieces();
		this.equips = award.getEquips();
		this.materials = award.getMaterials();
		this.monthCard = award.getMonthCard();
		this.frames = award.getFrames();
	}

	public List<Integer> getFrames() {
		return frames;
	}

	public void setFrames(List<Integer> frames) {
		this.frames = frames;
	}

	public Integer getMonthCard() {
		return monthCard;
	}

	public void setMonthCard(Integer monthCard) {
		this.monthCard = monthCard;
	}

	public List<UserMaterialRelation> getMaterials() {
		return materials;
	}

	public void setMaterials(List<UserMaterialRelation> materials) {
		this.materials = materials;
	}

	public List<Integer> getEquips() {
		return equips;
	}

	public void setEquips(List<Integer> equips) {
		this.equips = equips;
	}

//	public List<UserPieceRelation> getPieces() {
//		return pieces;
//	}
//
//	public void setPieces(List<UserPieceRelation> pieces) {
//		this.pieces = pieces;
//	}

	public Integer getGold() {
		return gold;
	}

	public void setGold(Integer gold) {
		this.gold = gold;
	}

	public Integer getExperience() {
		return experience;
	}

	public void setExperience(Integer experience) {
		this.experience = experience;
	}

	public Integer getMuscle() {
		return muscle;
	}

	public void setMuscle(Integer muscle) {
		this.muscle = muscle;
	}

	public Integer getBrokenChart() {
		return brokenChart;
	}

	public void setBrokenChart(Integer brokenChart) {
		this.brokenChart = brokenChart;
	}

	public List<Map<String, Integer>> getProps() {
		return props;
	}

	public void setProps(List<Map<String, Integer>> props) {
		this.props = props;
	}

	public List<Integer> getMusics() {
		return musics;
	}

	public void setMusics(List<Integer> musics) {
		this.musics = musics;
	}

	public List<Integer> getHeadImages() {
		return headImages;
	}

	public void setHeadImages(List<Integer> headImages) {
		this.headImages = headImages;
	}

	@Override
	public String toString() {
		return "Award [gold=" + gold + ", experience=" + experience
				+ ", muscle=" + muscle + ", brokenChart=" + brokenChart
				+ ", props=" + props + "]";
	}

	@Override
	public boolean equals(Object obj)
	{
		Award award = (Award)obj;
		boolean result = false;
		if(this.headImages != null && award.getHeadImages() != null){
			result = this.headImages.equals(award.getHeadImages());
		} else if (this.equips != null && award.getEquips() != null){
			result = this.equips.equals(award.getEquips());
		}
		return result;
	}
}
