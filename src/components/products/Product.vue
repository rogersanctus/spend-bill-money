<template>
  <div>{{ product }}</div>
  <img :src="productImg" :alt="'Picture of ' + product.description" />
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

    return {
      productImg
    }
  }
})
</script>
