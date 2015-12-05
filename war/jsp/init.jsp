<%@page import="com.ir.productions.coachers.daos.ContentDAO"%>
<%@page import="com.ir.productions.coachers.entities.Content"%>
<%@page import="com.ir.productions.coachers.daos.UserDAO"%>
<%@page import="java.util.Date"%>
<%@page import="com.ir.productions.coachers.entities.User"%>
<%@ page contentType="text/html; charset=UTF-8" %>
<html>
<head><title>Init JSP</title></head>
<body>
  <%
  	UserDAO userDao = new UserDAO();
  	ContentDAO contentDAO = new ContentDAO();	
  
  	User user = new User();
    user.setType(User.TYPE_COACH);
  	user.setBirth_date(new Date());
  	user.setFirst_name("רוני");
  	user.setLast_name("רוקטל");
  	user.setDescription("אני פה לאמן את כולם");
  	user.setEmail("ronny.roktel@gmail.com");
  	user.setPassword("123");
  	user.setPhone("050-46");
  	user.setPrice_per_hour(100L);
  	user = userDao.insert(user);
  	
  	Content content=new Content();
  	content.setUser_id(user.getId());
  	content.setType(Content.TYPE_IMAGE);
  	content.setContent("https://farm1.staticflickr.com/698/22205354574_0ac0a10dd0_b.jpg");
  	content.setDescription("התמונה של עדי");
  	content.setHeadline("כותרת תמונה");
  	contentDAO.insert(content);
  	
  	content=new Content();
  	content.setUser_id(user.getId());
  	content.setType(Content.TYPE_ARTICLE);
  	content.setContent("תוכן הכתבה של רוני");
  	content.setDescription("כתבה על TRX");
  	content.setHeadline("כותרת המאמר");
  	contentDAO.insert(content);
  	
  	content=new Content();
  	content.setUser_id(user.getId());
  	content.setType(Content.TYPE_VIDEO);
  	content.setContent("http://content.jwplatform.com/videos/RXbG0VZh-zBiwxusV.mp4");
  	content.setDescription("וידיאו של אימון");
  	content.setHeadline("כותרת הוידיאו");
  	contentDAO.insert(content);
  	
  	user = new User();
    user.setType(User.TYPE_COACH);
  	user.setBirth_date(new Date());
  	user.setFirst_name("איתי");
  	user.setLast_name("סימנטוב");
  	user.setDescription("מאמן כדורסל");
  	user.setEmail("sitay123@gmail.com");
  	user.setPassword("123");
  	user.setPhone("050");
  	user.setPrice_per_hour(200L);
  	user = userDao.insert(user);
  	
  	content=new Content();
  	content.setUser_id(user.getId());
  	content.setType(Content.TYPE_IMAGE);
  	content.setContent("https://farm1.staticflickr.com/748/23018719521_12616a5d99_b.jpg");
  	content.setDescription("התמונה של איתי");
  	content.setHeadline("כותרת פה");
  	contentDAO.insert(content);
  	
  	content=new Content();
  	content.setUser_id(user.getId());
  	content.setType(Content.TYPE_ARTICLE);
  	content.setContent("תוכן הכתבה של איתי");
  	content.setDescription("כתבה על שטויות");
  	content.setHeadline("כותרת המאמר של איתי");
  	contentDAO.insert(content);
  	
  	content=new Content();
  	content.setUser_id(user.getId());
  	content.setType(Content.TYPE_VIDEO);
  	content.setContent("http://content.jwplatform.com/videos/46mj2U8q-zBiwxusV.mp4");
  	content.setDescription("וידיאו של אימון");
  	content.setHeadline("כותרת הוידיאו");
  	contentDAO.insert(content);
  %>
<h2></h2>
</body>
</html>