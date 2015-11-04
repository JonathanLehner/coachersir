package com.ir.productions.coachers.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.jdo.annotations.Index;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User implements Serializable
{
	public static Integer TYPE_COACH = 1;
	public static Integer TYPE_TRAINED = 2;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private Integer type;

	private String first_name;

	private String last_name;

	private String phone;

	@Index
	private String email;

	@Index
	private String password;

	private Date birth_date;

	private Long location_id;

	private Long price_per_hour;

	private String img_link;

	private List<Integer> objectives;

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

	public String getFirst_name()
	{
		return first_name;
	}

	public void setFirst_name(String first_name)
	{
		this.first_name = first_name;
	}

	public String getLast_name()
	{
		return last_name;
	}

	public void setLast_name(String last_name)
	{
		this.last_name = last_name;
	}

	public String getEmail()
	{
		return email;
	}

	public void setEmail(String email)
	{
		this.email = email;
	}

	public String getPassword()
	{
		return password;
	}

	public void setPassword(String password)
	{
		this.password = password;
	}

	public Date getBirth_date()
	{
		return birth_date;
	}

	public void setBirth_date(Date birth_date)
	{
		this.birth_date = birth_date;
	}

	public Long getLocation_id()
	{
		return location_id;
	}

	public void setLocation_id(Long location_id)
	{
		this.location_id = location_id;
	}

	public Long getPrice_per_hour()
	{
		return price_per_hour;
	}

	public void setPrice_per_hour(Long price_per_hour)
	{
		this.price_per_hour = price_per_hour;
	}

	public String getPhone()
	{
		return phone;
	}

	public void setPhone(String phone)
	{
		this.phone = phone;
	}

	public boolean isCoach()
	{
		return this.type == TYPE_COACH;
	}

	public List<Integer> getObjectives()
	{
		return objectives;
	}

	public void setObjectives(List<Integer> objectives)
	{
		this.objectives = objectives;
	}

	public String getImg_link()
	{
		return img_link;
	}

	public void setImg_link(String img_link)
	{
		this.img_link = img_link;
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
