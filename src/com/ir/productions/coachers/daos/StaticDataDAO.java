package com.ir.productions.coachers.daos;

import java.util.List;

import javax.persistence.EntityManager;

import com.ir.productions.coachers.entities.StaticData;

public class StaticDataDAO extends GenericDAOImpl<StaticData, Long>
{
	public List<StaticData> findByType(Integer type)
	{
		EntityManager mgr = getEM();
		List<StaticData> returnList = null;

		try
		{
			returnList = mgr
					.createQuery(
							"select from StaticData as StaticData where type=:type")
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
