package dao;

import java.io.IOException;  
import java.io.PrintWriter;  
  
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;  
import javax.servlet.http.HttpServletRequest;  
import javax.servlet.http.HttpServletResponse;  
@WebServlet("/user/usermodify")
public class CheckUserName extends HttpServlet {  
    private static final long serialVersionUID = 1L;  
  
    @Override  
    protected void doGet(HttpServletRequest req, HttpServletResponse resp)throws ServletException, IOException {  
    	System.out.print("2");
        req.setCharacterEncoding("utf-8");  
        resp.setCharacterEncoding("utf-8");  
        resp.setContentType("text/html;charset-utf-8");  
        String userName = req.getParameter("userName");  
        System.out.println(userName);  
        PrintWriter out = resp.getWriter();  
        // 简单验证,不从数据库中取数据.userName为admin则不可用  
        if ("admin".equals(userName)) {  
            out.write("t");
        } else {  
            out.write("f");  
        }  
        System.out.println("emmm");
    }  
  
    @Override  
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)  
            throws ServletException, IOException {  
        this.doGet(req, resp);  
    }  
}  
