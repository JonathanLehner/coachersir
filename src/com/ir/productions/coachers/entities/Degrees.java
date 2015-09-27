package com.ir.productions.coachers.entities;

import java.util.ArrayList;
import java.util.List;

public enum Degrees {
	Gym_Coach(1, "קורס מאמני חדכ ובריאות"), Aerobi_Instructor(2,
			"קורס מדריכי אירובי דנס ועיצוב"), Personal_Coach(3,
			"מאמנים אישים+רצועות"), Kickbox_Instructor(4,
			"קורס מדריכי קייקבוקס"), Pilatis_Instructor(5,
			"קורס מדריכי פילאטיס"), Gym_Pilatis_Instructor(6,
			"קורס מדריכי פילאטיס מכשירים"), Bike_Instructor(7,
			"קורס מדריכי אופני סטודיו"), Yoga_Instructor(8, "קורס מדריכי יוגה"), Pregnant_Yoga_Instructor(
			9, "קורס מדריכי יוגה לנשים בהריון"), Hip_Hop_Instructor(10,
			"קורס מדריכי היפהופ"), Basketball_Coach(11, "קורס מאמני כדורסל"), Football_Coach(
			12, "קורס מאמני כדורגל"), Volleyball_Coach(13, "קורס מאמני כדור עף"), Handball_Coach(
			14, "קורס מאמני כדור יד"), Horse_Riding_Instrctor(15,
			"קורס מדריכי רכיבה על סוסים"), Korsefight_Instrctor(16,
			"קורס מדריכי קורספייט"), Swimming_Instrctor(17, "קורס מדריכי שחייה"), Martial_Arts_Instrctor(
			18, "קורס מדריכי אומנויות לחימה");

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
