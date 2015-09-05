package com.ir.productions.coachers.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {
	
	private static int TYPE_COACH = 1;
	private static int TYPE_TRAINED = 2;
	
	@Id
	private Long id;
	
	private int type;
	
	private String first_name;
	
	private String last_name;
	
	private String email;
	
	private String password;
	
	private Date birth_date;
	
	private Long location_id;
	
	private Long price_per_hour;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getBirth_date() {
		return birth_date;
	}

	public void setBirth_date(Date birth_date) {
		this.birth_date = birth_date;
	}

	public Long getLocation_id() {
		return location_id;
	}

	public void setLocation_id(Long location_id) {
		this.location_id = location_id;
	}

	public Long getPrice_per_hour() {
		return price_per_hour;
	}

	public void setPrice_per_hour(Long price_per_hour) {
		this.price_per_hour = price_per_hour;
	}
	
	public boolean isCoach()
	{
		return this.type == TYPE_COACH;
	}
}
