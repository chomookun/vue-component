<template>
  <table class="x-table">
    <tbody class="x-row" v-for="(row, rowIndex) in rows" :key="rowIndex">
      <div class="x-cell" v-for="(cell, cellIndex) in row" :key="cellIndex">
        <component :is="cell" />
      </div>
    </tbody>
  </table>
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
    slotComponents() {
      // 슬롯 요소를 배열로 추출
      return this.$slots.default ? this.$slots.default().filter(v => v.type) : []
    },
    rows() {
      const result = []
      const items = this.slotComponents
      for (let i = 0; i < items.length; i += this.columns) {
        result.push(items.slice(i, i + this.columns))
      }
      return result
    }
  }
}
</script>

<style scoped>
.x-table {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.x-row {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(0, 1fr));
  gap: 1rem;
}
.x-cell {
  border: 1px solid #ccc;
  padding: 0.5rem;
}
</style>