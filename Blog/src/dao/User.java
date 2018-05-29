package dao;

import java.sql.Date;

public class User {
	private Integer id;
	private String userName;
	private String password;
	private String sex;
	private String signature;
	private String email;
	
	public void setId(Integer id)
	{
		this.id = id;
	}
	
	public Integer getId() {
	return id;
	}
	
	public void setUserName(String name)
	{
		userName = name;
	}
	
	public String getUserName() {
		return userName;
		}
	
	public void setPassword(String mypassword) {
		password = mypassword;
	}
	
	public String getPassword() {
		return password;
	}
	
	public void setSex(String sex)
	{
		this.sex = sex;
	}
	
	public String getSex() {
	return sex;
	}
	
	public void setSignature(String signature)
	{
		this.signature = signature;
	}
	
	public String getSignature() {
	return signature;
	}

	public void setEmail(String email)
	{
		this.email = email;
	}
	
	public String getEmail() {
	return email;
	}
	
	//重写toString 方法
	 @Override
	public String toString() {
	 return "User [id=" + id + ", name=" + userName + ", password=" + password + "]";
	    }
}
