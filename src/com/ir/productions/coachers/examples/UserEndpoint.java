package com.ir.productions.coachers.examples;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.google.api.server.spi.config.AnnotationBoolean;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiAuth;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiNamespace;
import com.google.api.server.spi.response.NotFoundException;
import com.ir.productions.coachers.Endpoint;
import com.ir.productions.coachers.daos.UserDAO;
import com.ir.productions.coachers.entities.User;

@Api(name = "userEndpoint", auth = @ApiAuth(allowCookieAuth = AnnotationBoolean.TRUE), namespace = @ApiNamespace(ownerDomain = "ir.com", ownerName = "ir.com", packagePath = "productions.coachers.entities"))
public class UserEndpoint extends Endpoint
{
	@Inject
	UserDAO userDAO;

	public UserEndpoint()
	{
		userDAO = new UserDAO();
	}

	@ApiMethod(path = "login", httpMethod = "post")
	public User login(HttpServletRequest req, @Named("email") String email,
			@Named("password") String password)
	{
		HttpSession session = req.getSession();

		User authUser = userDAO.login(email, password);

		// in your authentication method
		if (authUser != null)
		{
			session.setAttribute(SESSION_USER_ID_ATTRIBUTE, authUser.getId());
		}

		return authUser;
	}

	@ApiMethod(path = "logout", httpMethod = "post")
	public void logout(HttpServletRequest req)
	{
		req.getSession().setAttribute(SESSION_USER_ID_ATTRIBUTE, null);
	}

	@ApiMethod(path = "listCoachers", httpMethod = "get")
	public List<User> listCoachers()
	{
		return userDAO.findByType(User.TYPE_COACH);
	}

	@ApiMethod(path = "listTrained", httpMethod = "get")
	public List<User> listTrained()
	{
		return userDAO.findByType(User.TYPE_TRAINED);
	}

	@ApiMethod(path = "insertCoach", httpMethod = "post")
	public User insertCoach(User user)
	{
		user.setType(user.TYPE_COACH);
		return userDAO.insert(user);
	}

	@ApiMethod(path = "insertTrained", httpMethod = "post")
	public User insertTrained(User user)
	{
		user.setType(user.TYPE_TRAINED);
		return userDAO.insert(user);
	}

	@ApiMethod(path = "list", httpMethod = "get")
	public List<User> list()
	{
		return userDAO.findAll();
	}

	@ApiMethod(path = "get", httpMethod = "get")
	public User get(@Named("id") Long id)
	{
		return userDAO.findById(id);
	}

	@ApiMethod(path = "update", httpMethod = "post")
	public User update(User user) throws NotFoundException
	{
		if (user.getId() != null)
		{
			return userDAO.update(user);
		}
		throw new NotFoundException("User sent to update not found.");
	}

	@ApiMethod(path = "remove", httpMethod = "post")
	public void remove(@Named("id") Long id) throws NotFoundException
	{
		if (id != null)
		{
			userDAO.delete(id);
		} else
		{
			throw new NotFoundException("User sent to remove not found.");
		}
	}
}
