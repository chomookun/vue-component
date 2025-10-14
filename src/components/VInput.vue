<template>
  <input
    :id="id"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="x-input"
  />
</template>

<script>
export default {
  name: 'VInput',
  props: {
    modelValue: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: () => `x-input-${Math.random().toString(36).substr(2, 9)}`
    }
  }
}
</script>

<style scoped>
</style>
