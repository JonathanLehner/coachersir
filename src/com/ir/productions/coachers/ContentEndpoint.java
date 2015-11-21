package com.ir.productions.coachers;

import java.util.List;

import javax.inject.Inject;
import javax.inject.Named;
import javax.servlet.http.HttpServletRequest;

import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiNamespace;
import com.google.api.server.spi.response.UnauthorizedException;
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
	public List<Content> listByUser(@Named("userId") Long userId)
	{
		return contentDAO.findByUser(userId, null);
	}

	@ApiMethod(path = "articlesByUser", httpMethod = "GET")
	public List<Content> articlesByUser(@Named("userId") Long userId)
	{
		return contentDAO.findByUser(userId, Content.TYPE_ARTICLE);
	}

	@ApiMethod(path = "imagesByUser", httpMethod = "GET")
	public List<Content> imagesByUser(@Named("userId") Long userId)
	{
		return contentDAO.findByUser(userId, Content.TYPE_IMAGE);
	}

	@ApiMethod(path = "videosByUser", httpMethod = "GET")
	public List<Content> videosByUser(@Named("userId") Long userId)
	{
		return contentDAO.findByUser(userId, Content.TYPE_VIDEO);
	}

	@ApiMethod(path = "listArticles", httpMethod = "GET")
	public List<Content> listArticles()
	{
		return contentDAO.findByType(Content.TYPE_ARTICLE);
	}

	@ApiMethod(path = "listImages", httpMethod = "GET")
	public List<Content> listImages()
	{
		return contentDAO.findByType(Content.TYPE_IMAGE);
	}

	@ApiMethod(path = "listVideos", httpMethod = "GET")
	public List<Content> listVideos()
	{
		return contentDAO.findByType(Content.TYPE_VIDEO);
	}

	@ApiMethod(path = "insertArticle")
	public Content insertArticle(HttpServletRequest req, Content content)
			throws UnauthorizedException
	{
		Object session_var = req.getSession().getAttribute(
				SESSION_USER_ID_ATTRIBUTE);

		if (content.getUser_id().equals(session_var))
		{
			content.setType(Content.TYPE_ARTICLE);
			return contentDAO.insert(content);
		} else
		{
			throw new UnauthorizedException("the user is not connected");
		}
	}

	@ApiMethod(path = "insertImage")
	public Content insertImage(Content content)
	{
		content.setType(Content.TYPE_IMAGE);
		return contentDAO.insert(content);
	}

	@ApiMethod(path = "insertVideo")
	public Content insertVideo(Content content)
	{
		content.setType(Content.TYPE_VIDEO);
		return contentDAO.insert(content);
	}

	@ApiMethod(path = "list", httpMethod = "GET")
	public List<Content> list()
	{
		return contentDAO.findAll();
	}

	@ApiMethod(path = "get", httpMethod = "GET")
	public Content get(@Named("id") Long id)
	{
		return contentDAO.findById(id);
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
