package com.ssafy.bombom.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.bombom.model.Menu;
import com.ssafy.bombom.model.dao.MenuDAO;




@Service
public class MenuServiceImpl implements MenuService {
	@Autowired
	private MenuDAO menuDao;
	
	@Override
	public List<Menu> listMenu() {
		return menuDao.listMenu();
	}

	@Override
	public Menu detailMenu(int menuNo) {
		// TODO Auto-generated method stub
		return menuDao.detailMenu(menuNo);
	}

	@Override
	public List<Menu> newMenuList() {
		return menuDao.newMenuList();
	}

	@Override
	public List<Menu> coffeeMenuList() {
		return menuDao.coffeeMenuList();
	}

	@Override
	public List<Menu> teaMenuList() {
		return menuDao.teaMenuList();
	}

	@Override
	public List<Menu> latteMenuList() {
		return menuDao.latteMenuList();
	}

	@Override
	public List<Menu> smoothieMenuList() {
		return menuDao.smoothieMenuList();
	}

	@Override
	public List<Menu> adeMenuList() {
		return menuDao.adeMenuList();
	}

	@Override
	public List<Menu> juiceMenuList() {
		return menuDao.juiceMenuList();
	}

	@Override
	public List<Menu> bubbleMenuList() {
		return menuDao.bubbleMenuList();
	}

	@Override
	public List<Menu> sideMenuList() {
		return menuDao.sideMenuList();
	}

}
