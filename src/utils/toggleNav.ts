/* eslint-disable */
import { useStore } from "vuex";
import { defineComponent } from "vue";

const toggelNavonScreenChange = () => {
  const store = useStore();

  const setNav = () => {
    if (screen.width > 1230) {
      store.dispatch("changeVisibility", true);
    } else {
      store.dispatch("changeVisibility", false);
    }
  };
  return {
    setNav,
  };
};

const openNavigation = () => {
  const store = useStore();
  const openMenu = () => {
    store.dispatch("changeVisibility", true);
  };
  return {
    openMenu,
  };
};

const closeNavigation = () => {
  const store = useStore();
  const closeMenu = () => {
    store.dispatch("changeVisibility", false);
  };
  return {
    closeMenu,
  };
};

export default defineComponent({
  toggelNavonScreenChange,
  openNavigation,
  closeNavigation,
});
