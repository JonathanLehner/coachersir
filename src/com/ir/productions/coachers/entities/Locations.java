package com.ir.productions.coachers.entities;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public enum Locations
{
	Central_District(1, "���� �����", null), 
	Haifa_District(2, "���� ����", null),
	Jerusalem_District(3, "���� �������", null),
	Northern_District(4, "���� �����", null),
	Southern_District(5, "���� �����", null),
	TelAviv_District(6, "���� �� ����", null),
	Yosh_District(7, "���� ����� �������" , null),
	
	NesZiona(8, "�� �����", 1), 	
	Rehovot(9, "������", 1),
	RishonLezion(10, "����� �����", 1), 	
	RoshHaayin(11, "��� ����", 1),
	Yavne(12, "����", 1),
	YehudMonosson(12, "����-�������", 1),	
	KfarSaba(13, "��� ���", 1),
	Lod(14, "���", 1),
	Modiin(15, "�������-�����-����", 1),	
	PetahTikva(15, "��� ����", 1),
	HodHaSharon(16, "��� �����", 1), 	
	Ramla(17, "����", 1),
	Raanana(18, "�����", 1),
	Netanya(19, "�����", 1),
	
	
	Hadera(20, "����", 2), 	
	Haifa(21, "����", 2),
	KiryatAta(22, "���� ���", 2),
	KiryatBialik(23, "���� ������", 2), 
	KiryatYam(24, "���� ��	", 2), 		
	KiryatMotzkin(25, "���� ������	", 2), 
	TiratCarmel(26, "���� ����", 2),		
	Nesher(27, "���", 2),

	BeitShemesh(27, "���-���", 3),	
	Jerusalem(27, "�������", 3),	

	Nahariya (27, "�����", 4), 
	Afula	(27, "�����", 4),	
	Tiberias	(27, "�����", 4),	
	Akko	(27, "���", 4),	
	MigdalHaEmek	(27, "����-����", 4),	
	KiryatShemone	(27, "����-�����", 4),	
	Karmiel	(27, "������", 4),	
	Tsfat	(27, "���", 4),	
	BeitShean	(27, "���-���", 4),	
	NazarethIllit	(27, "����-�����", 4),	
	Nazareth	(27, "����", 4),	
	MaalotTarshiha	(27, "�����-������", 4),	

	Eilat	(27, "����", 5),	
	Sderot	(27, "�����", 5),	
	Netivot	(27, "������", 5),	
	Arad	(27, "���", 5),	
	Dimona	(27, "������", 5),	
	Ashdod	(27, "�����", 5),	
	KiryatGat	(27, "����-��", 5),	
	KiryatMalachi	(27, "����-�����", 5),	
	BeerSheva	(27, "���-���", 5),	
	Ashkelon	(27, "������", 5),	

	KiryatOno	(27, "����-����", 6),	
	Givatayim	(27, "�������", 6),	
	BatYam	(27, "��-��", 6),	
	BneiBerak	(27, "���-���", 6),	
	RamatGan	(27, "���-��", 6),	
	Holon	(27, "�����", 6),	
	TelAviv	(27, "��-����-���", 6),	
	Herzliya	(27, "������", 6),	
	RamatHasharon	(27, "���-�����", 6),	
	OrYehuda	(27, "���-�����", 6),	

	BetarIllit	(27, "����-�����", 7),	
	Ariel	(27, "�����", 7),	
	MaaleAdumim	(27, "����-������", 7);	

	private final Integer id;
	private final String name;
	private final Integer parent_location_id;

	Locations(Integer id, String name, Integer parent_location_id){
		this.id = id;
		this.name = name;
		this.parent_location_id = parent_location_id;
	}
	
	public static Map<Locations, List<Locations>> getAllLocations()
	{
		Map<Locations, List<Locations>> map = new HashMap<Locations, List<Locations>>();
		
		Locations[] list = values();
		
		boolean continueLoop = true;
		
		for(int i=0; i < list.length && continueLoop; i++)
		{
			Locations l = list[i];
			
			if(l.getParent_location_id() == null)
			{
				map.put(l, l.getSons());
			}
			else
			{
				continueLoop = false;
			}
		}
		
		return map;
	}

	private List<Locations> getSons()
	{
		List<Locations> list = new ArrayList<Locations>();
		
		for(Locations l : values())
		{
			if(this.getId() == l.getParent_location_id())
			{
				list.add(l);
			}
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

	public Integer getParent_location_id()
	{
		return parent_location_id;
	}
}
