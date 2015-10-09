package com.ir.productions.coachers.entities;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public enum Locations {
	root(0, "root", null),

	Central_District(1, "���� �����", 0), Haifa_District(2, "���� ����", 0), Jerusalem_District(
			3, "���� �������", 0), Northern_District(4, "���� �����", 0), Southern_District(
			5, "���� �����", 0), TelAviv_District(6, "���� �� ����", 0), Yosh_District(
			7, "���� ����� �������", 0),

	NesZiona(8, "�� �����", 1), Rehovot(9, "������", 1), RishonLezion(10,
			"����� �����", 1), RoshHaayin(11, "��� ����", 1), Yavne(12, "����",
			1), YehudMonosson(12, "����-�������", 1), KfarSaba(13, "��� ���", 1), Lod(
			14, "���", 1), Modiin(15, "�������-�����-����", 1), PetahTikva(15,
			"��� ����", 1), HodHaSharon(16, "��� �����", 1), Ramla(17, "����",
			1), Raanana(18, "�����", 1), Netanya(19, "�����", 1),

	Hadera(20, "����", 2), Haifa(21, "����", 2), KiryatAta(22, "���� ���", 2), KiryatBialik(
			23, "���� ������", 2), KiryatYam(24, "���� ��	", 2), KiryatMotzkin(
			25, "���� ������	", 2), TiratCarmel(26, "���� ����", 2), Nesher(27,
			"���", 2),

	BeitShemesh(28, "���-���", 3), Jerusalem(29, "�������", 3),

	Nahariya(30, "�����", 4), Afula(31, "�����", 4), Tiberias(32, "�����", 4), Akko(
			33, "���", 4), MigdalHaEmek(34, "����-����", 4), KiryatShemone(35,
			"����-�����", 4), Karmiel(36, "������", 4), Tsfat(37, "���", 4), BeitShean(
			38, "���-���", 4), NazarethIllit(39, "����-�����", 4), Nazareth(40,
			"����", 4), MaalotTarshiha(41, "�����-������", 4),

	Eilat(42, "����", 5), Sderot(43, "�����", 5), Netivot(44, "������", 5), Arad(
			45, "���", 5), Dimona(46, "������", 5), Ashdod(47, "�����", 5), KiryatGat(
			48, "����-��", 5), KiryatMalachi(49, "����-�����", 5), BeerSheva(
			50, "���-���", 5), Ashkelon(51, "������", 5),

	KiryatOno(52, "����-����", 6), Givatayim(53, "�������", 6), BatYam(54,
			"��-��", 6), BneiBerak(55, "���-���", 6), RamatGan(56, "���-��", 6), Holon(
			57, "�����", 6), TelAviv(58, "��-����-���", 6), Herzliya(59,
			"������", 6), RamatHasharon(60, "���-�����", 6), OrYehuda(61,
			"���-�����", 6),

	BetarIllit(62, "����-�����", 7), Ariel(63, "�����", 7), MaaleAdumim(64,
			"����-������", 7);

	private final Integer id;
	private final String name;
	private final Integer parent_location_id;

	Locations(Integer id, String name, Integer parent_location_id)
	{
		this.id = id;
		this.name = name;
		this.parent_location_id = parent_location_id;
	}

	public static Map<String, List<Locations>> getAllLocations()
	{
		Map<String, List<Locations>> map = new HashMap<String, List<Locations>>();

		Locations[] list = values();

		boolean continueLoop = true;

		for (int i = 0; i < list.length && continueLoop; i++)
		{
			Locations l = list[i];

			if (l.getParent_location_id() == null)
			{
				map.put(l.getName(), l.getSons());

				List<Locations> sons = l.getSons();
				for (int j = 0; j < sons.size(); j++)
				{
					map.put(sons.get(j).getName(), sons.get(j).getSons());
				}
			} else
			{
				continueLoop = false;
			}
		}

		return map;
	}

	private List<Locations> getSons()
	{
		List<Locations> list = new ArrayList<Locations>();

		for (Locations l : values())
		{
			if (this.getId() == l.getParent_location_id())
			{
				list.add(l);
			}
		}

		return list;
	}

	public Locations getById(Integer id)
	{
		for (Locations loc : values())
		{
			if (loc.getId().equals(id))
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
