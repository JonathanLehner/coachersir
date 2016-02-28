package com.ir.productions.coachers.services;

import java.util.logging.Logger;

import com.ir.productions.coachers.SystemUtils;
import com.ir.productions.coachers.tokens.OspryToken;
import com.ir.productions.coachers.tokens.UploadToken;

public class ImageUploadService extends UploadService
{
	private static final Logger LOG = Logger.getLogger(ImageUploadService.class
			.getName());

	@Override
	public UploadToken getUploadToken()
	{
		if (SystemUtils.isProd())
		{
			// todo: change to prod pk-prod-txj9k34hk00dtlntez5s4aa2
			return new OspryToken("pk-test-mcagfau5650hcymnbt0riz3b");
		} else
		{
			return new OspryToken("pk-test-mcagfau5650hcymnbt0riz3b");
		}
	}
}
