package com.ir.productions.coachers.services;

import java.util.ArrayList;
import java.util.List;

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
}
