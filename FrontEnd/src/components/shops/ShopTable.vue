<template>
  <div class="shops-table-wrap-box">
      <table>
        <thead>
          <template v-for="(hLabel, idx) in headLabelList" :key="idx">
            <th>{{ hLabel }}</th>
          </template>
        </thead>
        <tbody v-if="shopStore.getShopList().length !== 0">
          <template v-for="item in shopStore.getDisplayShopList()" :key="item">
            <tr>
              <td>{{ item.locName }}</td>
              <td>{{ item.shopName }}</td>
              <td>{{ item.shopAddress }}</td>
              <td>{{ item.shopTel }}</td>
            </tr>
          </template>
        </tbody>
        <tbody v-else>
          <TableNoData></TableNoData>
        </tbody>
      </table>
      <ul class="pagenate-list">
        <li class="pagenate-item" @click="shopStore.changePageIdx(shopStore.getPageIdx() - 1)">prev</li>
        <template v-for="(num, idx) in shopStore.getNumList()" :key="idx">
          <li
            class="pagenate-item"
            :class="{ 'active-number': idx === shopStore.getPageIdx() }"
            @click="shopStore.changePageIdx(idx)"
          >
            {{ num }}
          </li>
        </template>
        <li class="pagenate-item" @click="shopStore.changePageIdx(shopStore.getPageIdx() + 1)">next</li>
      </ul>
    </div>
</template>
<script setup lang="ts">
import {useShopStore} from '@/stores/shops';
import TableNoData from '@/components/common/table/TableNoData.vue';
const shopStore = useShopStore();
const headLabelList = ['지역', '매장명', '주소', '전화번호'];
</script>
