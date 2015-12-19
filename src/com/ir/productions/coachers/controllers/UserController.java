package com.ir.productions.coachers.controllers;

import java.util.List;

import javax.persistence.EntityNotFoundException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import com.ir.productions.coachers.SystemUtils;
import com.ir.productions.coachers.daos.UserDAO;
import com.ir.productions.coachers.entities.User;

@Path("userEndpoint")
@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
@Consumes(MediaType.APPLICATION_JSON + ";charset=utf-8")
public class UserController
{
	UserDAO userDAO;

	public UserController()
	{
		userDAO = new UserDAO();
	}

	@POST
	@Path("login")
	public User login(@Context HttpServletRequest req,
			@QueryParam("email") String email,
			@QueryParam("password") String password)
	{
		HttpSession session = req.getSession(true);

		User authUser = userDAO.login(email, password);

		// in your authentication method
		if (authUser != null)
		{
			session.setAttribute(SystemUtils.SESSION_USER_ID_ATTRIBUTE,
					authUser.getId());
		}

		return authUser;
	}

	@POST
	@Path("logout")
	public void logout(HttpServletRequest req)
	{
		req.getSession().setAttribute(SystemUtils.SESSION_USER_ID_ATTRIBUTE,
				null);
	}

	@GET
	@Path("listCoachers")
	public List<User> listCoachers()
	{
		return userDAO.findByType(User.TYPE_COACH);
	}

	@GET
	@Path("listTrained")
	public List<User> listTrained()
	{
		return userDAO.findByType(User.TYPE_TRAINED);
	}

	@POST
	@Path("insertCoach")
	public User insertCoach(User user)
	{
		user.setType(User.TYPE_COACH);
		return userDAO.insert(user);
	}

	@POST
	@Path("insertTrained")
	public User insertTrained(User user)
	{
		user.setType(User.TYPE_TRAINED);
		return userDAO.insert(user);
	}

	@GET
	@Path("list")
	public List<User> list()
	{
		return userDAO.findAll();
	}

	@GET
	@Path("get")
	public User get(@QueryParam("id") Long id)
	{
		return userDAO.findById(id);
	}

	@POST
	@Path("update")
	public User update(User user) throws EntityNotFoundException
	{
		if (user.getId() != null)
		{
			return userDAO.update(user);
		}
		throw new EntityNotFoundException("User sent to update not found.");
	}

	@POST
	@Path("remove")
	public void remove(@QueryParam("id") Long id)
			throws EntityNotFoundException
	{
		if (id != null)
		{
			userDAO.delete(id);
		} else
		{
			throw new EntityNotFoundException("User sent to remove not found.");
		}
	}
}
