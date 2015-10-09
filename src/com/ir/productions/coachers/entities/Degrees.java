package com.ir.productions.coachers.entities;

import java.util.ArrayList;
import java.util.List;

public enum Degrees {
	Gym_Coach(1, "מאמן חדכ ובריאות"), Aerobi_Instructor(2, "אירובי דנס ועיצוב"), Personal_Coach(
			3, "מאמן אישי ורצועות"), Kickbox_Instructor(4, "קייקבוקס"), Pilatis_Instructor(
			5, "פילאטיס"), Gym_Pilatis_Instructor(6, "פילאטיס מכשירים"), Bike_Instructor(
			7, "אופני סטודיו"), Yoga_Instructor(8, "יוגה"), Pregnant_Yoga_Instructor(
			9, "יוגה לנשים בהריון"), Hip_Hop_Instructor(10, "היפהופ"), Basketball_Coach(
			11, "מאמן כדורסל"), Football_Coach(12, "מאמן כדורגל"), Volleyball_Coach(
			13, "מאמן כדור עף"), Handball_Coach(14, "מאמן כדור יד"), Horse_Riding_Instrctor(
			15, "רכיבה על סוסים"), Korsefight_Instrctor(16, "קורספייט"), Swimming_Instrctor(
			17, "שחייה"), Martial_Arts_Instrctor(18, "אומנויות לחימה");

	private final Integer id;
	private final String name;

	private Degrees(Integer id, String name)
	{
		this.id = id;
		this.name = name;
	}

	public Degrees getById(Integer id)
	{
		for (Degrees obj : values())
		{
			if (obj.getId().equals(id))
				return obj;
		}

		return null;
	}

	public static List<String> getAllNames()
	{
		List<String> list = new ArrayList<String>();

		for (Degrees obj : values())
		{
			list.add(obj.getName());
		}

		return list;
	}

	public String getNameById(Integer id)
	{
		return getById(id).getName();
	}

	public Integer getId()
	{
		return id;
	}

	public String getName()
	{
		return name;
	}
}
