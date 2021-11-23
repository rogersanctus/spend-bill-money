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
      @input="updateProductAmmount"
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

    function buyProduct() {
      store.dispatch('cart/buyProduct', { product: props.product })
    }

    function sellProduct() {
      if (isSellDisabled.value) {
        return
      }

      store.dispatch('cart/sellProduct', { product: props.product })
    }

    function updateProductAmmount({ target }) {
      let { value } = target

      if (!value || value < 0) {
        value = 0
      }

      store.dispatch('cart/updateProductAmmount', {
        product: props.product,
        ammount: parseInt(value)
      })
    }

    return {
      isSellDisabled,
      quantity,
      buyProduct,
      sellProduct,
      updateProductAmmount
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
