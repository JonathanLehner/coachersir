package com.ir.productions.coachers.examples;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;
import javax.servlet.http.HttpServletRequest;

import com.google.api.server.spi.config.AnnotationBoolean;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiAuth;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiNamespace;
import com.google.api.server.spi.response.NotFoundException;
import com.google.api.server.spi.response.UnauthorizedException;
import com.ir.productions.coachers.Endpoint;
import com.ir.productions.coachers.daos.ContentDAO;
import com.ir.productions.coachers.entities.Content;

@Api(name = "contentEndpoint", auth = @ApiAuth(allowCookieAuth = AnnotationBoolean.TRUE), namespace = @ApiNamespace(ownerDomain = "ir.com", ownerName = "ir.com", packagePath = "productions.coachers.entities"))
public class ContentEndpoint extends Endpoint
{

	@Inject
	ContentDAO contentDAO;

	public ContentEndpoint()
	{
		contentDAO = new ContentDAO();
	}

	@ApiMethod(path = "listByUser", httpMethod = "get")
	public List<Content> listByUser(@Named("userId") Long userId)
	{
		return contentDAO.findByUser(userId, null);
	}

	@ApiMethod(path = "articlesByUser", httpMethod = "get")
	public List<Content> articlesByUser(@Named("userId") Long userId)
	{
		return contentDAO.findByUser(userId, Content.TYPE_ARTICLE);
	}

	@ApiMethod(path = "imagesByUser", httpMethod = "get")
	public List<Content> imagesByUser(@Named("userId") Long userId)
	{
		return contentDAO.findByUser(userId, Content.TYPE_IMAGE);
	}

	@ApiMethod(path = "videosByUser", httpMethod = "get")
	public List<Content> videosByUser(@Named("userId") Long userId)
	{
		return contentDAO.findByUser(userId, Content.TYPE_VIDEO);
	}

	@ApiMethod(path = "listArticles", httpMethod = "get")
	public List<Content> listArticles()
	{
		return contentDAO.findByType(Content.TYPE_ARTICLE);
	}

	@ApiMethod(path = "listImages", httpMethod = "get")
	public List<Content> listImages()
	{
		return contentDAO.findByType(Content.TYPE_IMAGE);
	}

	@ApiMethod(path = "listVideos", httpMethod = "get")
	public List<Content> listVideos()
	{
		return contentDAO.findByType(Content.TYPE_VIDEO);
	}

	@ApiMethod(path = "insertArticle")
	public Content insertArticle(HttpServletRequest req, Content content)
			throws UnauthorizedException
	{
		verifyUserOnSession(req, content.getUser_id());
		content.setType(Content.TYPE_ARTICLE);
		return contentDAO.insert(content);
	}

	@ApiMethod(path = "insertImage")
	public Content insertImage(HttpServletRequest req, Content content)
			throws UnauthorizedException
	{
		verifyUserOnSession(req, content.getUser_id());
		content.setType(Content.TYPE_IMAGE);
		return contentDAO.insert(content);
	}

	@ApiMethod(path = "insertVideo")
	public Content insertVideo(HttpServletRequest req, Content content)
			throws UnauthorizedException
	{
		verifyUserOnSession(req, content.getUser_id());
		content.setType(Content.TYPE_VIDEO);
		return contentDAO.insert(content);
	}

	private void verifyUserOnSession(HttpServletRequest req, Long userId)
			throws UnauthorizedException
	{
		Object session_var = req.getSession().getAttribute(
				SESSION_USER_ID_ATTRIBUTE);

		if (userId == null || !userId.equals(session_var))
		{
			throw new UnauthorizedException(
					"requested operation is not supported for user.");
		}
	}

	@ApiMethod(path = "list", httpMethod = "get")
	public List<Content> list()
	{
		return contentDAO.findAll();
	}

	@ApiMethod(path = "get", httpMethod = "get")
	public Content get(@Named("id") Long id)
	{
		return contentDAO.findById(id);
	}

	@ApiMethod(path = "update", httpMethod = "post")
	public Content update(Content content) throws NotFoundException
	{
		if (content.getId() != null)
		{
			return contentDAO.update(content);
		}
		throw new NotFoundException("Content sent to update not found.");
	}

	@ApiMethod(path = "remove", httpMethod = "post")
	public void remove(@Named("id") Long id) throws NotFoundException
	{
		if (id != null)
		{
			contentDAO.delete(id);
		} else
		{
			throw new NotFoundException("Content sent to remove not found.");
		}
	}
}
