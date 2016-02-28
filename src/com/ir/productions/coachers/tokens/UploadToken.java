package com.ir.productions.coachers.tokens;

public class UploadToken
{
	private String provider;
	private Object token;

	public UploadToken(String provider, Object token)
	{
		super();
		this.provider = provider;
		this.token = token;
	}

	public String getProvider()
	{
		return provider;
	}

	public void setProvider(String provider)
	{
		this.provider = provider;
	}

	public Object getToken()
	{
		return token;
	}

	public void setToken(Object token)
	{
		this.token = token;
	}
}
