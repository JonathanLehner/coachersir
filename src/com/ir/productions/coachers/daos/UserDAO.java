package com.ir.productions.coachers.daos;

import java.util.List;

import javax.persistence.EntityManager;

import com.ir.productions.coachers.entities.User;

public class UserDAO extends GenericDAOImpl<User, Long>
{
	public User login(String email, String password)
	{
		EntityManager mgr = getEM();
		User user = null;

		try
		{
			List<User> list = mgr
					.createQuery(
							"select from User as User where email=:email and password=:password")
					.setParameter("email", email)
					.setParameter("password", password).setMaxResults(1)
					.getResultList();

			if (list != null && !list.isEmpty())
			{
				user = list.get(0);
			}
		} catch (Exception e)
		{
			System.out.println(e.getMessage());
		} finally
		{
			mgr.close();
		}

		return user;
	}

	public List<User> findByType(Integer type)
	{
		EntityManager mgr = getEM();
		List<User> list = null;

		try
		{
			list = mgr.createQuery("select from User as User where type=:type")
					.setParameter("type", type).getResultList();

		} catch (Exception e)
		{
			System.out.println(e.getMessage());
		} finally
		{
			mgr.close();
		}

		return list;
	}

	public User getProviderUser(String provider, String providerId)
	{
		EntityManager mgr = getEM();
		User user = null;

		try
		{
			List<User> list = mgr
					.createQuery(
							"select from User as User where provider=:provider and provider_id=:providerId")
					.setParameter("provider", provider)
					.setParameter("providerId", providerId).setMaxResults(1)
					.getResultList();

			if (list != null && !list.isEmpty())
			{
				user = list.get(0);
			}
		} catch (Exception e)
		{
			System.out.println(e.getMessage());
		} finally
		{
			mgr.close();
		}

		return user;
	}

	public User saveProviderUser(String provider, String providerId, User user)
	{
		return null;
	}
}
