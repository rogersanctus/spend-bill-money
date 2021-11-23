<template>
  <Product
    v-for="(product, index) in products"
    :key="index"
    :product="product"
  />
</template>
<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import Product from './Product.vue'

export default defineComponent({
  components: {
    Product
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
div {
  content: 'a';
  width: 100%;
}
</style>
