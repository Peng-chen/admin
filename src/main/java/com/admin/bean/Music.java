package com.admin.bean;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;

import java.util.List;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class Music {
    // 编号
    protected Integer id;
    // 名称
    protected String name;
    // 描述
    protected String description;
    // bpm
    protected Integer bpm;
    // 歌手
    protected List<String> singer;
    // 作词
    protected List<String> lyricist;
    // 作曲
    protected List<String> composer;
    // 编曲
    protected List<String> arranger;
    // 混音
    protected List<String> mixxer;
    // 和声
    protected List<String> harmony;
    // 演奏
    protected List<String> player;
    // tag
    protected String tag;
    // 时长
    protected Integer time;
    // 是否为系统赠送歌曲
    protected Boolean systemOffered;
    // 官方默认的简单-一般-困难的三个谱曲
    protected List<Integer> defaultSchemes;
    // 总共游戏次数
    protected long totalPlayCount;
    // 最近游戏次数
    protected long lastPlayCount;
    // 热度
    protected int hot;
    // 创建时间
    @JsonIgnore
    protected String createTime;

    protected String quality;

    protected int musicType;

    protected int unlockLevel;

    public int getMusicType() {
        return musicType;
    }

    public void setMusicType(int musicType) {
        this.musicType = musicType;
    }

    public int getUnlockLevel() {
        return unlockLevel;
    }

    public void setUnlockLevel(int unlockLevel) {
        this.unlockLevel = unlockLevel;
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

    public Integer getBpm() {
        return bpm;
    }

    public void setBpm(Integer bpm) {
        this.bpm = bpm;
    }

    public List<String> getSinger() {
        return singer;
    }

    public void setSinger(List<String> singer) {
        this.singer = singer;
    }

    public List<String> getLyricist() {
        return lyricist;
    }

    public void setLyricist(List<String> lyricist) {
        this.lyricist = lyricist;
    }

    public List<String> getComposer() {
        return composer;
    }

    public void setComposer(List<String> composer) {
        this.composer = composer;
    }

    public List<String> getArranger() {
        return arranger;
    }

    public void setArranger(List<String> arranger) {
        this.arranger = arranger;
    }

    public List<String> getMixxer() {
        return mixxer;
    }

    public void setMixxer(List<String> mixxer) {
        this.mixxer = mixxer;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public List<String> getHarmony() {

        return harmony;
    }

    public void setHarmony(List<String> harmony) {
        this.harmony = harmony;
    }

    public List<String> getPlayer() {
        return player;
    }

    public void setPlayer(List<String> player) {
        this.player = player;
    }

    public Integer getTime() {
        return time;
    }

    public void setTime(Integer time) {
        this.time = time;
    }

    public Boolean getSystemOffered() {
        return systemOffered;
    }

    public void setSystemOffered(Boolean systemOffered) {
        this.systemOffered = systemOffered;
    }

    public List<Integer> getDefaultSchemes() {
        return defaultSchemes;
    }

    public void setDefaultSchemes(List<Integer> defaultSchemes) {
        this.defaultSchemes = defaultSchemes;
    }

    public long getTotalPlayCount() {
        return totalPlayCount;
    }

    public void setTotalPlayCount(long totalPlayCount) {
        this.totalPlayCount = totalPlayCount;
    }

    public long getLastPlayCount() {
        return lastPlayCount;
    }

    public void setLastPlayCount(long lastPlayCount) {
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

    @Override
    public String toString() {
        return "Music [id=" + id + ", name=" + name + ", description="
                + description + ", bpm=" + bpm + ", singer=" + singer
                + ", lyricist=" + lyricist + ", composer=" + composer
                + ", arranger=" + arranger + ", mixxer=" + mixxer
                + ", harmony=" + harmony + ", player=" + player + ", time="
                + time + ", systemOffered=" + systemOffered
                + ", defaultSchemes=" + defaultSchemes + ", totalPlayCount="
                + totalPlayCount + ", lastPlayCount=" + lastPlayCount
                + ", hot=" + hot + ", createTime=" + createTime + "]";
    }

    public <T> String convertListToString(List<T> list) {
        StringBuilder sBuilder = new StringBuilder();
        if (list != null) {
            for (T t : list) {
                sBuilder.append(t);
                sBuilder.append("，");
            }
        }
        if (sBuilder.length() > 0) {
            sBuilder = sBuilder.deleteCharAt(sBuilder.length() - 1);
        }
        return sBuilder.toString();
    }

}
