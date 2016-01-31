package com.ir.productions.coachers.controllers;

import java.util.List;
import java.util.logging.Logger;

import javax.persistence.EntityNotFoundException;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import com.google.api.server.spi.response.UnauthorizedException;
import com.google.appengine.api.datastore.GeoPt;
import com.ir.productions.coachers.SessionUtils;
import com.ir.productions.coachers.daos.UserDAO;
import com.ir.productions.coachers.entities.User;
import com.ir.productions.coachers.services.UserService;
import com.sun.jersey.api.NotFoundException;

@Path("userEndpoint")
@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
@Consumes(MediaType.APPLICATION_JSON + ";charset=utf-8")
public class UserController
{
	private static final Logger LOG = Logger.getLogger(UserController.class
			.getName());

	UserDAO userDAO;
	UserService userService;

	public UserController()
	{
		userDAO = new UserDAO();
		userService = new UserService();
	}

	@GET
	@Path("listLocations")
	public List<GeoPt> listLocations()
	{
		return userService.getAllLocations();
	}

	@POST
	@Path("refreshAuthUser")
	public User refreshAuthUser(@Context HttpServletRequest req)
	{
		Long userId = SessionUtils.getUserIdOnSession(req);

		if (userId != null)
		{
			return userDAO.findById(userId);
		}

		return null;
	}

	@POST
	@Path("resetPassword")
	public void resetPassword(@Context HttpServletRequest req, String email)
	{
		userService.resetPassword(email);
	}

	@POST
	@Path("login")
	public User login(@Context HttpServletRequest req, String email,
			String password)
	{
		User authUser = null;

		if (email != null && password != null)
		{
			authUser = userDAO.login(email, password);

			// in your authentication method
			if (authUser != null)
			{
				SessionUtils.addUserToSession(req, authUser.getId());
			} else
			{
				throw new NotFoundException(
						"User not found by email and password");
			}
		}

		return authUser;
	}

	@POST
	@Path("providerLogin")
	public User providerLogin(@Context HttpServletRequest req, User user)
	{
		User authUser = null;

		if (user.getProvider() != null && user.getProvider_id() != null)
		{
			authUser = userService.providerLogin(user);

			// in your authentication method
			if (authUser != null)
			{
				SessionUtils.addUserToSession(req, authUser.getId());
			} else
			{
				throw new NotFoundException("User not found by provider");
			}
		}

		return authUser;
	}

	@POST
	@Path("logout")
	public void logout(@Context HttpServletRequest req)
	{
		SessionUtils.removeUserFromSession(req);
	}

	@GET
	@Path("listCoaches")
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
	public User update(@Context HttpServletRequest req, User user)
			throws EntityNotFoundException, UnauthorizedException
	{
		SessionUtils.verifyUserOnSession(req, user.getId());

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
