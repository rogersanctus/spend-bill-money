<template>
  <Layout />
</template>

<script>
import { defineComponent } from 'vue'
import Layout from '@/components/layout/Layout.vue'
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    Layout
  },
  setup() {
    // Must be called once
    useStore().dispatch('images/createImagesMap')
  }
})
</script>
