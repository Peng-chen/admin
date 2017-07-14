package com.admin.cache;

/**
 *
 * @ClassName: DropRate
 * @Description: 掉率类
 * @author luxiaodan
 * @date 2015/11/23
 *
 */
public class DropRate {

    private static int easyBeatScores[][] = {{7,9,11,13,15},
                                            {9,11,13,15,17},
                                            {11,13,15,17,19},
                                            {13,15,17,19,21}};

    private static int normalBeatScores[][] = {{15,17,19,21,23},
                                            {17,19,21,23,25},
                                            {19,21,23,25,27},
                                            {21,23,25,27,29}};

    private static int difficultBeatScores[][] = {{23,25,27,29,31},
                                            {25,27,29,31,33},
                                            {27,29,31,33,35},
                                            {29,31,33,35,37}};


    private static float easyGoldRate = 0.8f;
    private static float normaGoldlRate = 1f;
    private static float difficultGoldRate = 1.2f;
    private static float professionGoldRate = 1.5f;

    private static float easyMaterialRate = 0.7f;
    private static float normaMateriallRate = 1f;
    private static float difficultMaterialRate = 1.5f;
    private static float professionMaterialRate = 2f;

    private static float goldFall = 35f;

    private static float materialFall = 19.82044444f;

    private static float scoreRate = 0.6f;
    private static float comboRate = 0.4f;

    public static int getDifficultInt(String tag){
        String[]tags = tag.split("[_]");
        if(tags[tags.length-1].equals("easy")){
            return 1;
        } else if(tags[tags.length-1].equals("medium")){
            return 2;
        } else if(tags[tags.length-1].equals("hard")){
            return 3;
        } else {
            return 4;
        }
    }

    public static int getBeatScores(int difficult,int honor, int evaluation){
        if(honor >= 2 && evaluation >=2) {
            switch (difficult) {
                case 0:
                    return easyBeatScores[honor-2][evaluation-2];
                case 1:
                    return normalBeatScores[honor-2][evaluation-2];
                case 2:
                    return difficultBeatScores[honor-2][evaluation-2];
                default:
                    return 0;
            }
        } else {
            return 0;
        }
    }

    public static int getExpFall(){
        return 100;
    }

    public static int getGoldFall(int honor, int evaluation, int difficult){

        float gold = goldFall*getGoldDifficultRate(difficult)*(scoreRate*getEvaluationRank(evaluation) + comboRate*getHonorRank(honor));
        return (int)Math.floor(gold);
    }

    public static int getMaterialFall(int honor, int evaluation, int difficult){
        float material = materialFall*getMaterialDifficultRate(difficult)*(scoreRate*getEvaluationRank(evaluation) + comboRate*getHonorRank(honor));
        return (int)Math.floor(material);
    }

    private static float getGoldDifficultRate(int value) {
        switch (value) {
            case 1:
                return easyGoldRate;
            case 2:
                return normaGoldlRate;
            case 3:
                return difficultGoldRate;
            case 4:
                return professionGoldRate;
            default:
                return 0f;
        }
    }

    private static float getMaterialDifficultRate(int value){
        switch (value) {
            case 1:
                return easyMaterialRate;
            case 2:
                return normaMateriallRate;
            case 3:
                return difficultMaterialRate;
            case 4:
                return professionMaterialRate;
            default:
                return 0f;
        }
    }

    private static float getEvaluationRank(int value) {
        switch(value) {
            case 2:
                return 0.3f;
            case 3:
                return 0.5f;
            case 4:
                return 0.6f;
            case 5:
                return 0.8f;
            case 6:
                return 1f;
            default:
                return 0f;
        }
    }

    private static float getHonorRank(int value) {
        switch(value) {
            case 1:
                return 0.3f;
            case 2:
                return 0.5f;
            case 3:
                return 0.6f;
            case 4:
                return 0.8f;
            case 5:
                return 1f;
            default:
                return 0f;
        }
    }

    public static void main(String[]args){
       int difficultBeatScores[][] = {{1,2,3,4,5},
                {6,7,8,9,10},
                {27,29,31,33,35},
                {29,31,33,35,37}};
        System.out.print(difficultBeatScores);
    }
}