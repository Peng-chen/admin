package com.admin.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * @author liuye
 * @ClassName DBJsonType
 * @Description
 * @date 2015/2/15
 */

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface DBJsonType {
    String column();
    Class objectType();
    Class collectionType() default DEFAULT.class;

    static final class DEFAULT{}
}
