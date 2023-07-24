import { deleteNoticeById, getAllNotices } from '@/api/notices'
import type { NoticeList } from '@/types/notices'
import { defineStore } from 'pinia'
import { ref, type ComputedRef, type Ref, computed } from 'vue'
import Swal from 'sweetalert2';


export const useNoticeStore = defineStore('notice-store', () => {
  const pageIdx = ref(0)
  const noticeId = ref(0)
  const noticeList: Ref<NoticeList> = ref([])
  const maxCnt = 10;
  const numList:Ref<number[]> = ref([]);

  const displayNoticeList:ComputedRef<NoticeList> = computed(() =>
    pageIdx.value * maxCnt + maxCnt <= noticeList.value.length
      ? noticeList.value.slice(pageIdx.value * maxCnt, pageIdx.value * maxCnt + maxCnt)
      : noticeList.value.slice(pageIdx.value * maxCnt)
  )
  const getPageIdx = () => pageIdx.value
  const getNoticeId = () => noticeId.value
  const getNoticeList = () => noticeList.value;
  const getNumList = () => numList.value
  const getDisplayNoticeList = () => displayNoticeList.value;

  
  const changePageIdx = async (idx: number) => {
    const end = Math.ceil(noticeList.value.length / maxCnt)
    if (idx < 0) pageIdx.value = idx + 1
    else if (idx < end) pageIdx.value = idx
    else pageIdx.value = idx - 1
  }
  const setNoticeId = async (idx: number) => {
    noticeId.value = idx
  }
  
  const getAllNoticesList = async () => {
    const data = await getAllNotices()
    noticeList.value = data
    pageIdx.value = 0
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
    getPageIdx,
    getNoticeId,
    getNumList,
    getNoticeList,
    getDisplayNoticeList,

    changePageIdx,
    setNoticeId,

    getAllNoticesList,
    deleteNotice,
  }
})
