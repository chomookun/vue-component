<template>
  <input
    :value="modelValue"
    :type="type"
    @change="handleChange"
    :readonly="readonly"
    :disabled="disabled"
    :placeholder="placeholder"
    :checked="type === 'checkbox' ? modelValue === true : undefined"
  />
</template>

<script setup>
import { watch } from 'vue';

const props = defineProps({
  modelValue: [String, Number, Boolean],
  type: {
    type: String,
    default: 'text'
  },
  readonly: Boolean,
  disabled: Boolean,
  placeholder: String
})

const emit = defineEmits(['update:modelValue']);

function handleChange(event) {
  let value = event.target.value;
  let type = event.target.type;
  if (type === 'number') {
    value = value === '' ? null : Number(value);
  }
  if (type === 'checkbox') {
    value = event.target.checked;
  }
  // emit
  emit('update:modelValue', value);
}

watch(() => props.modelValue, (newValue, oldValue) => {
  console.log('[v-input]:', oldValue, '->', newValue)
});
</script>

<style scoped>
</style>
