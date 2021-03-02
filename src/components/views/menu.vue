<template>
  <v-card>
    <v-tabs color="deep-purple accent-4" right>
      <v-tab>New</v-tab>
      <v-tab>Coffee</v-tab>
      <v-tab>Latte</v-tab>
      <v-tab>Smoothie</v-tab>
      <v-tab>Ade</v-tab>
      <v-tab>Tea</v-tab>
      <v-tab>Juice</v-tab>
      <v-tab>Bubble</v-tab>
      <v-tab>SideMenu</v-tab>

      <v-tab-item v-for="n in 9" :key="n">
        <v-container fluid>
          <menu-list v-if="n == 1"> </menu-list>
          <coffee-list v-if="n == 2"> </coffee-list>
          <latte-list v-if="n == 3"> </latte-list>
          <smoothie-list v-if="n == 4"></smoothie-list>
          <ade-list v-if="n == 5"></ade-list>
          <tea-list v-if="n == 6"> </tea-list>
          <juice-list v-if="n == 7"></juice-list>
          <bubble-list v-if="n == 8"></bubble-list>
          <side-menu-list v-if="n == 9"></side-menu-list>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>
<script>
import MenuList from '../menu/MenuList';
import CoffeeList from '../menu/CoffeeList';
import LatteList from '../menu/LatteList';
import SmoothieList from '../menu/SmoothieList';
import AdeList from '../menu/AdeList';
import TeaList from '../menu/TeaList';
import JuiceList from '../menu/JuiceList';
import BubbleList from '../menu/BubbleList';
import SideMenuList from '../menu/SideMenuList';

export default {
  components: {
    MenuList,
    CoffeeList,
    LatteList,
    SmoothieList,
    AdeList,
    TeaList,
    JuiceList,
    BubbleList,
    SideMenuList,
  },
};
</script>
<style></style>
