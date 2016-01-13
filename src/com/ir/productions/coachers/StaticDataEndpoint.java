package com.ir.productions.coachers;

import java.util.List;
import java.util.Map;

import javax.inject.Inject;

import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiNamespace;
import com.ir.productions.coachers.daos.StaticDataDAO;
import com.ir.productions.coachers.entities.Location;
import com.ir.productions.coachers.entities.StaticData;

@Api(name = "staticDataEndpoint", namespace = @ApiNamespace(ownerDomain = "ir.com", ownerName = "ir.com", packagePath = "productions.coachers"))
public class StaticDataEndpoint extends Endpoint
{
	@Inject
	StaticDataDAO staticDataDAO;

	public StaticDataEndpoint()
	{
		staticDataDAO = new StaticDataDAO();
	}

	@ApiMethod(path = "allLocations")
	public Map<Integer, List<String>> getAllLocations()
	{
		return Location.getAllLocations();
	}

	@ApiMethod(path = "listObjectives")
	public List<StaticData> listObjectives()
	{
		return staticDataDAO.findByType(StaticData.TYPE_OBJECTIVE);
	}

	@ApiMethod(path = "listDegrees")
	public List<StaticData> listDegrees()
	{
		return staticDataDAO.findByType(StaticData.TYPE_DEGREE);
	}
}
