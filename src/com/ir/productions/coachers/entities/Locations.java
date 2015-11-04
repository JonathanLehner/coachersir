package com.ir.productions.coachers.entities;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public enum Locations {
	root(0, "root", null),

	Central_District(1, "אזור המרכז", 0), Haifa_District(2, "אזור חיפה", 0), Jerusalem_District(
			3, "אזור ירושלים", 0), Northern_District(4, "אזור הצפון", 0), Southern_District(
			5, "אזור הדרום", 0), TelAviv_District(6, "אזור תל אביב", 0), Yosh_District(
			7, "אזור יהודה ושומרון", 0),

	NesZiona(8, "נס ציונה", 1), Rehovot(9, "רחובות", 1), RishonLezion(10,
			"ראשון לציון", 1), RoshHaayin(11, "ראש העין", 1), Yavne(12, "יבנה",
			1), YehudMonosson(12, "יהוד-מונוסון", 1), KfarSaba(13, "כפר סבא", 1), Lod(
			14, "לוד", 1), Modiin(15, "מודיעין-מכבים-רעות", 1), PetahTikva(15,
			"פתח תקוה", 1), HodHaSharon(16, "הוד השרון", 1), Ramla(17, "רמלה",
			1), Raanana(18, "רעננה", 1), Netanya(19, "נתניה", 1),

	Hadera(20, "חדרה", 2), Haifa(21, "חיפה", 2), KiryatAta(22, "קרית אתא", 2), KiryatBialik(
			23, "קרית ביאליק", 2), KiryatYam(24, "קרית ים	", 2), KiryatMotzkin(
			25, "קרית מוצקין	", 2), TiratCarmel(26, "טירת כרמל", 2), Nesher(27,
			"נשר", 2),

	BeitShemesh(28, "בית-שמש", 3), Jerusalem(29, "ירושלים", 3),

	Nahariya(30, "נהריה", 4), Afula(31, "עפולה", 4), Tiberias(32, "טבריה", 4), Akko(
			33, "עכו", 4), MigdalHaEmek(34, "מגדל-העמק", 4), KiryatShemone(35,
			"קרית-שמונה", 4), Karmiel(36, "כרמיאל", 4), Tsfat(37, "צפת", 4), BeitShean(
			38, "בית-שאן", 4), NazarethIllit(39, "נצרת-עילית", 4), Nazareth(40,
			"נצרת", 4), MaalotTarshiha(41, "מעלות-תרשיחא", 4),

	Eilat(42, "אילת", 5), Sderot(43, "שדרות", 5), Netivot(44, "נתיבות", 5), Arad(
			45, "ערד", 5), Dimona(46, "דימונה", 5), Ashdod(47, "אשדוד", 5), KiryatGat(
			48, "קרית-גת", 5), KiryatMalachi(49, "קרית-מלאכי", 5), BeerSheva(
			50, "באר-שבע", 5), Ashkelon(51, "אשקלון", 5),

	KiryatOno(52, "קרית-אונו", 6), Givatayim(53, "גבעתיים", 6), BatYam(54,
			"בת-ים", 6), BneiBerak(55, "בני-ברק", 6), RamatGan(56, "רמת-גן", 6), Holon(
			57, "חולון", 6), TelAviv(58, "תל-אביב-יפו", 6), Herzliya(59,
			"הרצליה", 6), RamatHasharon(60, "רמת-השרון", 6), OrYehuda(61,
			"אור-יהודה", 6),

	BetarIllit(62, "ביתר-עילית", 7), Ariel(63, "אריאל", 7), MaaleAdumim(64,
			"מעלה-אדומים", 7);

	private final Integer id;
	private final String name;
	private final Integer parent_location_id;

	Locations(Integer id, String name, Integer parent_location_id)
	{
		this.id = id;
		this.name = name;
		this.parent_location_id = parent_location_id;
	}

	public static Map<Integer, List<String>> getAllLocations()
	{
		Map<Integer, List<String>> map = new HashMap<Integer, List<String>>();

		Locations[] list = values();
		List<String> locations;

		for (int i = 0; i < list.length; i++)
		{
			Locations l = list[i];

			if (l.getParent_location_id() == null)
			{
				locations = new ArrayList<String>();
				locations.add(l.getName());
				locations.addAll(l.getSons());

				map.put(l.getId(), locations);
			}
		}

		return map;
	}

	private List<String> getSons()
	{
		List<String> list = new ArrayList<String>();

		for (Locations l : values())
		{
			if (this.getId() == l.getParent_location_id())
			{
				list.add(l.getName());
			}
		}

		return list;
	}

	public static Locations getById(Integer id)
	{
		for (Locations loc : values())
		{
			if (loc.getId().equals(id))
				return loc;
		}

		return null;
	}

	public static Locations getByName(String name)
	{
		for (Locations loc : values())
		{
			if (loc.getName().equals(name))
				return loc;
		}

		return null;
	}

	public Integer getId()
	{
		return id;
	}

	public String getName()
	{
		return name;
	}

	public Integer getParent_location_id()
	{
		return parent_location_id;
	}
}
