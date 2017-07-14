package com.admin.utils;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2016/7/27.
 */
public class DecodeSchemes {

    @SuppressWarnings("unchecked")
    public static <T> List<T>   convertStringToList(String input, String separator, T t)
            throws Exception {

        List<T> output = new ArrayList<T>();

        input=input.replace(" ", "");
        if (input.substring(input.length()-1).equals(",")) {
            input=input.substring(0, input.length()-1);
        }

        if (input != null && input.length() > 0 && separator != null) {
            if (!input.contains(separator)) {
                if (t instanceof Integer) {
                    output.add((T) Integer.valueOf(input));
                } else if (t instanceof String) {
                    output.add((T) input);
                }
            } else {
                String[] arr = input.split(separator);
                if (t instanceof Integer) {
                    for (String s : arr) {
                        output.add((T) Integer.valueOf(s));
                    }
                } else if (t instanceof String) {
                    for (String s : arr) {
                        output.add((T) s);
                    }
                }
            }
        }

        return output;
    }
}
