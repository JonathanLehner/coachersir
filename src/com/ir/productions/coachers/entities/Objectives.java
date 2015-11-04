package com.ir.productions.coachers.entities;

import java.util.ArrayList;
import java.util.List;

public enum Objectives {
	Gain_Weight(1, "עלייה במשקל"), Lose_Weight(2, "ירידה במשקל"), Body_Pump(3,
			"פיתוח הגוף"), Musle_Strength(4, "חיזוק השרירים"), Fat_Lose(5,
			"הפחתת שומנים"), Body_Shape(6, "עיצוב וחיטוב הגוף"), Stress_Lose(7,
			"הפגת מתחים"), Gain_Energy(8, "החזרת אנרגיה"), Look_Good(9,
			"להראות טוב"), Feel_good(10, "להרגיש טוב");

	private final Integer id;
	private final String name;

	private Objectives(Integer id, String name)
	{
		this.id = id;
		this.name = name;
	}

	public static Objectives getById(Integer id)
	{
		for (Objectives obj : values())
		{
			if (obj.getId().equals(id))
				return obj;
		}

		return null;
	}

	public static Objectives getByName(String name)
	{
		for (Objectives obj : values())
		{
			if (obj.getName().equals(name))
				return obj;
		}

		return null;
	}

	public static List<String> getAllObjectives()
	{
		List<String> list = new ArrayList<String>();

		for (Objectives obj : values())
		{
			list.add(obj.getName());
		}

		return list;
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
