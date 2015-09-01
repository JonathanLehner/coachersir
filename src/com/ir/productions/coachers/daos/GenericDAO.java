package com.ir.productions.coachers.daos;

import java.io.Serializable;
import java.util.List;

public interface GenericDAO<T, ID extends Serializable> {  
	
	 T create(T t);
	 
	 T update(T t);

	 void delete(T t);
    
	 T findById(ID id);  
  
	 List<T> findAll();  
}