<template>
  <Card class="card__stat top__nav">
    <a class="menu__toggle_open toggle" @click="openMenu()"
      ><font-awesome-icon
        icon="fa-solid fa-bars"
        size="lg"
        :style="{ color: '#fff', width: '21px' }"
    /></a>
  </Card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Card from "./Card.vue";
import Toggle from "../../utils/toggleNav";

export default defineComponent({
  name: "Top",
  components: { Card },
  setup() {
    const { openMenu } = Toggle.openNavigation();
    return { openMenu };
  },
});
</script>
