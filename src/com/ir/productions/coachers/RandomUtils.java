package com.ir.productions.coachers;

import java.util.UUID;

public class RandomUtils
{
	public static String getUniqueString()
	{
		return UUID.randomUUID().toString().split("-")[0];
	}
}
