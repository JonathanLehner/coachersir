package com.ir.productions.coachers.entities;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Location
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private Long user_id;

	private Double lon;

	private Double lat;

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

	public Double getLon()
	{
		return lon;
	}

	public void setLon(Double lon)
	{
		this.lon = lon;
	}

	public Double getLat()
	{
		return lat;
	}

	public void setLat(Double lat)
	{
		this.lat = lat;
	}
}
