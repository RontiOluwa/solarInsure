<template>
  <div>
    <img :src="image" />
    <h5>{{ title }}</h5>
    <h4>${{ value }}</h4>
    <p>+ {{ statistic }}</p>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    image: { type: String, required: true },
    title: { type: String, required: true },
    value: { type: String, required: true },
    statistic: { type: String, required: true },
  },
});
</script>
