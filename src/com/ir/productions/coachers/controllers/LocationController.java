package com.ir.productions.coachers.controllers;

import java.util.List;
import java.util.Map;

import javax.persistence.EntityNotFoundException;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import com.ir.productions.coachers.daos.LocationDAO;
import com.ir.productions.coachers.daos.StaticDataDAO;
import com.ir.productions.coachers.entities.Content;
import com.ir.productions.coachers.entities.Location;
import com.ir.productions.coachers.entities.StaticData;
import com.ir.productions.coachers.entities.User;

@Path("locationEndpoint")
@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
@Consumes(MediaType.APPLICATION_JSON + ";charset=utf-8")
public class LocationController
{
	LocationDAO locationDAO;

	public LocationController()
	{
		locationDAO = new LocationDAO();
	}

	@GET
	@Path("get")
	public Location get(@QueryParam("id") Long id)
	{
		return locationDAO.findById(id);
	}
	
	@GET
	@Path("getByUser")
	public Location imagesByUser(@QueryParam("userId") Long userId)
	{
		return locationDAO.findByUser(userId);
	}

	@GET
	@Path("list")
	public List<Location> listObjectives()
	{
		return locationDAO.findAll();
	}
	
	@POST
	@Path("insert")
	public Location insert(Location location)
	{
		return locationDAO.insert(location);
	}

	@POST
	@Path("update")
	public Location update(Location location) throws EntityNotFoundException
	{
		if (location.getId() != null)
		{
			return locationDAO.update(location);
		}
		throw new EntityNotFoundException("Content sent to update not found.");
	}

	@POST
	@Path("remove")
	public void remove(@QueryParam("id") Long id)
			throws EntityNotFoundException
	{
		if (id != null)
		{
			locationDAO.delete(id);
		} else
		{
			throw new EntityNotFoundException(
					"Content sent to remove not found.");
		}
	}
}
