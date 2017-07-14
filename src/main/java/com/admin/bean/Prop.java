package com.admin.bean;

/**
 * 
 * @ClassName: Props
 * @Description: 道具信息
 * @author chenyifeng
 * @date 2015年1月30日10:39:44
 * 
 */
public class Prop {
	// 道具id
	private Integer id;
	// 道具名称
	private String name;
	// 道具描述
	private String description;
	// 道具属性
	private Integer attribute;
	// 道具可使用的模式
	private String mode;
	// 图片
	private String tag;
	//品级
	private String quality;
	//1--红色道具  2--绿色道具  3--蓝色道具  4--特殊道具
	private Integer type;

	public Integer getType() {
		return type;
	}

	public void setType(Integer type) {
		this.type = type;
	}

	public String getQuality() {
		return quality;
	}

	public void setQuality(String quality) {
		this.quality = quality;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
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

	public Integer getAttribute() {
		return attribute;
	}

	public void setAttribute(Integer attribute) {
		this.attribute = attribute;
	}

	public String getMode() {
		return mode;
	}

	public void setMode(String mode) {
		this.mode = mode;
	}

	public String getTag() {
		return tag;
	}

	public void setTag(String tag) {
		this.tag = tag;
	}

}