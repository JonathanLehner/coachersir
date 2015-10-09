package com.ir.productions.coachers.entities;

import java.util.ArrayList;
import java.util.List;

public enum Degrees {
	Gym_Coach(1, "���� ��� �������"), Aerobi_Instructor(2, "������ ��� ������"), Personal_Coach(
			3, "���� ���� �������"), Kickbox_Instructor(4, "��������"), Pilatis_Instructor(
			5, "�������"), Gym_Pilatis_Instructor(6, "������� �������"), Bike_Instructor(
			7, "����� ������"), Yoga_Instructor(8, "����"), Pregnant_Yoga_Instructor(
			9, "���� ����� ������"), Hip_Hop_Instructor(10, "������"), Basketball_Coach(
			11, "���� ������"), Football_Coach(12, "���� ������"), Volleyball_Coach(
			13, "���� ���� ��"), Handball_Coach(14, "���� ���� ��"), Horse_Riding_Instrctor(
			15, "����� �� �����"), Korsefight_Instrctor(16, "��������"), Swimming_Instrctor(
			17, "�����"), Martial_Arts_Instrctor(18, "�������� �����");

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
