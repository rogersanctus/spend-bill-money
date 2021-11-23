<template>
  <div class="products-container">
    <div
      class="product-wrapper"
      v-for="(product, index) in products"
      :key="index"
    >
      <Product :product="product" />
      <ProductInteraction :product="product" />
    </div>
  </div>
</template>
<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import Product from './Product.vue'
import ProductInteraction from './ProductInteraction.vue'

export default defineComponent({
  components: {
    Product,
    ProductInteraction
  },
  setup() {
    const store = useStore()
    const products = computed(() => store.state.products.items)

    function fetchProducts() {
      return store.dispatch('products/fetchProducts')
    }

    fetchProducts()

    return {
      products
    }
  }
})
</script>
<style lang="scss" scoped>
@import '~@styles/consts.scss';

.products-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px 10px;

  .product-wrapper {
    max-width: 100%;
    background-color: #fff;
    text-align: center;
    font-size: 18px;
    padding: 20px 15px;
    width: 100%;
  }
}

@media only screen and (min-width: $mobile-width-limit) {
  .products-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (min-width: $tablet-width-limit) {
  .products-container {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
