package com.ssafy.bombom.model.service;

import java.util.List;

import com.ssafy.bombom.model.Menu;

public interface MenuService {
	public List<Menu> listMenu();
	public Menu detailMenu(int menuNo);
	public List<Menu> newMenuList();
	public List<Menu> coffeeMenuList();
	public List<Menu> latteMenuList();
	public List<Menu> smoothieMenuList();
	public List<Menu> adeMenuList();
	public List<Menu> teaMenuList();
	public List<Menu> juiceMenuList();
	public List<Menu> bubbleMenuList();
	public List<Menu> sideMenuList();
}
