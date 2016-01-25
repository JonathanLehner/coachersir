package com.ir.productions.coachers.services;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.logging.Level;
import java.util.logging.Logger;

public class ImageUploadService extends UploadService
{
	private static final Logger LOG = Logger.getLogger(ImageUploadService.class
			.getName());

	@Override
	public String getUploadToken()
	{
		StringBuilder s = new StringBuilder("");
		String token = null;
		try
		{
			URL url = new URL("http://"
					+ modulesApi.getVersionHostname("image-php-module", "v1")
					+ "/myAuth.php");
			BufferedReader reader = new BufferedReader(new InputStreamReader(
					url.openStream()));
			String line;

			while ((line = reader.readLine()) != null)
			{
				s.append(line);
			}
			reader.close();

			token = s.toString().split("frob:")[1].split("\"")[0];

		} catch (Exception e)
		{
			LOG.log(Level.SEVERE, e.getMessage(), e);
		}
		LOG.info("returning token: " + token);
		return token;
	}
}
