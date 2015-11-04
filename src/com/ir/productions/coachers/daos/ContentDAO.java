package com.ir.productions.coachers.daos;

import java.util.List;

import javax.persistence.EntityManager;

import com.ir.productions.coachers.entities.Content;

public class ContentDAO extends GenericDAOImpl<Content, Long>
{
	public List<Content> findByUser(Long userId, Integer type)
	{
		EntityManager mgr = getEM();
		List<Content> returnList = null;

		try
		{
			if (type == null)
			{
				returnList = mgr
						.createQuery(
								"select from Content as Content where user_id=:user_id")
						.setParameter("user_id", userId).getResultList();
			} else
			{
				returnList = mgr
						.createQuery(
								"select from Content as Content "
										+ "where user_id=:user_id and type=:type")
						.setParameter("user_id", userId)
						.setParameter("type", type).getResultList();
			}

		} catch (Exception e)
		{
			System.out.println(e.getMessage());
		} finally
		{
			mgr.close();
		}

		return returnList;
	}

	public List<Content> findByType(Integer type)
	{
		EntityManager mgr = getEM();
		List<Content> returnList = null;

		try
		{
			returnList = mgr
					.createQuery(
							"select from Content as Content where type=:type")
					.setParameter("type", type).getResultList();

		} catch (Exception e)
		{
			System.out.println(e.getMessage());
		} finally
		{
			mgr.close();
		}

		return returnList;
	}
}
