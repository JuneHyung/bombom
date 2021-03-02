package com.ssafy.bombom.model.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.bombom.model.Shop;

@Mapper
public interface ShopDAO {
	public List<Shop> listShop();
	public List<Shop> listSeoul();
	public List<Shop> listBusan();
	public List<Shop> listDaegu();
	public List<Shop> listDaejeon();
	public List<Shop> listUlsan();
	public List<Shop> listSaejong();
	public List<Shop> listIncheon();
}
