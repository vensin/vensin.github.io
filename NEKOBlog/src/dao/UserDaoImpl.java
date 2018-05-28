package dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.mysql.jdbc.PreparedStatement;

public class UserDaoImpl implements UserDao{
	@Override
	public User login(User userLogin) {
	    Connection con=null;
	    PreparedStatement ps=null;
	    ResultSet rs=null;
	    try {
	       con=GetConnection.getCon();//1:获取数据库的连接
	         //2:书写sql语句
	         String sql="select * from user where name=? and password=? ";
	        ps=(PreparedStatement) con.prepareStatement(sql);//3：预编译
	        //4：设置值
	        ps.setString(1, userLogin.getUserName());
	        ps.setString(2, userLogin.getPassword());
	        rs=ps.executeQuery();//5:执行sql语句
	        User users=null;
	        if(rs.next()){
	            users=new User();
	            //从数据库中获取值设置到实体类的setter方法中
	           users.setId(rs.getInt("id"));
	            users.setUserName(rs.getString("name"));
	           users.setPassword(rs.getString("password"));
	           users.setSignature(rs.getString("signature"));
	           users.setSex(rs.getString("sex"));
	           users.setEmail(rs.getString("email"));
	           
	           return users;
	        }else{
	            return null;
	        }
	         
	    } catch (ClassNotFoundException e) {
	        // TODO Auto-generated catch block
	         e.printStackTrace();
	    } catch (SQLException e) {
	       // TODO Auto-generated catch block
	        e.printStackTrace();
	    }
	    return null;
	}
	/***
	* 插入的方法，即注册
	*/
	@Override
	public boolean register(User user) {
	   String sql="insert into user values(0,?,?,?,?,?) ";
	   ArrayList<Object> list=new ArrayList<Object>();
	   list.add(user.getUserName());
	   list.add(user.getPassword());
	   list.add(user.getSignature());
	   list.add(user.getSex());
	   list.add(user.getEmail());
	    
	    boolean flag=GetConnection.addUpdateDelete(sql,list.toArray());
	    if(flag){
	         return true;
	    }else{
	        return false;
	    }
	}
}
