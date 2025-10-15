<template>
  <textarea
    :value="modelValue"
    @change="handleChange"
    :readonly="readonly"
    :disabled="disabled"
    :placeholder="placeholder"
  />
</template>

<script setup>
import { watch } from 'vue';

const props = defineProps({
  modelValue: [String],
  readonly: Boolean,
  disabled: Boolean,
  placeholder: String
})

const emit = defineEmits(['update:modelValue']);

function handleChange(event) {
  let value = event.target.value;
  // emit
  emit('update:modelValue', value);
}

watch(() => props.modelValue, (newValue, oldValue) => {
  console.log('[v-textarea]:', oldValue, '->', newValue)
});
</script>

<style scoped>
</style>
