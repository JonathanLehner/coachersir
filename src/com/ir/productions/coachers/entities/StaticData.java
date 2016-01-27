package com.ir.productions.coachers.entities;

import javax.jdo.annotations.Index;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class StaticData
{
	public static final Integer TYPE_OBJECTIVE = 1;
	public static final Integer TYPE_DEGREE = 2;
	public static final Integer TYPE_TAG = 3;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Index
	private Integer type;

	private String name;

	public static StaticData createDegree(String name)
	{
		return new StaticData(name, TYPE_DEGREE);
	}

	public static StaticData createObjective(String name)
	{
		return new StaticData(name, TYPE_OBJECTIVE);
	}

	public static StaticData createTag(String name)
	{
		return new StaticData(name, TYPE_TAG);
	}

	public StaticData(String name, Integer type)
	{
		this.name = name;
		this.type = type;
	}

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

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}
}
