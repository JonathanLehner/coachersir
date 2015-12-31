package com.ir.productions.coachers.services;

import com.ir.productions.coachers.daos.UserDAO;
import com.ir.productions.coachers.entities.User;

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

}
