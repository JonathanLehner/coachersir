package com.ir.productions.coachers.entities;

public class Param
{
	private static final String KEY_VIDEO_PROVIDER = "KEY_VIDEO_PROVIDER";
	private static final String KEY_IMAGE_PROVIDER = "KEY_IMAGE_PROVIDER";

	private String key;
	private String value;

	public String getKey()
	{
		return key;
	}

	public void setKey(String key)
	{
		this.key = key;
	}

	public String getValue()
	{
		return value;
	}

	public void setValue(String value)
	{
		this.value = value;
	}
}
