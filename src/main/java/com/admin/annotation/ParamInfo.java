package com.admin.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * 
 * @ClassName: ParamInfo
 * @Description: TODO
 * @author tianyunjie
 * @date 2015年4月7日 下午5:44:26 
 *
 */

@Target(ElementType.PARAMETER)
@Retention(RetentionPolicy.RUNTIME)
public @interface ParamInfo {
	String description() default "unkown";
}
