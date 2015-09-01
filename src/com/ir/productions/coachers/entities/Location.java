package com.ir.productions.coachers.entities;

public enum Location
{
	Central_District(1, "אזור המרכז", null), 
	Haifa_District(2, "אזור חיפה", null),
	Jerusalem_District(3, "אזור ירושלים", null),
	Northern_District(4, "אזור הצפון", null),
	Southern_District(5, "אזור הדרום", null),
	TelAviv_District(6, "אזור תל אביב", null),
	Yosh_District(7, "אזור יהודה ושומרון" , null),
	
	NesZiona(8, "נס ציונה", 1), 	
	Rehovot(9, "רחובות", 1),
	RishonLezion(10, "ראשון לציון", 1), 	
	RoshHaayin(11, "ראש העין", 1),
	Yavne(12, "יבנה", 1),
	YehudMonosson(12, "יהוד-מונוסון", 1),	
	KfarSaba(13, "כפר סבא", 1),
	Lod(14, "לוד", 1),
	Modiin(15, "מודיעין-מכבים-רעות", 1),	
	PetahTikva(15, "פתח תקוה", 1),
	HodHaSharon(16, "הוד השרון", 1), 	
	Ramla(17, "רמלה", 1),
	Raanana(18, "רעננה", 1),
	Netanya(19, "נתניה", 1),
	
	
	Hadera(20, "חדרה", 2), 	
	Haifa(21, "חיפה", 2),
	KiryatAta(22, "קרית אתא", 2),
	KiryatBialik(23, "קרית ביאליק", 2), 
	KiryatYam(24, "קרית ים	", 2), 		
	KiryatMotzkin(25, "קרית מוצקין	", 2), 
	TiratCarmel(26, "טירת כרמל", 2),		
	Nesher(27, "נשר", 2),

	BeitShemesh(27, "בית-שמש", 3),	
	Jerusalem(27, "ירושלים", 3),	

	Nahariya (27, "נהריה", 4), 
	Afula	(27, "עפולה", 4),	
	Tiberias	(27, "טבריה", 4),	
	Akko	(27, "עכו", 4),	
	MigdalHaEmek	(27, "מגדל-העמק", 4),	
	KiryatShemone	(27, "קרית-שמונה", 4),	
	Karmiel	(27, "כרמיאל", 4),	
	Tsfat	(27, "צפת", 4),	
	BeitShean	(27, "בית-שאן", 4),	
	NazarethIllit	(27, "נצרת-עילית", 4),	
	Nazareth	(27, "נצרת", 4),	
	MaalotTarshiha	(27, "מעלות-תרשיחא", 4),	

	Eilat	(27, "אילת", 5),	
	Sderot	(27, "שדרות", 5),	
	Netivot	(27, "נתיבות", 5),	
	Arad	(27, "ערד", 5),	
	Dimona	(27, "דימונה", 5),	
	Ashdod	(27, "אשדוד", 5),	
	KiryatGat	(27, "קרית-גת", 5),	
	KiryatMalachi	(27, "קרית-מלאכי", 5),	
	BeerSheva	(27, "באר-שבע", 5),	
	Ashkelon	(27, "אשקלון", 5),	

	KiryatOno	(27, "קרית-אונו", 6),	
	Givatayim	(27, "גבעתיים", 6),	
	BatYam	(27, "בת-ים", 6),	
	BneiBerak	(27, "בני-ברק", 6),	
	RamatGan	(27, "רמת-גן", 6),	
	Holon	(27, "חולון", 6),	
	TelAviv	(27, "תל-אביב-יפו", 6),	
	Herzliya	(27, "הרצליה", 6),	
	RamatHasharon	(27, "רמת-השרון", 6),	
	OrYehuda	(27, "אור-יהודה", 6),	

	BetarIllit	(27, "ביתר-עילית", 7),	
	Ariel	(27, "אריאל", 7),	
	MaaleAdumim	(27, "מעלה-אדומים", 7);	

	
	
	private final Integer id;
	private final String name;
	private final Integer parent_location_id;

	Location(Integer id, String name, Integer parent_location_id){
		this.id = id;
		this.name = name;
		this.parent_location_id = parent_location_id;
	}
}
