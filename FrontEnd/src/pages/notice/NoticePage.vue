<template>
  <div>
    <p>공지사항 페이지 입니다.</p>
    <button>등록</button>
  </div>
  <table>
    <thead>
      <th>글 번호</th>
      <th>제목</th>
      <th>작성일</th>
      <th>조회수</th>
      <th>Actions</th>
    </thead>
    <tbody>
      <template v-for="(item) in noticeList" :key="item">
        <tr>
          <td>{{ item.noticeNo }}</td>
          <td>{{ item.noticeTitle }}</td>
          <td>{{ item.noticeDate }}</td>
          <td>{{ item.noticeView }}</td>
          <td>수정, 삭제</td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script setup>
import noticeData from '@/constant/noticeData.json'
const noticeList = noticeData;
</script>