package dao;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
//@WebServlet("/user/userload")
public class UserLoad extends HttpServlet{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) 
	    throws ServletException, IOException {
	    this.doPost(request, response);
	}
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
	      throws ServletException, IOException {
		response.setHeader("content-type", "application:json;charset=utf8");  
        response.setHeader("Access-Control-Allow-Origin", "*");  
        response.setHeader("Access-Control-Allow-Methods", "POST");  
        response.setHeader("Access-Control-Allow-Headers", "x-requested-with,content-type");  
	    User user=new User();
	    String name=request.getParameter("name");
	    String password=request.getParameter("password");
	     
	    //获取register.jsp页面提交的账号和密码设置到实体类User中
        user.setUserName(name);
        user.setPassword(password);
	    
	  //引入数据交互层
	    UserDao dao=new UserDaoImpl();
//	    User flag=dao.login(user);
//	    if(flag!=null){
//	        request.setAttribute("info", "登录成功");
//	    }else{
//	       request.setAttribute("info", "登录失败");
//	   }
	    response.setContentType("text/html");  
        PrintWriter out = response.getWriter();  
//        out.println("<!DOCTYPE html>");  
//        out.println("<html>");  
//        out.println("<title>登录</title>");  
//        out.println("  <body>");  
//        out.print(" 登录成功");   
//        out.println(" </body>");  
//        out.println("</html>"); 
       
        out.flush();  
        out.close();  
	    request.getRequestDispatcher("i.html").forward(request, response);
	   }
}
