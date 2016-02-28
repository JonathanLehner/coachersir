package com.ir.productions.coachers.pojos;

import java.util.List;

public class ArrayHolder
{
	public List<Long> longs;
	public List<Integer> ints;
	public List<String> strings;

	public ArrayHolder()
	{
	}

	public List<Long> getLongs()
	{
		return longs;
	}

	public void setLongs(List<Long> longs)
	{
		this.longs = longs;
	}

	public List<Integer> getInts()
	{
		return ints;
	}

	public void setInts(List<Integer> ints)
	{
		this.ints = ints;
	}

	public List<String> getStrings()
	{
		return strings;
	}

	public void setStrings(List<String> strings)
	{
		this.strings = strings;
	}
}
