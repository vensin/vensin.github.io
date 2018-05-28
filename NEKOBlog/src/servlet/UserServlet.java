package servlet;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

import dao.User;
import service.UserService;
import util.GsonUtil;
@WebServlet("/user/userservlet")
public class UserServlet extends HttpServlet{
	/**
	 * 
	 */
    
	private static final long serialVersionUID = 1L;
	private static UserService userService = new UserService();
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setHeader("content-type", "application:json;charset=utf8");  
        response.setHeader("Access-Control-Allow-Origin", "/*");  
        response.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");  
        response.setHeader("Access-Control-Allow-Headers", "x-requested-with,content-type");
        doPost(request, response);
    }


    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setHeader("content-type", "application:json;charset=utf8");  
        response.setHeader("Access-Control-Allow-Origin", "*");  
        response.setHeader("Access-Control-Allow-Methods", "POST");  
        response.setHeader("Access-Control-Allow-Headers", "x-requested-with,content-type");
    	String action = request.getParameter("action");
        switch (action) {
            case "login":
            	login(request, response);
        }
    }
    
    private void login(HttpServletRequest request, HttpServletResponse response) throws IOException {
    	
    	response.setHeader("content-type", "application:json;charset=utf8");  
        response.setHeader("Access-Control-Allow-Origin", "*");  
        response.setHeader("Access-Control-Allow-Methods", "POST");  
        response.setHeader("Access-Control-Allow-Headers", "x-requested-with,content-type");  
        
        Map<String, Object> result = new HashMap<>();

        String username = request.getParameter("username");
        String password = request.getParameter("password");
        User user = userService.userLoad(username, password);
        if (user != null) {
            result.put("isSuccess", true);
            result.put("msg", "验证成功");
            result.put("id",user.getId());
        } else {
            result.put("isSuccess", false);
            result.put("msg", "用户名或密码错误！");
          
        }  
        GsonUtil.responseJson(response,result);
    }
    

 }
