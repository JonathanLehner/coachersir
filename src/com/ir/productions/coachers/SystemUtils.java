package com.ir.productions.coachers;

import com.google.appengine.api.utils.SystemProperty;

public class SystemUtils
{
	public static boolean isProd()
	{
		return SystemProperty.environment.value() == SystemProperty.Environment.Value.Production;
	}
}
