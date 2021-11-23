<template>
  <div class="product-item">
    <img :src="productImg" :alt="'Picture of ' + product.description" />
    <caption>
      {{
        product.description
      }}
    </caption>
    <span class="product-price">{{ price }}</span>
  </div>
</template>
<script>
import { computed, defineComponent } from 'vue'
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
    const productImg = computed(() => {
      return store.state?.images?.map[props.product.img]
    })

    const price = computed(() => {
      return Number(props.product.price).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
      })
    })

    return {
      productImg,
      price
    }
  }
})
</script>
<style lang="scss">
.product-item {
  img {
    display: block;
    margin: 15px auto;
    height: 120px;
    max-width: 100%;
    -o-object-fit: contain;
    object-fit: contain;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  caption {
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    display: block;
  }

  .product-price {
    color: #24c486;
    font-weight: bold;
  }
}
</style>
