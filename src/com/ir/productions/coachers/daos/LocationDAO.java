package com.ir.productions.coachers.daos;

import java.util.List;

import javax.persistence.EntityManager;

import com.ir.productions.coachers.entities.Location;

public class LocationDAO extends GenericDAOImpl<Location, Long>
{
	public Location findByUser(Long userId)
	{
		EntityManager mgr = getEM();
		List<Location> returnList = null;

		try
		{

			returnList = mgr
					.createQuery(
							"select from Location as Location where user_id=:user_id")
					.setParameter("user_id", userId).getResultList();

		} catch (Exception e)
		{
			System.out.println(e.getMessage());
		} finally
		{
			mgr.close();
		}
		
		if(returnList != null && !returnList.isEmpty()){
			return returnList.get(0);
		}
		return null;
	}
}
