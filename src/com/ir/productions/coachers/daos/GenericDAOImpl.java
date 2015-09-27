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
	public T findById(ID id)
	{
		EntityManager mgr = getEM();
		T t = null;

		try
		{
			t = mgr.find(entityClass, id);
		} catch (Exception e)
		{
			System.out.println(e.getMessage());
		} finally
		{
			mgr.close();
		}

		return t;
	}

	@Override
	public T insert(T t)
	{
		EntityManager mgr = getEM();

		try
		{
			mgr.persist(t);
		} catch (Exception e)
		{
			System.out.println(e.getMessage());
		} finally
		{
			mgr.close();
		}

		return t;
	}

	@Override
	public T update(T t)
	{
		EntityManager mgr = getEM();

		try
		{
			// mgr.persist(t);
			t = getEM().merge(t);
		} catch (Exception e)
		{
			System.out.println(e.getMessage());
		} finally
		{
			mgr.close();
		}

		return t;
	}

	@Override
	public void delete(T t)
	{
		EntityManager mgr = getEM();

		try
		{
			t = mgr.merge(t);
			mgr.remove(t);
		} catch (Exception e)
		{
			System.out.println(e.getMessage());
		} finally
		{
			mgr.close();
		}
	}

	@Override
	public void delete(ID id)
	{
		EntityManager mgr = getEM();
		try
		{
			T t = mgr.find(entityClass, id);
			mgr.remove(t);
		} catch (Exception e)
		{
			System.out.println(e.getMessage());
		} finally
		{
			mgr.close();
		}
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<T> findAll()
	{
		EntityManager mgr = getEM();

		List<T> list = getEM().createQuery(
				"Select t from " + entityClass.getSimpleName() + " t")
				.getResultList();

		mgr.close();

		return list;
	}

	public EntityManager getEM()
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
