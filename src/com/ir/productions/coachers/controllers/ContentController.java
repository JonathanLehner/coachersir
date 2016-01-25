package com.ir.productions.coachers.controllers;

import java.io.IOException;
import java.util.List;

import javax.persistence.EntityNotFoundException;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import com.google.api.server.spi.response.UnauthorizedException;
import com.ir.productions.coachers.SessionUtils;
import com.ir.productions.coachers.daos.ContentDAO;
import com.ir.productions.coachers.entities.Content;
import com.ir.productions.coachers.services.ContentService;

@Path("contentEndpoint")
@Produces(MediaType.APPLICATION_JSON + ";charset=utf-8")
@Consumes(MediaType.APPLICATION_JSON + ";charset=utf-8")
public class ContentController
{
	private ContentDAO contentDAO;
	private ContentService contentService;

	public ContentController()
	{
		this.contentDAO = new ContentDAO();
		this.contentService = new ContentService();
	}

	@GET
	@Path("getUploadToken")
	public String getUploadToken(@Context HttpServletRequest req,
			@QueryParam("type") String type) throws UnauthorizedException,
			IOException
	{
		SessionUtils.verifyUserOnSession(req);
		if (type != null)
		{
			return contentService.getUploadTokten(type);
		}

		throw new IOException("type not supported.");
	}

	@GET
	@Path("listByUser")
	public List<Content> listByUser(@QueryParam("userId") Long userId)
	{
		return contentDAO.findByUser(userId, null);
	}

	@GET
	@Path("articlesByUser")
	public List<Content> articlesByUser(@QueryParam("userId") Long userId)
	{
		return contentDAO.findByUser(userId, Content.TYPE_ARTICLE);
	}

	@GET
	@Path("imagesByUser")
	public List<Content> imagesByUser(@QueryParam("userId") Long userId)
	{
		return contentDAO.findByUser(userId, Content.TYPE_IMAGE);
	}

	@GET
	@Path("videosByUser")
	public List<Content> videosByUser(@QueryParam("userId") Long userId)
	{
		return contentDAO.findByUser(userId, Content.TYPE_VIDEO);
	}

	@GET
	@Path("listArticles")
	public List<Content> listArticles()
	{
		return contentDAO.findByType(Content.TYPE_ARTICLE);
	}

	@GET
	@Path("listImages")
	public List<Content> listImages()
	{
		return contentDAO.findByType(Content.TYPE_IMAGE);
	}

	@GET
	@Path("listVideos")
	public List<Content> listVideos()
	{
		return contentDAO.findByType(Content.TYPE_VIDEO);
	}

	@POST
	@Path("insertArticle")
	public Content insertArticle(@Context HttpServletRequest req,
			Content content) throws UnauthorizedException
	{
		SessionUtils.verifyUserOnSession(req, content.getUser_id());
		content.setType(Content.TYPE_ARTICLE);
		return contentDAO.insert(content);
	}

	@POST
	@Path("insertImage")
	public Content insertImage(@Context HttpServletRequest req, Content content)
			throws UnauthorizedException
	{
		SessionUtils.verifyUserOnSession(req, content.getUser_id());
		content.setType(Content.TYPE_IMAGE);
		return contentDAO.insert(content);
	}

	@POST
	@Path("insertVideo")
	public Content insertVideo(@Context HttpServletRequest req, Content content)
			throws UnauthorizedException
	{
		SessionUtils.verifyUserOnSession(req, content.getUser_id());
		content.setType(Content.TYPE_VIDEO);
		return contentDAO.insert(content);
	}

	@GET
	@Path("list")
	public List<Content> list()
	{
		return contentDAO.findAll();
	}

	@GET
	@Path("get")
	public Content get(@QueryParam("id") Long id)
	{
		return contentDAO.findById(id);
	}

	@POST
	@Path("update")
	public Content update(Content content) throws EntityNotFoundException
	{
		if (content.getId() != null)
		{
			return contentDAO.update(content);
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
			contentDAO.delete(id);
		} else
		{
			throw new EntityNotFoundException(
					"Content sent to remove not found.");
		}
	}
}
