<template>
  <div class="mb-3">
    <label>{{ label }}</label>
    <input
      :type="type"
      class="mt-1"
      :placeholder="placeholder"
      @change="$emit('changeValue', $event.target.value)"
    />
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    type: { type: String, required: true },
    label: { type: String, required: true },
    placeholder: { type: String, required: true },
  },
});
</script>
