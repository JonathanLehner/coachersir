package com.ir.productions.coachers.services;

import com.google.appengine.api.modules.ModulesService;
import com.google.appengine.api.modules.ModulesServiceFactory;
import com.ir.productions.coachers.tokens.UploadToken;

public abstract class UploadService
{
	public static ModulesService modulesApi = ModulesServiceFactory
			.getModulesService();

	public abstract UploadToken getUploadToken();
}
