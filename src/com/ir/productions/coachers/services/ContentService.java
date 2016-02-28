package com.ir.productions.coachers.services;

import java.io.IOException;
import java.util.logging.Logger;

import com.ir.productions.coachers.tokens.UploadToken;

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

	public UploadToken getUploadTokten(String type) throws IOException
	{
		if (type.equals(UPLOAD_VIDEO_TYPE))
		{
			UploadToken token = videoUploadService.getUploadToken();
			LOG.info("received token for video upload: " + token);
			return token;
		} else if (type.equals(UPLOAD_IMAGE_TYPE))
		{
			UploadToken token = imageUploadService.getUploadToken();
			LOG.info("received token for image upload: " + token);
			return token;
		}

		throw new IOException("wrong type");
	}
}
