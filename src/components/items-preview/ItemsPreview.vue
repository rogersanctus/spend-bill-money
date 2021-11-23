<template>
  <div class="cart-items-preview" v-if="cartItems.length > 0">
    <caption>
      Your Receipt
    </caption>
    <div class="cart-item" v-for="(cartItem, index) in cartItems" :key="index">
      <div class="cart-item-name">{{ cartItem.description }}</div>
      <div class="cart-item-quantity">x{{ cartItem.quantity }}</div>
      <div class="cart-item-price">{{ cartItem.totalPrice }}</div>
    </div>
    <div class="cart-total">
      <span>Total</span>
      <span>{{ cartTotal }}</span>
    </div>
  </div>
</template>
<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import numeral from 'numeral'
import { currencyHelper } from '@/helpers/currencyHelper'

export default defineComponent({
  setup() {
    const store = useStore()
    const cartItems = computed(() => {
      return store.state.cart.items.map((cartItem) => {
        const totalPriceNumeral = numeral(cartItem.price * cartItem.quantity)

        return {
          ...cartItem,
          totalPrice: totalPriceNumeral.format('$0.0a')
        }
      })
    })

    const cartTotal = computed(() =>
      currencyHelper.toDollar(store.getters['cart/totalSpent'])
    )

    return {
      cartItems,
      cartTotal
    }
  }
})
</script>
<style lang="scss" scoped>
.cart-items-preview {
  max-width: 100%;
  font-size: 18px;
  padding: 15px 15px 30px;
  margin-top: 10px;

  caption {
    display: block;
    font-size: 28px;
    padding: 15px 15px 25px;
    font-weight: 700;
    width: 100%;
  }

  .cart-item {
    max-width: 290px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    display: grid;
    grid-gap: 10px 0;
    font-size: 18px;
    grid-template-columns: 170px 45px 75px;

    .cart-item-name {
      text-align: left;
      text-overflow: ellipsis;
    }

    .cart-item-quantity {
      text-align: left;
    }

    .cart-item-price {
      color: #24c486;
      text-align: right;
      font-weight: bold;
    }
  }

  .cart-total {
    font-weight: 700;
    max-width: 300px;
    border-top: 1px solid #333;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    padding-top: 10px;
    display: flex;
    justify-content: space-between;

    span {
      text-transform: uppercase;

      &:last-child {
        color: #24c486;
        text-align: right;
      }
    }
  }
}
</style>
