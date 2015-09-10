package com.ir.productions.coachers;

import java.util.List;
import java.util.Map;

import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiNamespace;
import com.ir.productions.coachers.entities.Locations;

@Api(name = "locationsEndpoint", 
namespace = @ApiNamespace(ownerDomain = "ir.com", 
						   ownerName = "ir.com", 
						   packagePath="productions.coachers"))
public class LocationEndpoint extends Endpoint
{
	@ApiMethod(path="all")
	public Map<Locations, List<Locations>> getAll()
	{
		return Locations.getAllLocations();
	}
}
