<template>
  <div class="mb-3">
    <button class="btn w-100 mt-1" @click="$emit('submit')">{{ text }}</button>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    text: { type: String, required: true },
  },
});
</script>
