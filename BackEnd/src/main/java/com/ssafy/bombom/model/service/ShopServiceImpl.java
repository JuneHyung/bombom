package com.ssafy.bombom.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.bombom.model.Shop;
import com.ssafy.bombom.model.dao.ShopDAO;

@Service
public class ShopServiceImpl implements ShopService{

	@Autowired
	private ShopDAO shopDao;
	@Override
	public List<Shop> listShop() {
		
		return shopDao.listShop();
	}
	@Override
	public List<Shop> listSeoul() {
		// TODO Auto-generated method stub
		return shopDao.listSeoul();
	}
	@Override
	public List<Shop> listDaegu() {
		// TODO Auto-generated method stub
		return shopDao.listDaegu();
	}
	@Override
	public List<Shop> listDaejeon() {
		// TODO Auto-generated method stub
		return shopDao.listDaejeon();
	}
	@Override
	public List<Shop> listBusan() {
		return shopDao.listBusan();
	}
	@Override
	public List<Shop> listUlsan() {
		return shopDao.listUlsan();
	}
	@Override
	public List<Shop> listSaejong() {
		return shopDao.listSaejong();
	}
	@Override
	public List<Shop> listIncheon() {
		return shopDao.listIncheon();
	}

}
