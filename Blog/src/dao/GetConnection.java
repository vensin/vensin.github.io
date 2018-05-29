package dao;

import java.sql.*;

import com.mysql.jdbc.PreparedStatement;

class GetConnection {
	private static String jdbcName="com.mysql.jdbc.Driver";
	private static String dbUrl="jdbc:mysql://127.0.0.1:3306/nekoblog?useSSL=false";
	private static String dbUserName ="root";
	private static String dbPassword = "594757";
	
	public static Connection getCon() throws ClassNotFoundException, SQLException{
		Class.forName(jdbcName);
		System.out.println("测试加载数据库成功");
		Connection	con = (Connection) DriverManager.getConnection(dbUrl,dbUserName,dbPassword);
		System.out.println("测试数据库链接成功");
		return con;
	}
	
	public void close(Connection con)throws Exception
	{
		if(con!=null)
		close(con);
	}
	
	/***
     * 同意增删改的方法
      * @param sql
     * @param arr
     * @return
     */
       public static boolean addUpdateDelete(String sql,Object[] arr){
         Connection con=null;
         PreparedStatement ps=null;
           try {
             con=GetConnection.getCon();//第一步 ：连接数据库的操作
             ps=(PreparedStatement) con.prepareStatement(sql);//第二步：预编译
             //第三步：设值
             if(arr!=null && arr.length!=0){
                for(int i=0;i<arr.length;i++){
                    ps.setObject(i+1, arr[i]);
                 }
              }
           int count=ps.executeUpdate();//第四步：执行sql语句
             if(count>0){
                 return true;
            }else{
                return false;
             }
        } catch (ClassNotFoundException e) {
              e.printStackTrace();
        } catch (SQLException e) {
             e.printStackTrace();
        }
        return false;
   }
}
