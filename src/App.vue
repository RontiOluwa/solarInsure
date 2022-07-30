<template>
  <div class="layout__wrapper" v-if="route.path !== '/'">
    <div class="layout__container">
      <Sidebar v-if="$store.state.visibile === true" />
      <div class="layout__page">
        <div class="content__wrapper">
          <Top v-if="$store.state.visibile === false" />
          <router-view />
        </div>
        <div class="overlay" v-if="$store.state.visibile === true"></div>
      </div>
    </div>
  </div>
  <router-view v-else />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import Sidebar from "./components/Layout/Sidebar.vue";
import Top from "./components/Layout/Top.vue";
import Toggle from "./utils/toggleNav";

export default defineComponent({
  name: "App",
  components: { Sidebar, Top },
  setup() {
    const route = useRoute();

    const { openMenu } = Toggle.openNavigation();
    const { closeMenu } = Toggle.closeNavigation();

    // Set Navigatio base on Screen Size
    const checkScreen = () => {
      if (screen.width > 1100) {
        openMenu();
      } else {
        closeMenu();
      }
    };

    // Initialize Windw Listener
    window.addEventListener("resize", checkScreen);
    return { route };
  },
});
</script>
