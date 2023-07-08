export interface Menu {
  id?: number,
  menuName?: string,
  menuPrice?: number,
  menuType?: string,
  menuNew?: boolean,
  menuImg?: string,
}

export type MenuList = Menu[];