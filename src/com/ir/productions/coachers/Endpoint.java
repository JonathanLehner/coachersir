package com.ir.productions.coachers;

import javax.persistence.EntityManager;

public abstract class Endpoint
{
	protected static final String SESSION_USER_ID_ATTRIBUTE = "authenticatedUserId";
	protected static final Integer TYPE_DELETED = 0;

	protected static EntityManager getEntityManager()
	{
		return EMF.get().createEntityManager();
	}
}
