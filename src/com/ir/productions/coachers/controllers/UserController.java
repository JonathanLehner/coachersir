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
import com.ir.productions.coachers.pojos.AuthUser;
import com.ir.productions.coachers.pojos.UserPojo;
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

	@POST
	@Path("verifyEmail")
	public AuthUser verifyEmail(@Context HttpServletRequest req,
			@QueryParam("email") String email,
			@QueryParam("v") String verifyToken)
	{
		User user = userService.verifyEmail(email, verifyToken);

		if (user != null)
		{
			SessionUtils.addUserToSession(req, user.getId());
			return AuthUser.getFromUser(user);
		}

		throw new NotFoundException("User not verified");
	}

	@POST
	@Path("refreshAuthUser")
	public AuthUser refreshAuthUser(@Context HttpServletRequest req)
	{
		Long userId = SessionUtils.getUserIdOnSession(req);

		if (userId != null)
		{
			User authUser = userDAO.findById(userId);
			if (authUser != null)
			{
				return AuthUser.getFromUser(authUser);
			}
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
	public AuthUser login(@Context HttpServletRequest req, User user)
	{
		User authUser = null;

		String email = user.getEmail();
		String password = user.getPassword();

		if (email != null && !email.isEmpty() && password != null
				&& !password.isEmpty())
		{
			authUser = userService.login(email, password);
		}

		if (authUser != null)
		{
			SessionUtils.addUserToSession(req, authUser.getId());
			return AuthUser.getFromUser(authUser);
		}

		throw new NotFoundException("User not found by email and password");
	}

	@POST
	@Path("providerLogin")
	public AuthUser providerLogin(@Context HttpServletRequest req, User user)
	{
		User authUser = null;

		if (user.getProvider() != null && user.getProvider_id() != null)
		{
			authUser = userService.providerLogin(user);

			// in your authentication method
			if (authUser != null)
			{
				SessionUtils.addUserToSession(req, authUser.getId());
				return AuthUser.getFromUser(authUser);
			}
		}

		throw new NotFoundException("User not found by provider");
	}

	@POST
	@Path("logout")
	public void logout(@Context HttpServletRequest req)
	{
		SessionUtils.removeUserFromSession(req);
	}

	@GET
	@Path("listCoaches")
	public List<UserPojo> listCoaches()
	{
		return UserPojo.getFromUsers(userDAO.findByType(User.TYPE_COACH));
	}

	@GET
	@Path("listTrained")
	public List<UserPojo> listTrained()
	{
		return UserPojo.getFromUsers(userDAO.findByType(User.TYPE_TRAINED));
	}

	@POST
	@Path("signUpCoach")
	public User signUpCoach(@Context HttpServletRequest req, User user)
	{
		user.setType(User.TYPE_COACH);
		User signedUser = userService.signUp(user);

		SessionUtils.addUserToSession(req, signedUser.getId());

		return signedUser;
	}

	@POST
	@Path("signUpTrained")
	public User signUpTrained(@Context HttpServletRequest req, User user)
	{
		user.setType(User.TYPE_TRAINED);
		User signedUser = userService.signUp(user);

		SessionUtils.addUserToSession(req, signedUser.getId());

		return signedUser;
	}

	@GET
	@Path("list")
	public List<UserPojo> list()
	{
		return UserPojo.getFromUsers(userDAO.findAll());
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

	@GET
	@Path("listLocations")
	public List<GeoPt> listLocations()
	{
		return userService.getAllLocations();
	}
}
