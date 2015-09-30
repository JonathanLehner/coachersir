package com.ir.productions.coachers.entities;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Content
{
	public static int TYPE_IMAGE = 1;
	public static int TYPE_VIDEO = 2;
	public static int TYPE_ARTICLE = 3;

	@Id
	private Long id;

	private Long user_id;

	private Long type;

	private String content;

	private String headline;

	public Long getId()
	{
		return id;
	}

	public void setId(Long id)
	{
		this.id = id;
	}

	public Long getType()
	{
		return type;
	}

	public void setType(Long type)
	{
		this.type = type;
	}

	public Long getUser_id()
	{
		return user_id;
	}

	public void setUser_id(Long user_id)
	{
		this.user_id = user_id;
	}

	public String getContent()
	{
		return content;
	}

	public void setContent(String content)
	{
		this.content = content;
	}

	public String getHeadline()
	{
		return headline;
	}

	public void setHeadline(String headline)
	{
		this.headline = headline;
	}
}
