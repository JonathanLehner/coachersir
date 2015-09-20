package com.ir.productions.coachers.daos;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.ir.productions.coachers.EMF;

public abstract class GenericDAOImpl<T, ID extends Serializable> implements
		GenericDAO<T, ID>
{

	protected Class<T> entityClass;

	@PersistenceContext(unitName = "transactions-optional", name = "transactions-optional")
	EntityManager entityManager;

	public GenericDAOImpl()
	{
		ParameterizedType genericSuperclass = (ParameterizedType) getClass()
				.getGenericSuperclass();
		this.entityClass = (Class<T>) genericSuperclass
				.getActualTypeArguments()[0];
	}

	@Override
	public T create(T t)
	{
		getEM().persist(t);
		return t;
	}

	@Override
	public T findById(ID id)
	{
		return getEM().find(entityClass, id);
	}

	@Override
	public T update(T t)
	{
		return getEM().merge(t);
	}

	@Override
	public void delete(T t)
	{
		t = getEM().merge(t);
		getEM().remove(t);
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<T> findAll()
	{
		return getEM().createQuery(
				"Select t from " + entityClass.getSimpleName() + " t")
				.getResultList();
	}

	protected EntityManager getEM()
	{
		return EMF.get().createEntityManager();
	}

	private boolean containsEntity(T t, Object id)
	{
		EntityManager mgr = getEM();
		boolean contains = true;
		try
		{
			// If no ID was set, the entity doesn't exist yet.
			if (id == null)
				contains = false;
			else
			{
				T item = mgr.find(entityClass, id);
				if (item == null)
				{
					contains = false;
				}
			}
		} finally
		{
			mgr.close();
		}
		return contains;
	}
}
