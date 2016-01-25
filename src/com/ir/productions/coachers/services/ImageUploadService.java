package com.ir.productions.coachers.services;

import java.util.logging.Logger;

import com.flickr4java.flickr.Flickr;
import com.flickr4java.flickr.REST;
import com.flickr4java.flickr.auth.AuthInterface;

public class ImageUploadService extends UploadService
{
	private static final Logger LOG = Logger.getLogger(ImageUploadService.class
			.getName());

	@Override
	public String getUploadToken()
	{
		StringBuilder s = new StringBuilder("");
		String token = null;
		// try
		// {
		// URL url = new URL("http://"
		// + modulesApi.getVersionHostname("image-php-module", "v1")
		// + "/myAuth.php");
		// BufferedReader reader = new BufferedReader(new InputStreamReader(
		// url.openStream()));
		// String line;
		//
		// while ((line = reader.readLine()) != null)
		// {
		// s.append(line);
		// }
		// reader.close();
		//
		// token = s.toString().split("frob:")[1].split("\"")[0];
		//
		// } catch (Exception e)
		// {
		// LOG.log(Level.SEVERE, e.getMessage(), e);
		// }
		// LOG.info("returning token: " + token);

		String apiKey = "5fe448d8d145c8489801465a6fd30d82";
		String sharedSecret = "482a76d0c7ddb028";
		Flickr f = new Flickr(apiKey, sharedSecret, new REST());
		AuthInterface authInterface = f.getAuthInterface();

		token = f.getAuth().getToken();

		return token;
	}

	public static void main(String[] args)
	{
		ImageUploadService img = new ImageUploadService();
		System.out.println(img.getUploadToken());
	}
}
