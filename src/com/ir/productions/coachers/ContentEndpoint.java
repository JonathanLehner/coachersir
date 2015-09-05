package com.ir.productions.coachers;

import com.ir.productions.coachers.entities.Content;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.ApiNamespace;
import com.google.api.server.spi.response.CollectionResponse;
import com.google.appengine.api.datastore.Cursor;
import com.google.appengine.datanucleus.query.JPACursorHelper;

import java.util.List;

import javax.annotation.Nullable;
import javax.inject.Named;
import javax.persistence.EntityExistsException;
import javax.persistence.EntityNotFoundException;
import javax.persistence.EntityManager;
import javax.persistence.Query;

@Api(name = "contentendpoint", namespace = @ApiNamespace(ownerDomain = "ir.com", ownerName = "ir.com", packagePath = "productions.coachers.entities"))
public class ContentEndpoint
{

	/**
	 * This method lists all the entities inserted in datastore.
	 * It uses HTTP GET method and paging support.
	 *
	 * @return A CollectionResponse class containing the list of all entities
	 * persisted and a cursor to the next page.
	 */
	@SuppressWarnings({ "unchecked", "unused" })
	@ApiMethod(name = "listContent")
	public CollectionResponse<Content> listContent(
			@Nullable @Named("cursor") String cursorString,
			@Nullable @Named("limit") Integer limit)
	{

		EntityManager mgr = null;
		Cursor cursor = null;
		List<Content> execute = null;

		try
		{
			mgr = getEntityManager();
			Query query = mgr.createQuery("select from Content as Content");
			if (cursorString != null && cursorString != "")
			{
				cursor = Cursor.fromWebSafeString(cursorString);
				query.setHint(JPACursorHelper.CURSOR_HINT, cursor);
			}

			if (limit != null)
			{
				query.setFirstResult(0);
				query.setMaxResults(limit);
			}

			execute = (List<Content>) query.getResultList();
			cursor = JPACursorHelper.getCursor(execute);
			if (cursor != null)
				cursorString = cursor.toWebSafeString();

			// Tight loop for fetching all entities from datastore and accomodate
			// for lazy fetch.
			for (Content obj : execute)
				;
		} finally
		{
			mgr.close();
		}

		return CollectionResponse.<Content> builder().setItems(execute)
				.setNextPageToken(cursorString).build();
	}

	/**
	 * This method gets the entity having primary key id. It uses HTTP GET method.
	 *
	 * @param id the primary key of the java bean.
	 * @return The entity with primary key id.
	 */
	@ApiMethod(name = "getContent")
	public Content getContent(@Named("id") Long id)
	{
		EntityManager mgr = getEntityManager();
		Content content = null;
		try
		{
			content = mgr.find(Content.class, id);
		} finally
		{
			mgr.close();
		}
		return content;
	}

	/**
	 * This inserts a new entity into App Engine datastore. If the entity already
	 * exists in the datastore, an exception is thrown.
	 * It uses HTTP POST method.
	 *
	 * @param content the entity to be inserted.
	 * @return The inserted entity.
	 */
	@ApiMethod(name = "insertContent")
	public Content insertContent(Content content)
	{
		EntityManager mgr = getEntityManager();
		try
		{
			if (containsContent(content))
			{
				throw new EntityExistsException("Object already exists");
			}
			mgr.persist(content);
		} finally
		{
			mgr.close();
		}
		return content;
	}

	/**
	 * This method is used for updating an existing entity. If the entity does not
	 * exist in the datastore, an exception is thrown.
	 * It uses HTTP PUT method.
	 *
	 * @param content the entity to be updated.
	 * @return The updated entity.
	 */
	@ApiMethod(name = "updateContent")
	public Content updateContent(Content content)
	{
		EntityManager mgr = getEntityManager();
		try
		{
			if (!containsContent(content))
			{
				throw new EntityNotFoundException("Object does not exist");
			}
			mgr.persist(content);
		} finally
		{
			mgr.close();
		}
		return content;
	}

	/**
	 * This method removes the entity with primary key id.
	 * It uses HTTP DELETE method.
	 *
	 * @param id the primary key of the entity to be deleted.
	 */
	@ApiMethod(name = "removeContent")
	public void removeContent(@Named("id") Long id)
	{
		EntityManager mgr = getEntityManager();
		try
		{
			Content content = mgr.find(Content.class, id);
			mgr.remove(content);
		} finally
		{
			mgr.close();
		}
	}

	private boolean containsContent(Content content)
	{
		EntityManager mgr = getEntityManager();
		boolean contains = true;
		try
		{
			Content item = mgr.find(Content.class, content.getId());
			if (item == null)
			{
				contains = false;
			}
		} finally
		{
			mgr.close();
		}
		return contains;
	}

	private static EntityManager getEntityManager()
	{
		return EMF.get().createEntityManager();
	}
}
