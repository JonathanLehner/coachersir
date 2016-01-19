package com.ir.productions.coachers.daos;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.ir.productions.coachers.EMF;

public abstract class GenericDAOImpl<T, ID extends Serializable> implements
		GenericDAO<T, ID>, Serializable
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
		EntityManager mgr = entityManager != null ? entityManager : getEM();

		try
		{
			t = mgr.merge(t);
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

	@Override
	public List<T> findByField(String fieldName, String fieldValue)
	{
		EntityManager mgr = getEM();

		List<T> list = getEM()
				.createQuery(
						"Select t from " + entityClass.getSimpleName()
								+ " t where " + fieldName + " = :fieldValue")
				.setParameter("fieldValue", fieldValue).getResultList();

		mgr.close();

		return list;
	}

	public EntityManager getEM()
	{
		return EMF.get().createEntityManager();
	}
}
