package com.ir.productions.coachers.entities;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.jdo.annotations.Index;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.codehaus.jackson.annotate.JsonIgnore;

import com.google.appengine.api.datastore.GeoPt;

@Entity
public class User implements Serializable
{
	public static final Integer TYPE_COACH = 1;
	public static final Integer TYPE_TRAINED = 2;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Index
	private Integer type;

	private String first_name;

	private String last_name;

	private String phone;

	@Index
	private String email;

	@Index
	private String password;

	@Index
	private String provider;

	@Index
	private String provider_id;

	// true: male, false: female
	private Boolean gender;

	private Boolean isFavorite;

	@Index
	private String verify_token;

	private Date birth_date;

	private String main_img;

	private GeoPt location;

	private Long price_per_hour;

	private String description;

	private List<Long> degrees;

	private List<Long> objectives;

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

	public String getProvider()
	{
		return provider;
	}

	public void setProvider(String provider)
	{
		this.provider = provider;
	}

	public String getProvider_id()
	{
		return provider_id;
	}

	public void setProvider_id(String provider_id)
	{
		this.provider_id = provider_id;
	}

	public Boolean getGender()
	{
		return gender;
	}

	public void setGender(Boolean gender)
	{
		this.gender = gender;
	}

	public Boolean getIsFavorite()
	{
		return isFavorite;
	}

	public void setIsFavorite(Boolean isFavorite)
	{
		this.isFavorite = isFavorite;
	}

	public String getVerify_Token()
	{
		return verify_token;
	}

	public void setVerify_Token(String verify_token)
	{
		this.verify_token = verify_token;
	}

	public Date getBirth_date()
	{
		return birth_date;
	}

	public void setBirth_date(Date birth_date)
	{
		this.birth_date = birth_date;
	}

	public String getMain_img()
	{
		return main_img;
	}

	public void setMain_img(String main_img)
	{
		this.main_img = main_img;
	}

	public GeoPt getLocation()
	{
		return location;
	}

	public void setLocation(GeoPt location)
	{
		this.location = location;
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

	@JsonIgnore
	public boolean isCoach()
	{
		return this.type == TYPE_COACH;
	}

	public String getDescription()
	{
		return description;
	}

	public void setDescription(String description)
	{
		this.description = description;
	}

	public List<Long> getDegrees()
	{
		return degrees;
	}

	public void setDegrees(List<Long> degrees)
	{
		this.degrees = degrees;
	}

	public List<Long> getObjectives()
	{
		return objectives;
	}

	public void setObjectives(List<Long> objectives)
	{
		this.objectives = objectives;
	}

}
