export interface IntroduceText {
  title: string,
  subtitle01?: string,
  subtitle02?: string,
  explain01?: string[],
  explain02?: string[],
  introduceImg?: string,
}

export interface LocationInfo {
  name: string,
  address: string,
}

export type LocationInfoList = LocationInfo[]

export interface BannerItem {
  url: string,
  alt: string,
}