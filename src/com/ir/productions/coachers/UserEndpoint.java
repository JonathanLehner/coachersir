package com.ir.productions.coachers;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiNamespace;
import com.ir.productions.coachers.daos.UserDAO;
import com.ir.productions.coachers.entities.User;

@Api(name = "userEndpoint", namespace = @ApiNamespace(ownerDomain = "ir.com", ownerName = "ir.com", packagePath = "productions.coachers.entities"))
public class UserEndpoint extends Endpoint
{
	@Inject
	UserDAO userDAO;

	public UserEndpoint()
	{
		userDAO = new UserDAO();
	}

	@ApiMethod(path = "login", httpMethod = "post")
	public User login(@Named("email") String email,
			@Named("password") String password)
	{
		return userDAO.login(email, password);
	}

	@ApiMethod(path = "list")
	public List<User> list()
	{
		return userDAO.findAll();
	}

	@ApiMethod(path = "get")
	public User get(@Named("id") Long id)
	{
		return userDAO.findById(id);
	}

	@ApiMethod(path = "insert")
	public User insert(User user)
	{
		return userDAO.insert(user);
	}

	@ApiMethod(path = "update")
	public User update(User user)
	{
		return userDAO.update(user);
	}

	@ApiMethod(path = "remove")
	public void remove(@Named("id") Long id)
	{
		userDAO.delete(id);
	}
}
