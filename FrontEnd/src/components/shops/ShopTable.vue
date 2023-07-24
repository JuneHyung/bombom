<template>
  <div class="shops-table-wrap-box">
      <table>
        <TableHeader :list="headLabelList"></TableHeader>
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
      <PagenateBar type="shop"></PagenateBar>
    </div>
</template>
<script setup lang="ts">
import {useShopStore} from '@/stores/shops';
import TableHeader from '@/components/common/table/TableHeader.vue';
import TableNoData from '@/components/common/table/TableNoData.vue';
import PagenateBar from '@/components/common/table/PagenateBar.vue';
const shopStore = useShopStore();
const headLabelList = ['지역', '매장명', '주소', '전화번호'];
</script>
