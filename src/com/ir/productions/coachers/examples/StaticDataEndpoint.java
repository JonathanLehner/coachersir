package com.ir.productions.coachers.examples;

import java.util.List;

import javax.inject.Inject;

import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiNamespace;
import com.ir.productions.coachers.Endpoint;
import com.ir.productions.coachers.daos.StaticDataDAO;
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
