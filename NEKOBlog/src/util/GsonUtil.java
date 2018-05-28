package util;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonParser;
import com.google.gson.reflect.TypeToken;

import dao.User;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class GsonUtil {


//    private static Gson gson = null;
//    static {
//        if (gson == null) {
//            gson = new Gson();
//        }
//    }
//
//    /**
//     * 将object对象转成json字符串
//     *
//     * @param object
//     * @return
//     */
//    public static String gsonString(Object object) {
//        String gsonString = null;
//        if (gson != null) {
//            gsonString = gson.toJson(object);
//        }
//        return gsonString;
//    }
//
//    public static void responseJson(HttpServletResponse response,Object obj) throws IOException {
//        response.setContentType("application/json");  //相当于（text/json ）标准写法
//        response.setCharacterEncoding("utf-8");
//        PrintWriter out = response.getWriter();
//        out.println(gsonString(obj));
//    }
//
//    public static void main(String[] args) {
//        System.out.println(GsonUtil.gsonString(new User()));
//    }

}
