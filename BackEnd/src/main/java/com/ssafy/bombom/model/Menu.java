package com.ssafy.bombom.model;

public class Menu {

	int menuNo;
	String menuName;
	String menuPrice;
	String menuType;
	boolean menuNew;
	String menuImg;
	public String getMenuImg() {
		return menuImg;
	}
	public void setMenuImg(String menuImg) {
		this.menuImg = menuImg;
	}
	public int getMenuNo() {
		return menuNo;
	}
	public void setMenuNo(int menuNo) {
		this.menuNo = menuNo;
	}
	public String getMenuName() {
		return menuName;
	}
	public void setMenuName(String menuName) {
		this.menuName = menuName;
	}
	public String getMenuPrice() {
		return menuPrice;
	}
	public void setMenuPrice(String menuPrice) {
		this.menuPrice = menuPrice;
	}
	public String getMenuType() {
		return menuType;
	}
	public void setMenuType(String menuType) {
		this.menuType = menuType;
	}
	public boolean isMenuNew() {
		return menuNew;
	}
	public void setMenuNew(boolean menuNew) {
		this.menuNew = menuNew;
	}
	
	
}
