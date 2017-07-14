package com.admin.bean;

import java.util.List;

/**
 * 
 * @ClassName: Album
 * @Description: 曲包，专辑
 * @author tianyunjie
 * @date 2014年11月27日 上午9:53:50
 * 
 */
public class Album {
	// 编号
	protected Integer id;
	// 名称
	protected String name;
	// 描述
	protected String description;
    // 客户端标记
    protected String tag;
	// 包含的歌曲
	protected List<Integer> musics;

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

    public List<Integer> getMusics() {
		return musics;
	}

	public void setMusics(List<Integer> musics) {
		this.musics = musics;
	}

	@Override
	public String toString() {
		return "Album [id=" + id + ", name=" + name + ", description="
				+ description + ", musics=" + musics + "]";
	}
}
