package com.admin.bean;


/**
 * @author luxiaodan
 * @ClassName UserMaterialRelation
 * @Description 用户材料relation
 * @date 2016/2/27
 */
public class UserMaterialRelation {

    private int userId;

    private int materialType;

    private int materialNumber;

    public UserMaterialRelation(){}

    public UserMaterialRelation(int userId, int materialType, int materialNumber){
        this.userId = userId;
        this.materialType = materialType;
        this.materialNumber = materialNumber;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getMaterialType() {
        return materialType;
    }

    public void setMaterialType(int materialType) {
        this.materialType = materialType;
    }

    public int getMaterialNumber() {
        return materialNumber;
    }

    public void setMaterialNumber(int materialNumber) {
        this.materialNumber = materialNumber;
    }
}
