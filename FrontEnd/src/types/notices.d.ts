import type { TextInput } from "./common"

export interface Notice {
  id: number,
  noticeTitle: string,
  noticeContent: string,
  noticeView: number,
  noticeDate: string,
}

export type NoticeList = Notice[];
export type NoticeFormData = {
  noticeTitle: TextInput,
  noticeContent: TextInput,
}

export type postNoticeBody = Pick<Notice, 'noticeTitle' | 'noticeContent'>
export interface putNoticeBody extends postNoticeBody {
  noticeId?: number,
}