package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import dao.User;
import service.UserService;
import util.GsonUtil;

/**
 * Servlet implementation class UserServlet
 */
@WebServlet(name="UserServlet",urlPatterns="/UserServlet")
public class UserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private UserService userService = new UserService();
	
    /**
     * @see HttpServlet#HttpServlet()
     */
    public UserServlet() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().append("Served at: ").append(request.getContextPath());
		
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
    	 
//        response.setHeader("Access-Control-Allow-Origin", "*");  
//        response.setHeader("Access-Control-Allow-Methods", "POST");  
//        response.setHeader("Access-Control-Allow-Headers", "x-requested-with,content-type");
    	String action = request.getParameter("action");
    	System.out.print(action);
        switch (action) {
            case "login":
            	login(request, response);
            case "register":
            	register(request, response);
            default :
            	PrintWriter out = response.getWriter();
            	out.flush();
            	out.println("<script>");
            	out.println("alert('未知错误');");
    			out.println("</script>");
    			
            	
        }
	}
	
private void login(HttpServletRequest request, HttpServletResponse response) throws IOException {
    	

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
    
    private void register(HttpServletRequest request, HttpServletResponse response) throws IOException{
    	String username = request.getParameter("username");
        String password = request.getParameter("password");
        String signature = request.getParameter("signature");
        String sex = request.getParameter("sex");
        String email = request.getParameter("email");
    	
        boolean flag=userService.userRegister(username,password,signature,sex,email);
        
        if(flag) {
        	
        	PrintWriter out = response.getWriter();
        	out.flush();
        	out.println("<script>");
        	out.println("alert('注册失败');");
			out.println("</script>");
			
        	
        	String site = new String("http://localhost:8080/NEKOBlog/html/i.html");
        	response.setStatus(response.SC_MOVED_TEMPORARILY);
        	response.setHeader("Location", site);
        }
        else {
        	PrintWriter out = response.getWriter();out.flush();
        	out.println("<script>");
        	out.println("alert('注册失败');");
			out.println("</script>");
			
			
			String site = new String("http://localhost:8080/NEKOBlog/html/register.html");
        	response.setStatus(response.SC_MOVED_TEMPORARILY);
        	response.setHeader("Location", site);
        }
        
    }

}
