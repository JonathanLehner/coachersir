package com.ir.productions.coachers.daos;

import java.util.List;

import javax.persistence.EntityManager;

import com.ir.productions.coachers.entities.Content;

public class ContentDAO extends GenericDAOImpl<Content, Long>
{
	public List<Content> findByUser(Long userId)
	{
		EntityManager mgr = getEM();
		List<Content> returnList = null;

		try
		{
			returnList = mgr
					.createQuery(
							"select from Content as Content where user_id=:user_id")
					.setParameter("user_id", userId).getResultList();

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
