package com.ir.productions.coachers.daos;

import java.io.Serializable;
import java.lang.reflect.ParameterizedType;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.ir.productions.coachers.entities.User;

public abstract class GenericDAOImpl<T,ID extends Serializable> 
	implements GenericDAO<T, ID> {
	
	protected Class<T> entityClass;
	
	@PersistenceContext
	EntityManager entityManager;
	
	public GenericDAOImpl(){
		ParameterizedType genericSuperclass = (ParameterizedType) getClass()
	             .getGenericSuperclass();
	        this.entityClass = (Class<T>) genericSuperclass
	             .getActualTypeArguments()[0];
	}
	
	@Override
    public T create(T t) {
        this.entityManager.persist(t);
        return t;
    }

    @Override
    public T findById(ID id) {
        return this.entityManager.find(entityClass, id);
    }

    @Override
    public T update(T t) {
        return this.entityManager.merge(t);
    }

    @Override
    public void delete(T t) {
        t = this.entityManager.merge(t);
        this.entityManager.remove(t);
    }
	
	@Override
	@SuppressWarnings("unchecked")
    public List<T> findAll() {
            return entityManager.createQuery("Select t from " + entityClass.getSimpleName() + " t").getResultList();
    }
}
