package com.ir.productions.coachers.services;

import java.io.IOException;
import java.util.logging.Logger;

public class ContentService
{
	private static final Logger LOG = Logger.getLogger(ContentService.class
			.getName());

	private static String UPLOAD_VIDEO_TYPE = "video";
	private static String UPLOAD_IMAGE_TYPE = "image";

	private ImageUploadService imageUploadService;
	private VideoUploadService videoUploadService;

	public ContentService()
	{
		imageUploadService = new ImageUploadService();
		videoUploadService = new VideoUploadService();
	}

	public String getUploadTokten(String type) throws IOException
	{
		if (type.equals(UPLOAD_VIDEO_TYPE))
		{
			String token = videoUploadService.getUploadToken();
			LOG.info("received token for video upload: " + token);
			return token;
		}

		else if (type.equals(UPLOAD_IMAGE_TYPE))
		{
			return imageUploadService.getUploadToken();
		}

		throw new IOException("wrong type");
	}
}
