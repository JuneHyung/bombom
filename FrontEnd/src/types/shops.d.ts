export interface Shop {
  id: number,
  locName?: string,
  shopName?:string,
  shopTel?:string,
  shopAddress?:string,
}

export type ShopList = Shop[];
export type MapInfo = Pick<Shop, 'shopName'|'shopAddress'>

export type ShopsMapList = MapInfo[];