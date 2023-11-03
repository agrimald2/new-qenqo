<script setup>
import { mdiForwardburger, mdiBackburger, mdiMenu } from "@mdi/js";
import { ref } from "vue";
import { router } from "@inertiajs/vue3";
import menuAsideStudents from "@/menuAsideStudents.js";
import menuNavBar from "@/menuNavBar.js";
import { useMainStore } from "@/Stores/main.js";
import { useStyleStore } from "@/Stores/style.js";
import BaseIcon from "@/Components/BaseIcon.vue";
import FormControl from "@/Components/FormControl.vue";
import NavBar from "@/Components/NavBar.vue";
import NavBarItemPlain from "@/Components/NavBarItemPlain.vue";
import AsideMenu from "@/Components/AsideMenu.vue";
import FooterBar from "@/Components/FooterBar.vue";
import axios from 'axios';

const layoutAsidePadding = "xl:pl-60";

const styleStore = useStyleStore();

router.on("navigate", () => {
  isAsideMobileExpanded.value = false;
  isAsideLgActive.value = false;
});

const isAsideMobileExpanded = ref(false);
const isAsideLgActive = ref(false);

const menuClick = (event, item) => {
  if (item.isToggleLightDark) {
    styleStore.setDarkMode();
  }

  if (item.isLogout) {
    router.post(route("logout"));
  }
};

const getAuthUserInformation = () => {
  axios.get('/user-information')
    .then(response => {
      console.dir(response.data);
      response.data.avatar = "https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93";
      response.data.email = response.data.username;
      useMainStore().setUser(response.data);
    })
    .catch(error => {
      console.error(error);
    });
};

getAuthUserInformation();
</script>

<template>
  <div :class="{
    dark: styleStore.darkMode,
    'overflow-hidden lg:overflow-visible': isAsideMobileExpanded,
  }">
    <div :class="[layoutAsidePadding, { 'ml-60 lg:ml-0': isAsideMobileExpanded }]"
      class="pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100">
      <NavBar :menu="menuNavBar" :class="[
        layoutAsidePadding,
        { 'ml-60 lg:ml-0': isAsideMobileExpanded },
      ]" @menu-click="menuClick">
        <NavBarItemPlain display="flex lg:hidden" @click.prevent="isAsideMobileExpanded = !isAsideMobileExpanded">
          <BaseIcon :path="isAsideMobileExpanded ? mdiBackburger : mdiForwardburger" size="24" />
        </NavBarItemPlain>
        <NavBarItemPlain display="hidden lg:flex xl:hidden" @click.prevent="isAsideLgActive = true">
          <BaseIcon :path="mdiMenu" size="24" />
        </NavBarItemPlain>
        <NavBarItemPlain use-margin>
          <FormControl placeholder="Search (ctrl+k)" ctrl-k-focus transparent borderless />
        </NavBarItemPlain>
      </NavBar>
      <AsideMenu :is-aside-mobile-expanded="isAsideMobileExpanded" :is-aside-lg-active="isAsideLgActive" :menu="menuAsideStudents"
        @menu-click="menuClick" @aside-lg-close-click="isAsideLgActive = false" />
      <slot />
      <FooterBar>
        Desarrollado por
        <a href="https://e-pask.com" target="_blank" class="text-blue-600">e-Pask</a>
      </FooterBar>
    </div>
  </div>
</template>
