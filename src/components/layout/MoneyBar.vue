<template>
  <div class="money-bar">{{ money }}</div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { currencyHelper } from '@/helpers/currencyHelper'

export default defineComponent({
  setup() {
    const store = useStore()
    const money = computed(() =>
      currencyHelper.toDollar(store.state.money.ammount)
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
