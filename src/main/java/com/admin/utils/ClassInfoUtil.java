package com.admin.utils;

import com.admin.annotation.DBJsonType;
import org.reflections.Reflections;
import org.reflections.scanners.FieldAnnotationsScanner;

import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.Map;

/**
 * 根据列名获取所代表的bean的类类型
 * 
 * @author chenyifeng
 * @date 2015年1月8日09:58:34
 * 
 */
public class ClassInfoUtil {
	private static Map<String, DBJsonType> jsonTypeMaps = new HashMap<String, DBJsonType>();

	public static DBJsonType getDBJsonTypeByColumn(String column) {
		DBJsonType dbJsonType = null;
		if (jsonTypeMaps.containsKey(column)) {
			dbJsonType = jsonTypeMaps.get(column);
		}
		return dbJsonType;
	}

	/**
	 * 在启动的开始，加载一遍所有的数据库中json字段的映射信息
	 */
	public static void loadDBJsonTypeMap() {
		// TODO:使用较为高效的Reflection配置，目前策略比较慢
		Reflections reflections = new Reflections("com.catpaw.mgame.bean",
				"com.catpaw.mgame.pojo", new FieldAnnotationsScanner());
		for (Field field : reflections.getFieldsAnnotatedWith(DBJsonType.class)) {
			DBJsonType dbJsonType = field.getAnnotation(DBJsonType.class);
			jsonTypeMaps.put(dbJsonType.column(), dbJsonType);
		}
	}
}
