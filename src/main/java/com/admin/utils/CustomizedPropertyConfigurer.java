package com.admin.utils;

import java.util.HashMap;  
import java.util.Map;  
import java.util.Properties;  
  


import org.springframework.beans.BeansException;  
import org.springframework.beans.factory.config.ConfigurableListableBeanFactory;  
import org.springframework.beans.factory.config.PropertyPlaceholderConfigurer;  
  
public class CustomizedPropertyConfigurer extends PropertyPlaceholderConfigurer {  
  
    private static Map<String, Object> ctxPropertiesMap;  
  
    @Override  
    protected void processProperties(ConfigurableListableBeanFactory beanFactory,  
            Properties props)throws BeansException {  
  
        super.processProperties(beanFactory, props);  
        //load properties to ctxPropertiesMap  
        ctxPropertiesMap = new HashMap<String, Object>();  
        for (Object key : props.keySet()) {  
            String keyStr = key.toString();
            Object value = props.getProperty(keyStr);  
            ctxPropertiesMap.put(keyStr, value);
        }  
    }  
  
    //static method for accessing context properties  
    public static Object getContextProperty(String name) {  
        return ctxPropertiesMap.get(name);  
    }  
    
    @SuppressWarnings("unchecked")
	public static <T> T getContextProperty(String name, Class<T> type) { 
        return (T) ctxPropertiesMap.get(name);  
    }  
}
