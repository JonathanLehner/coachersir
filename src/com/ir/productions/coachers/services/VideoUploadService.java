package com.ir.productions.coachers.services;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.logging.Level;
import java.util.logging.Logger;

import com.ir.productions.coachers.SystemUtils;
import com.ir.productions.coachers.tokens.UploadToken;

public class VideoUploadService extends UploadService
{
	private static final Logger LOG = Logger.getLogger(VideoUploadService.class
			.getName());

	@Override
	public UploadToken getUploadToken()
	{
		StringBuilder s = new StringBuilder("");

		try
		{
			URL url = new URL("http://" + getHost() + "/create.php");
			BufferedReader reader = new BufferedReader(new InputStreamReader(
					url.openStream()));
			String line;

			while ((line = reader.readLine()) != null)
			{
				s.append(line);
			}
			reader.close();

		} catch (Exception e)
		{
			LOG.log(Level.SEVERE, e.getMessage(), e);
		}
		LOG.info("returning video token: " + s);
		return new UploadToken("jwplayer", s.toString());
	}

	public String getHost()
	{
		if (SystemUtils.isProd())
		{
			return modulesApi.getVersionHostname("video-php-module", "v1");
		}
		return "localhost:8080";
	}
}
