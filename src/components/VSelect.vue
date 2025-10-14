<template>
  <div class="x-input-wrapper">
    <label v-if="label" :for="id" class="x-input-label">{{ label }}</label>
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
    <span v-if="error" class="x-input-error">{{ error }}</span>
  </div>
</template>

<script>
export default {
  name: 'XInput',
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
.x-input-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
.x-input-label {
  margin-bottom: 0.25rem;
  font-weight: bold;
}
.x-input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.x-input-error {
  margin-top: 0.25rem;
  color: red;
  font-size: 0.875rem;
}
</style>
