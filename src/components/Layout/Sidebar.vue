<template>
  <aside>
    <div class="app__brand">
      <router-link to="/home">
        <img src="../../assets/image/logo.jpg" width="90" />
      </router-link>
      <a class="menu__toggle_close toggle" @click="closeMenu()"
        ><font-awesome-icon
          icon="fa-solid fa-angle-left"
          size="lg"
          :style="{ color: '#fff', width: '21px' }"
      /></a>
    </div>
    <ul>
      <li class="menu__header">
        <span class="menu-header-text">Pages</span>
      </li>
      <div v-for="item in Links" :key="item.name">
        <li class="menu__item">
          <router-link
            :to="item.route"
            :class="[route.name === item.name ? 'active' : '']"
          >
            <font-awesome-icon
              :icon="item.icon"
              :style="[
                route.name === 'Home'
                  ? { color: '#697a8df' }
                  : { color: '#696cf' },
              ]"
            />
            <span>{{ item.name }}</span>
          </router-link>
        </li>
      </div>
    </ul>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Toggle from "../../utils/toggleNav";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "App",
  components: { FontAwesomeIcon },
  setup() {
    const route = useRoute();

    const Links = [
      {
        name: "Home",
        route: "/home",
        icon: "fa-solid fa-house-user",
      },
      {
        name: "Users",
        route: "/users",
        icon: "fa-solid fa-users",
      },
      {
        name: "Add-User",
        route: "/add-user",
        icon: "fa-solid fa-user-plus",
      },
      {
        name: "Logout",
        route: "/",
        icon: "fa-solid fa-arrow-right-from-bracket",
      },
    ];

    const { closeMenu } = Toggle.closeNavigation();

    return { route, closeMenu, Links };
  },
});
</script>
