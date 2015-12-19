package com.ir.productions.coachers.controllers;

import java.util.List;
import java.util.Map;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.ir.productions.coachers.daos.StaticDataDAO;
import com.ir.productions.coachers.entities.Locations;
import com.ir.productions.coachers.entities.StaticData;

@Path("staticDataEndpoint")
@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
@Consumes(MediaType.APPLICATION_JSON + ";charset=utf-8")
public class StaticDataController
{
	StaticDataDAO staticDataDAO;

	public StaticDataController()
	{
		staticDataDAO = new StaticDataDAO();
	}

	@GET
	@Path("allLocations")
	public Map<Integer, List<String>> getAllLocations()
	{
		return Locations.getAllLocations();
	}

	@GET
	@Path("listObjectives")
	public List<StaticData> listObjectives()
	{
		return staticDataDAO.findByType(StaticData.TYPE_OBJECTIVE);
	}

	@GET
	@Path("listDegrees")
	public List<StaticData> listDegrees()
	{
		return staticDataDAO.findByType(StaticData.TYPE_DEGREE);
	}
}
