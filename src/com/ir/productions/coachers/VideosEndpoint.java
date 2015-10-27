package com.ir.productions.coachers;

import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiNamespace;

@Api(name = "videoEndpoint", namespace = @ApiNamespace(ownerDomain = "ir.com", ownerName = "ir.com", packagePath = "productions.coachers.entities"))
public class VideosEndpoint
{
	@ApiMethod(name = "getToken")
	public String getToken()
	{

		return null;
	}
}
