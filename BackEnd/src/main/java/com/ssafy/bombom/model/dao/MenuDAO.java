package com.ssafy.bombom.model.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.bombom.model.Menu;

@Mapper
public interface MenuDAO {
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
