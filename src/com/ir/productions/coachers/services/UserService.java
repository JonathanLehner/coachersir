package com.ir.productions.coachers.services;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.WebApplicationException;

import com.google.appengine.api.datastore.GeoPt;
import com.ir.productions.coachers.MailUtils;
import com.ir.productions.coachers.RandomUtils;
import com.ir.productions.coachers.daos.UserDAO;
import com.ir.productions.coachers.entities.User;
import com.sun.jersey.api.NotFoundException;

public class UserService
{
	private static String PROVIDER_FACEBOOK = "facebook";
	private static String PROVIDER_GOOGLE = "google";

	private static int EXISTS_STATUS = 330;
	private static int NOT_VERIFIED_STATUS = 320;

	UserDAO userDAO;

	public UserService()
	{
		userDAO = new UserDAO();
	}

	public User providerLogin(User user)
	{
		User providerUser = null;
		if (PROVIDER_FACEBOOK.equals(user.getProvider())
				|| PROVIDER_GOOGLE.equals(user.getProvider()))
		{
			providerUser = userDAO.getProviderUser(user.getProvider(),
					user.getProvider_id());

			if (providerUser == null)
			{
				user.setType(User.TYPE_COACH);// todo: change when trained
				providerUser = userDAO.insert(user);
			}
		}

		return providerUser;
	}

	public List<GeoPt> getAllLocations()
	{
		List<GeoPt> locations = new ArrayList<GeoPt>();

		List<User> users = userDAO.findAll();

		for (User user : users)
		{
			locations.add(user.getLocation());
		}

		return locations;
	}

	public void resetPassword(String email)
	{
		List<User> users = userDAO.findByField("email", email);

		if (users != null && !users.isEmpty())
		{
			User user = users.get(0);

			user.setPassword(RandomUtils.getUniqueString());

			user = userDAO.update(user);
			MailUtils.sendPasswordResetMail(user);
		} else
		{
			throw new NotFoundException("User not found by email");
		}
	}

	public User verifyEmail(String email, String verifyToken)
	{
		List<User> users = userDAO.findByField("email", email);
		User user = users.get(0);

		if (user.getVerify_token().equals(verifyToken))
		{
			user.setVerify_Token(null);

			return userDAO.update(user);
		}

		throw new NotFoundException("User not found by email");
	}

	public User signUp(User user)
	{
		// verify email doesn't exist in DB already
		List<User> users = userDAO.findByField("email", user.getEmail());

		if (users.isEmpty())
		{
			user.setVerify_Token(RandomUtils.getUniqueString());
			MailUtils.sendVerficationMail(user);
			return userDAO.insert(user);
		}

		throw new WebApplicationException(EXISTS_STATUS);

	}

	public User login(String email, String password)
	{
		User authUser = null;

		authUser = userDAO.login(email, password);

		// in your authentication method
		if (authUser != null)
		{
			// if user hasn't verified his email yet
			if (authUser.getVerify_token() != null
					&& !authUser.getVerify_token().equals(""))
			{
				throw new WebApplicationException(NOT_VERIFIED_STATUS);
			}
		}

		return authUser;
	}
}
