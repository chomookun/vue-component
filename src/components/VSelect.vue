<template>
  <select
    :value="modelValue"
    @change="handleChange"
    :readonly="readonly"
    :disabled="disabled"
    >
    <slot/>
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option[optionValueProperty]"
    >
      {{ option[optionTextProperty] }}
    </option>
  </select>
</template>

<script setup>
import { watch } from 'vue'

const props = defineProps({
  modelValue: [String, Number],
  readonly: Boolean,
  disabled: Boolean,
  options: {
    type: Array,
    required: false,
    default: () => []
  },
  optionValueProperty: {
    type: String,
    default: 'value'
  },
  optionTextProperty: {
    type: String,
    default: 'text'
  }
})

const emit = defineEmits(['update:modelValue', 'update:options'])

function handleChange(event) {
  let value = event.target.value;
  emit('update:modelValue', value);
}

watch(() => props.modelValue, (newValue, oldValue) => {
  console.log('[v-select]:', oldValue, '->', newValue)
})
</script>

<style scoped>
</style>
