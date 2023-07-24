import { deleteNoticeById, getAllNotices } from '@/api/notices'
import type { NoticeList } from '@/types/notices'
import { defineStore } from 'pinia'
import { ref, type ComputedRef, type Ref, computed } from 'vue'
import Swal from 'sweetalert2';


export const useNoticeStore = defineStore('notice-store', () => {
  const curIdx = ref(0)
  const noticeId = ref(0)
  const noticeList: Ref<NoticeList> = ref([])
  const maxCnt = 10;
  const numList:Ref<number[]> = ref([]);

  const displayNoticeList:ComputedRef<NoticeList> = computed(() =>
    curIdx.value * maxCnt + maxCnt <= noticeList.value.length
      ? noticeList.value.slice(curIdx.value * maxCnt, curIdx.value * maxCnt + maxCnt)
      : noticeList.value.slice(curIdx.value * maxCnt)
  )
  const getCurIdx = () => curIdx.value
  const getNoticeId = () => noticeId.value
  const getNoticeList = () => noticeList.value;
  const getNumList = () => numList.value
  const getDisplayNoticeList = () => displayNoticeList.value;

  
  const setCurIdx = async (idx: number) => {
    const end = Math.ceil(noticeList.value.length / maxCnt)
    if (idx < 0) curIdx.value = idx + 1
    else if (idx < end) curIdx.value = idx
    else curIdx.value = idx - 1
  }
  const setNoticeId = async (idx: number) => {
    noticeId.value = idx
  }
  
  const getAllNoticesList = async () => {
    const data = await getAllNotices()
    noticeList.value = data
    curIdx.value = 0
    const num = Math.ceil(data.length / maxCnt);
    numList.value = Array.from({ length: num }, (_, i) => i + 1)
  }

  const deleteNotice = async (id: number) => {
    const data = await deleteNoticeById(id)
    if (data.code === 200) {
      Swal.fire({
        icon: 'success',
        title: 'SUCCESS',
        text: '삭제 완료 하였습니다!'
      });
      getAllNoticesList();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'ERROR',
        text: '삭제 실패 하였습니다!'
      });
    }
  }


  return {
    getCurIdx,
    getNoticeId,
    getNumList,
    getNoticeList,
    getDisplayNoticeList,

    setCurIdx,
    setNoticeId,

    getAllNoticesList,
    deleteNotice,
  }
})
