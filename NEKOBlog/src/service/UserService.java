package service;
import dao.*;
public class UserService {
	private UserDaoImpl userDao = new UserDaoImpl();
	
	public boolean userRegister( String name,String password, String signature, String sex, String email){
        User user = new User();
        user.setUserName(name);
        user.setPassword(password);
        user.setSignature(signature);
        user.setSex(sex);
        user.setEmail(email);
        return  userDao.register(user);
    }
	
	public User userLoad( String name,String password){
        User user = new User();
        user.setUserName(name);
        user.setPassword(password);
        return  userDao.login(user);
    }

	
}
