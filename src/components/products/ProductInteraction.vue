<template>
  <div>
    <button
      class="btn btn__red"
      :class="{ 'btn--disabled': isSellDisabled }"
      @click.prevent="sellProduct()"
    >
      Sell
    </button>
    <input
      type="number"
      pattern="\d*"
      name="quantity"
      min="0"
      id="quantity"
      aria-describedby="Quantity of product bought"
      :value="quantity"
    />
    <button class="btn btn__green" @click.prevent="buyProduct()">Buy</button>
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
  setup(props) {
    const store = useStore()

    const quantity = computed(() => {
      return store.getters['cart/quantityForProductCode'](props.product.code)
    })

    const isSellDisabled = computed(() => {
      return quantity.value === 0
    })

    function buyProduct(ammount = 1) {
      store.dispatch('cart/buyProduct', { product: props.product, ammount })
    }

    function sellProduct() {
      store.dispatch('cart/sellProduct', { product: props.product })
    }

    return {
      isSellDisabled,
      quantity,
      buyProduct,
      sellProduct
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
