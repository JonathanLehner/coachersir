package com.ir.productions.coachers.daos;

import java.io.Serializable;
import java.util.List;

public interface GenericDAO<T, ID extends Serializable>
{
	T insert(T t);

	T update(T t);

	void delete(T t);

	void delete(ID id);

	T findById(ID id);

	List<T> findAll();

	List<T> findByField(String fieldName, String fieldValue);
}