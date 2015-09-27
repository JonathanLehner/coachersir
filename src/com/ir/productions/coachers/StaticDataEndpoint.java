package com.ir.productions.coachers;

import java.util.List;
import java.util.Map;

import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiNamespace;
import com.ir.productions.coachers.entities.Degrees;
import com.ir.productions.coachers.entities.Locations;
import com.ir.productions.coachers.entities.Objectives;

@Api(name = "staticDataEndpoint", namespace = @ApiNamespace(ownerDomain = "ir.com", ownerName = "ir.com", packagePath = "productions.coachers"))
public class StaticDataEndpoint extends Endpoint
{
	@ApiMethod(path = "allLocations")
	public Map<String, List<String>> getAllLocations()
	{
		return Locations.getAllLocations();
	}

	@ApiMethod(path = "allObjectives")
	public List<String> getAllObjectives()
	{
		return Objectives.getAllNames();
	}

	@ApiMethod(path = "allDegrees")
	public List<String> getAllDegrees()
	{
		return Degrees.getAllNames();
	}
}
