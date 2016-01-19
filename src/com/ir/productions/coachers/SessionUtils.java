package com.ir.productions.coachers;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.google.api.server.spi.response.UnauthorizedException;

public class SessionUtils
{
	private static final String SESSION_USER_ID_ATTRIBUTE = "authenticatedUserId";
	public static final Integer TYPE_DELETED = 0;

	public static void addUserToSession(HttpServletRequest req, Long userId)
	{
		HttpSession session = req.getSession(true);

		session.setAttribute(SessionUtils.SESSION_USER_ID_ATTRIBUTE, userId);

	}

	public static Long getUserIdOnSession(HttpServletRequest req)
	{
		HttpSession session = req.getSession(true);

		return (Long) session
				.getAttribute(SessionUtils.SESSION_USER_ID_ATTRIBUTE);
	}

	public static void removeUserFromSession(HttpServletRequest req)
	{
		req.getSession().removeAttribute(SessionUtils.SESSION_USER_ID_ATTRIBUTE);
	}

	public static void verifyUserOnSession(HttpServletRequest req, Long userId)
			throws UnauthorizedException
	{
		Object session_var = req.getSession().getAttribute(
				SessionUtils.SESSION_USER_ID_ATTRIBUTE);

		if (userId == null || !userId.equals(session_var))
		{
			throw new UnauthorizedException(
					"requested operation is not supported for user.");
		}
	}
}
