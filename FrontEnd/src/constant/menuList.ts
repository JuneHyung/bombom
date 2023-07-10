interface FixedMenu {
  path: string,
  name: string,
  label: string,
}
type FixedMenuList = FixedMenu[];
export const FIXED_MENU_LIST: FixedMenuList = [
  {path: '/menu', name: 'Menu', label: '메뉴보기'},
  {path: '/notice', name: 'Notice', label: '공지사항'},
  {path: '/shops', name: 'Shops', label: '매장찾기'},
];