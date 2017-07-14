package com.admin.utils;

import java.sql.Array;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

import com.admin.error.ServerErrorCode;
import com.admin.exceptions.MGameRuntimeException;
import org.apache.commons.collections.CollectionUtils;
import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.TypeHandler;

public class PsqlListHander<T> implements TypeHandler<List<T>> {

	@Override
	public void setParameter(PreparedStatement ps, int i, List<T> parameter,
			JdbcType jdbcType) throws SQLException {
		Connection con = ps.getConnection();
		// hack: if using poolable connection from dbcp must get inside true
		// connection!
		if (con instanceof org.apache.commons.dbcp.PoolableConnection) {
			con = ((org.apache.commons.dbcp.PoolableConnection) con)
					.getInnermostDelegate();
		}

		if (CollectionUtils.isEmpty(parameter)) {
			ps.setArray(i, null);
		} else {
			String typeName = null;
			T t = parameter.get(0);
			if (t instanceof Integer) {
				typeName = "integer";
			} else if (t instanceof String) {
				typeName = "varchar";
			} else if (t instanceof Timestamp) {
				typeName = "timestamp";
			}

			if (typeName != null) {
				Array array = con.createArrayOf(typeName, parameter.toArray());
				ps.setArray(i, array);
			} else {
				throw new MGameRuntimeException(
						ServerErrorCode.SERVER_INTERNAL_ERROR,
						"can't known list type");
			}
		}
	}

	@Override
	public ArrayList<T> getResult(ResultSet rs, String columnName)
			throws SQLException {
		Array array = rs.getArray(columnName);
		if (array != null) {
			ArrayList<T> data = new ArrayList<T>();
			for (Object object : (Object[]) array.getArray()) {
				data.add((T) object);
			}
			return data;
		}
		return null;
	}

	@Override
	public ArrayList<T> getResult(ResultSet rs, int columnIndex)
			throws SQLException {
		Array array = rs.getArray(columnIndex);
		if (array != null) {
			ArrayList<T> data = new ArrayList<T>();
			for (Object object : (Object[]) array.getArray()) {
				data.add((T) object);
			}
			return data;
		}
		return null;
	}

	@Override
	public ArrayList<T> getResult(CallableStatement cs, int columnIndex)
			throws SQLException {
		Array array = cs.getArray(columnIndex);
		if (array != null) {
			ArrayList<T> data = new ArrayList<T>();
			for (Object object : (Object[]) array.getArray()) {
				data.add((T) object);
			}
			return data;
		}
		return null;
	}

}
