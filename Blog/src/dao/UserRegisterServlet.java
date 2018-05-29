package dao;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import service.UserService;

//@WebServlet("/userregister")
public class UserRegisterServlet extends HttpServlet{
	 private UserService  userService = new  UserService();
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
	        
	        String username = request.getParameter("username");
	        String password = request.getParameter("password");
	        String signature = request.getParameter("signature");
	        String sex = request.getParameter("sex");
	        String email = request.getParameter("email");
	    	
	        userService.userRegister(username,password,signature,sex,email);
	    }
//	private static final long serialVersionUID = 1L;
//	 
//	@Override
//	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
//	    throws ServletException, IOException {
//	    this.doPost(request, response);
//	}
//	
//	@Override
//	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
//	      throws ServletException, IOException {
//	    User user=new User();
//	    //获取login.jsp页面提交的账号和密码
//	    String name=request.getParameter("name");
//	    String password=request.getParameter("password");
//	     
//	    //获取register.jsp页面提交的账号和密码设置到实体类User中
//        user.setUserName(name);
//        user.setPassword(password);
//	    
//	  //引入数据交互层
//	    UserDao dao=new UserDaoImpl();
//	    boolean flag=dao.register(user);
//	    if(flag){
//	        request.setAttribute("info", "注册成功");
//	    }else{
//	       request.setAttribute("info", "注册失败");
//	   }
//	      
//	    request.getRequestDispatcher("/load.jsp").forward(request, response);
//	   }
}
