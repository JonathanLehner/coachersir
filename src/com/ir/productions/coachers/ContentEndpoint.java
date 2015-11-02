package com.ir.productions.coachers;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;

import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiNamespace;
import com.ir.productions.coachers.daos.ContentDAO;
import com.ir.productions.coachers.entities.Content;

@Api(name = "contentEndpoint", namespace = @ApiNamespace(ownerDomain = "ir.com", ownerName = "ir.com", packagePath = "productions.coachers.entities"))
public class ContentEndpoint extends Endpoint
{

	@Inject
	ContentDAO contentDAO;

	public ContentEndpoint()
	{
		contentDAO = new ContentDAO();
	}

	@ApiMethod(path = "listByUser")
	public List<Content> listByUser(Long userId)
	{
		return contentDAO.findByUser(userId);
	}

	@ApiMethod(path = "list")
	public List<Content> list()
	{
		return contentDAO.findAll();
	}

	@ApiMethod(path = "get")
	public Content get(@Named("id") Long id)
	{
		return contentDAO.findById(id);
	}

	@ApiMethod(path = "insert")
	public Content insert(Content content)
	{
		return contentDAO.insert(content);
	}

	@ApiMethod(path = "update")
	public Content update(Content content)
	{
		return contentDAO.update(content);
	}

	@ApiMethod(path = "remove")
	public void remove(@Named("id") Long id)
	{
		contentDAO.delete(id);
	}
}
