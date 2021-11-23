<template>
  <div class="money-bar">{{ money }}</div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const money = computed(() =>
      Number(store.state.money.ammount || 0).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
      })
    )

    return {
      money
    }
  }
})
</script>
<style lang="scss" scoped>
.money-bar {
  position: sticky;
  top: 0;
  background: linear-gradient(180deg, #2ecc71, #1abc9c);
  padding: 20px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  font-size: 32px;
}
</style>
