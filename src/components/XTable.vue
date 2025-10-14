<template>
  <table class="x-table">
    <tbody>
      <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
        <td v-for="(cell, cellIndex) in row" :key="cellIndex">
          <component :is="cell" />
        </td>
      </tr>
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
    }
  },
  computed: {
    slotComponents() {
      // 슬롯으로 들어온 VNode들을 배열로 추출
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
  width: 100%;
  border-collapse: collapse;
}
.x-table td {
  border: 1px solid #ccc;
  padding: 0.5rem;
}
</style>
