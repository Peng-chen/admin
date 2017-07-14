package com.admin.bean;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Map;

/**
 * 
 * @ClassName: HeadImage
 * @Description: 头像类  type 0--无类别  1--红  2--蓝  3--绿  4--黄
 * @author chenyifeng
 * @date 2015年1月30日15:02:27
 * 
 */
public class HeadImage {
    // 头像ID
    private Integer id;
    // 头像名称
    private String name;
    // 头像效果描述
    private String description;
    // 头像图片
    private String tag;
    //品级
    private Integer quality;

    private Map<String, Object> levels;

    private String source;

    @JsonIgnore
    private String skill;

    private Integer type;

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public Map<String, Object> getLevels() {
        return levels;
    }

    public void setLevels(Map<String, Object> levels) {
        this.levels = levels;
    }

    public Integer getQuality() {
        return quality;
    }

    public void setQuality(Integer quality) {
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

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }
}
