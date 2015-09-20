package com.ir.productions.coachers.entities;

public enum Objectives
{
	Gain_Weight(1, "����� �����"), Lose_Weight(2, "����� �����"), Body_Pump(3,
			"����� ����"), Musle_Strength(4, "����� �������"), Fat_Lose(5,
			"����� ������"), Body_Shape(6, "����� ������ ����"), Stress_Lose(7,
			"���� �����"), Gain_Energy(8, "����� ������"), Look_Good(9,
			"������ ���"), Feel_good(10, "������ ���");

	private final Integer id;
	private final String name;

	private Objectives(Integer id, String name)
	{
		this.id = id;
		this.name = name;
	}

	public Objectives getById(Integer id)
	{
		for (Objectives obj : values())
		{
			if (obj.getId().equals(id))
				return obj;
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

}
