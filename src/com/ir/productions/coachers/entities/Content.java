package com.ir.productions.coachers.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Content
{
	@Id
	private Long id;
	
	private Long user_id;
	
	private String url;

	public Long getId()
	{
		return id;
	}

	public void setId(Long id)
	{
		this.id = id;
	}

	public Long getUser_id()
	{
		return user_id;
	}

	public void setUser_id(Long user_id)
	{
		this.user_id = user_id;
	}

	public String getUrl()
	{
		return url;
	}

	public void setUrl(String url)
	{
		this.url = url;
	}
}
