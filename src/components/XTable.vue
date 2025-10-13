<template>
  <div class="x-table" :style="tableStyle">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'XTable',
  props: {
    columns: {
      type: Number,
      default: 2
    },
    gap: {
      type: String,
      default: '1rem'
    }
  },
  computed: {
    tableStyle() {
      return {
        display: 'grid',
        gridTemplateColumns: `repeat(${this.columns}, 1fr)`,
        gap: this.gap
      };
    }
  }
};
</script>

<style scoped>
.x-table {
  width: 100%;
}
</style>
