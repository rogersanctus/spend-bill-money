<template>
  <div>
    <button class="btn btn__red" :class="{ 'btn--disabled': isSellDisabled }">
      Sell
    </button>
    <input
      type="number"
      pattern="\d*"
      name="quantity"
      id="quantity"
      aria-describedby="Quantity of product bought"
      :value="quantity"
    />
    <button class="btn btn__green">Buy</button>
  </div>
</template>
<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  setup() {
    const store = useStore()
    const isSellDisabled = computed(() => {
      return false
    })

    const quantity = computed(() => {
      return store.state.cart.quantity
    })

    return {
      isSellDisabled,
      quantity
    }
  }
})
</script>
<style lang="scss" scoped>
div {
  font-size: 20px;
  font-weight: 700;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px 10px;
  margin-top: 25px;

  input {
    text-align: center;
  }
}
</style>
