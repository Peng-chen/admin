package com.admin.utils;

import java.lang.reflect.Type;
import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.admin.annotation.DBJsonType;
import com.admin.annotation.DBJsonType;
import org.apache.commons.lang3.StringUtils;
import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.TypeHandler;
import org.codehaus.jackson.map.ObjectMapper;
import org.postgresql.util.PGobject;

import com.admin.bean.Award;

public class JsonHandler<T> implements TypeHandler<T> {

	@Override
	public void setParameter(PreparedStatement ps, int i, T parameter,
			JdbcType jdbcType) throws SQLException {
		if (parameter != null) {
			ObjectMapper objectMapper = new ObjectMapper();
			try {
				PGobject paramGobject = new PGobject();
				paramGobject.setType("json");
				paramGobject.setValue(objectMapper
						.writeValueAsString(parameter));
				ps.setObject(i, paramGobject);
			} catch (Exception e) {
				e.printStackTrace();
				ps.setString(i, "json_error");
			}
		} else {
			ps.setObject(i, null);
		}
	}

	@SuppressWarnings("unchecked")
	@Override
	public T getResult(ResultSet rs, String columnName) throws SQLException {
		ObjectMapper objectMapper = new ObjectMapper();
		T object = null;

		String json = rs.getString(columnName);
		if (!StringUtils.isEmpty(json)) {
			try {
                DBJsonType dbJsonType = ClassInfoUtil.getDBJsonTypeByColumn(columnName);
                if (dbJsonType.collectionType() != DBJsonType.DEFAULT.class) {
                    object = objectMapper.readValue(json,
                            objectMapper.getTypeFactory().constructCollectionType(dbJsonType.collectionType(), dbJsonType.objectType()));
                } else {
                    // 根据列名获取类类型
                    object = (T) objectMapper.readValue(json,
                            dbJsonType.objectType());
                }
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return object;
	}

	@SuppressWarnings("unchecked")
	@Override
	public T getResult(ResultSet rs, int columnIndex) throws SQLException {
		ObjectMapper objectMapper = new ObjectMapper();
		T object = null;
		String json = rs.getString(columnIndex);
		if (!StringUtils.isEmpty(json)) {
			try {
				// object = (T) objectMapper.readValue(json, Award.class);
				Type[] ts = this.getClass().getGenericInterfaces();
				Class<T> c = (Class<T>) ts[0];
				object = objectMapper.readValue(json, c);
				// ParameterizedType type = (ParameterizedType)
				// this.getClass().getGenericSuperclass();
				// Type[] types = type.getActualTypeArguments();
				// Class<T> subClass = (Class<T>) types[0];
				// object = (T) objectMapper.readValue(json, subClass);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return object;
	}

	@SuppressWarnings("unchecked")
	@Override
	public T getResult(CallableStatement cs, int columnIndex)
			throws SQLException {
		ObjectMapper objectMapper = new ObjectMapper();
		T object = null;
		String json = cs.getString(columnIndex);
		if (!StringUtils.isEmpty(json)) {
			try {
				object = (T) objectMapper.readValue(json, Award.class);
				// ParameterizedType type = (ParameterizedType)
				// this.getClass().getGenericSuperclass();
				// Type[] types = type.getActualTypeArguments();
				// Class<T> subClass = (Class<T>) types[0];
				// object = (T) objectMapper.readValue(json, subClass);
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return object;
	}

}
