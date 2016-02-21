package com.ir.productions.coachers.pojos;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.google.appengine.api.datastore.GeoPt;
import com.ir.productions.coachers.entities.User;

public class UserPojo
{
	private Long id;

	private String first_name;

	private String last_name;

	// true: male, false: female
	private Boolean gender;

	private Date birth_date;

	private String main_img;

	private GeoPt location;

	private Long price_per_hour;

	private String description;

	private List<Long> degrees;

	private List<Long> objectives;

	public UserPojo(Long id, String first_name, String last_name,
			Boolean gender, Date birth_date, String main_img, GeoPt location,
			Long price_per_hour, String description, List<Long> degrees,
			List<Long> objectives)
	{
		super();
		this.id = id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.gender = gender;
		this.birth_date = birth_date;
		this.main_img = main_img;
		this.location = location;
		this.price_per_hour = price_per_hour;
		this.description = description;
		this.degrees = degrees;
		this.objectives = objectives;
	}

	public Long getId()
	{
		return id;
	}

	public void setId(Long id)
	{
		this.id = id;
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

	public Boolean getGender()
	{
		return gender;
	}

	public void setGender(Boolean gender)
	{
		this.gender = gender;
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

	public static UserPojo getFromUser(User user)
	{
		return new UserPojo(user.getId(), user.getFirst_name(),
				user.getLast_name(), user.getGender(), user.getBirth_date(),
				user.getMain_img(), user.getLocation(),
				user.getPrice_per_hour(), user.getDescription(),
				user.getDegrees(), user.getObjectives());
	}

	public static List<UserPojo> getFromUsers(List<User> users)
	{
		List<UserPojo> returnVal = new ArrayList<UserPojo>();

		for (User user : users)
		{
			returnVal.add(getFromUser(user));
		}

		return returnVal;
	}
}
