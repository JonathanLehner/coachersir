<%@page import="com.ir.productions.coachers.daos.StaticDataDAO"%>
<%@page import="com.ir.productions.coachers.daos.GenericDAO"%>
<%@page import="com.ir.productions.coachers.entities.StaticData"%>
<%@page import="com.ir.productions.coachers.daos.GenericDAOImpl"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@page import="com.ir.productions.coachers.daos.ContentDAO"%>
<%@page import="com.ir.productions.coachers.entities.Content"%>
<%@page import="com.ir.productions.coachers.daos.UserDAO"%>
<%@page import="java.util.Date"%>
<%@page import="com.ir.productions.coachers.entities.User"%>
<%@page contentType="text/html; charset=UTF-8" %>
<html>
<head><title>Init JSP</title></head>
<body>
  <%
  
  	String type = request.getParameter("type");
  
	if(type!=null)
	{
		if(type.equals("content"))
		{
		  	UserDAO userDao = new UserDAO();
		  	ContentDAO contentDAO = new ContentDAO();	
			  
		  	User user = new User();
		    user.setType(User.TYPE_COACH);
		  	user.setBirth_date(new Date());
		  	user.setFirst_name("רוני");
		  	user.setLast_name("רוקטל");
		  	user.setDescription("אני פה לאמן את כולם");
		  	user.setMain_img("https://farm1.staticflickr.com/698/22205354574_0ac0a10dd0_b.jpg");
		  	user.setEmail("ronny.roktel@gmail.com");
		  	user.setPassword("123");
		  	user.setPhone("050-46");
		  	user.setGender(false);
		  	user.setPrice_per_hour(100L);
		  	user = userDao.insert(user);

		  	Content content=new Content();
		  	content.setUser_id(user.getId());
		  	content.setType(Content.TYPE_VIDEO);
		  	content.setContent("http://content.jwplatform.com/videos/Ie4crXiP-zBiwxusV.mp4");
		  	content.setDescription("וידיאו של אימון");
		  	content.setHeadline("כותרת הוידיאו");
		  	contentDAO.insert(content);

		    content=new Content();
		  	content.setUser_id(user.getId());
		  	content.setType(Content.TYPE_VIDEO);
		  	content.setContent("//c2.staticflickr.com/6/5690/22411226528_7fb2d5e292_h.jpg");
		  	content.setDescription("וידיאו של אימון");
		  	content.setHeadline("כותרת הוידיאו");
		  	contentDAO.insert(content);

		  	content=new Content();
		  	content.setUser_id(user.getId());
		  	content.setType(Content.TYPE_VIDEO);
		  	content.setContent("//c2.staticflickr.com/6/5703/22411201467_0dcf2ae8ba_n.jpg");
		  	content.setDescription("וידיאו של אימון");
		  	content.setHeadline("כותרת הוידיאו");
		  	contentDAO.insert(content);

		  	content=new Content();
		  	content.setUser_id(user.getId());
		  	content.setType(Content.TYPE_VIDEO);
		  	content.setContent("//c2.staticflickr.com/6/5675/22816039362_cf847f4d51_n.jpg");
		  	content.setDescription("וידיאו של אימון");
		  	content.setHeadline("כותרת הוידיאו");
		  	contentDAO.insert(content);


		  	content=new Content();
		  	content.setUser_id(user.getId());
		  	content.setType(Content.TYPE_VIDEO);
		  	content.setContent("//c2.staticflickr.com/6/5690/22411226528_7fb2d5e292_h.jpg");
		  	content.setDescription("וידיאו של אימון");
		  	content.setHeadline("כותרת הוידיאו");
		  	contentDAO.insert(content);

		  	content=new Content();
		  	content.setUser_id(user.getId());
		  	content.setType(Content.TYPE_VIDEO);
		  	content.setContent("//c2.staticflickr.com/6/5703/22411201467_0dcf2ae8ba_n.jpg");
		  	content.setDescription("וידיאו של אימון");
		  	content.setHeadline("כותרת הוידיאו");
		  	contentDAO.insert(content);

		  	content=new Content();
		  	content.setUser_id(user.getId());
		  	content.setType(Content.TYPE_VIDEO);
		  	content.setContent("//c2.staticflickr.com/6/5675/22816039362_cf847f4d51_n.jpg");
		  	content.setDescription("וידיאו של אימון");
		  	content.setHeadline("כותרת הוידיאו");
		  	contentDAO.insert(content);

		  	content=new Content();
		  	content.setUser_id(user.getId());
		  	content.setType(Content.TYPE_VIDEO);
		  	content.setContent("http://content.jwplatform.com/videos/Ie4crXiP-zBiwxusV.mp4");
		  	content.setDescription("וידיאו של אימון");
		  	content.setHeadline("כותרת הוידיאו");
		  	contentDAO.insert(content);

		  	content=new Content();
		  	content.setUser_id(user.getId());
		  	content.setType(Content.TYPE_VIDEO);
		  	content.setContent("http://content.jwplatform.com/videos/46mj2U8q-zBiwxusV.mp4");
		  	content.setDescription("וידיאו של אימון");
		  	content.setHeadline("כותרת הוידיאו");
		  	contentDAO.insert(content);

		  	for(int i=0;i<20;i++){
		  		User u = new User();
		  		String ending = " #" + i;
		  		u.setBirth_date(user.getBirth_date());
		  		u.setDescription(u.getDescription() + ending);
		  		u.setEmail(user.getEmail() + ending);
		  		u.setFirst_name(user.getFirst_name() + ending);
		  		u.setLast_name(user.getLast_name() + ending);
		  		u.setGender(i%2==0?true:false);
		  		u.setType(User.TYPE_COACH);
		  		u = userDao.insert(u);
		  		
		  		
		  		Content c = new Content();
		  		c.setUser_id(u.getId());
		  		c.setContent(content.getContent() + ending);
		  		c.setDescription(content.getDescription() + ending);
		  		c.setHeadline(content.getHeadline() + ending);
		  		contentDAO.insert(c);
		  	}

		  	%>users and content added successfully<%
		}
		else if(type.equals("static"))
		{	
			List<StaticData> degrees = new ArrayList<StaticData>();
			
			degrees.add(StaticData.createDegree("מאמן חדכ ובריאות")); 
			degrees.add(StaticData.createDegree("אירובי דנס ועיצוב")); 
			degrees.add(StaticData.createDegree("מאמן אישי ורצועות")); 
			degrees.add(StaticData.createDegree("קייקבוקס")); 
			degrees.add(StaticData.createDegree("פילאטיס")); 
			degrees.add(StaticData.createDegree("פילאטיס מכשירים")); 
			degrees.add(StaticData.createDegree("אופני סטודיו")); 
			degrees.add(StaticData.createDegree("יוגה")); 
			degrees.add(StaticData.createDegree("יוגה לנשים בהריון")); 
			degrees.add(StaticData.createDegree("היפהופ")); 
			degrees.add(StaticData.createDegree("מאמן כדורסל")); 
			degrees.add(StaticData.createDegree("מאמן כדורגל")); 
			degrees.add(StaticData.createDegree("מאמן כדור עף"));
			degrees.add(StaticData.createDegree("מאמן כדור יד"));
			degrees.add(StaticData.createDegree("רכיבה על סוסים"));
			degrees.add(StaticData.createDegree("קרוספיט"));
			degrees.add(StaticData.createDegree("שחייה"));
			degrees.add(StaticData.createDegree("אומנויות לחימה"));
					
			List<StaticData> objectives = new ArrayList<StaticData>();
			
			objectives.add(StaticData.createObjective("עלייה במשקל")); 
			objectives.add(StaticData.createObjective("ירידה במשקל"));
			objectives.add(StaticData.createObjective("פיתוח הגוף")); 
			objectives.add(StaticData.createObjective("חיזוק השרירים"));
			objectives.add(StaticData.createObjective("הפחתת שומנים")); 
			objectives.add(StaticData.createObjective("עיצוב וחיטוב הגוף"));
			objectives.add(StaticData.createObjective("הפגת מתחים"));
			objectives.add(StaticData.createObjective("החזרת אנרגיה"));
			objectives.add(StaticData.createObjective("להראות טוב")); 
			objectives.add(StaticData.createObjective("להרגיש טוב"));
			
			List<StaticData> tags = new ArrayList<StaticData>();
			
			tags.add(StaticData.createTag("אימון בחוץ"));
			tags.add(StaticData.createTag("עבודה קשה"));
			tags.add(StaticData.createTag("חדר כושר"));
			
			StaticDataDAO dao = new StaticDataDAO(); 
			
			for(StaticData data : degrees){
				dao.insert(data);
			}
			
			for(StaticData data : objectives){
				dao.insert(data);
			}
			
			for(StaticData data : tags){
				dao.insert(data);
			}
			
			
			%>static data added successfully<%
		}
		else if(type.equals("delete"))
		{
			UserDAO userDao = new UserDAO();
			ContentDAO contentDAO = new ContentDAO();
			
			List<Content> contentList = contentDAO.findAll();
			List<User> userList = userDao.findAll();
			
			for(User user : userList){
				userDao.delete(user.getId());
			}
			for(Content content : contentList){
				contentDAO.delete(content.getId());
			}
			%>users and content deleted<%
		}
	}
  %>
</body>
</html>