package com.ir.productions.coachers.entities;

import javax.jdo.annotations.Index;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Content
{
	public static final Integer TYPE_IMAGE = 1;
	public static final Integer TYPE_VIDEO = 2;
	public static final Integer TYPE_ARTICLE = 3;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private Long user_id;

	@Index
	private Integer type;

	private String extra_type;

	private String content;

	private String headline;

	private String description;

	public Long getId()
	{
		return id;
	}

	public void setId(Long id)
	{
		this.id = id;
	}

	public Integer getType()
	{
		return type;
	}

	public void setType(Integer type)
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

	public String getExtra_type()
	{
		return extra_type;
	}

	public void setExtra_type(String extra_type)
	{
		this.extra_type = extra_type;
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

	public String getDescription()
	{
		return description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}
}
