package com.ir.productions.coachers;

import javax.persistence.EntityManager;

public abstract class Endpoint
{
	protected static EntityManager getEntityManager()
	{
		return EMF.get().createEntityManager();
	}
}
