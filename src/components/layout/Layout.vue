<template>
  <main>
    <header>
      <BillAvatar />
      <div>Spend Bill Gates' Money</div>
    </header>
    <article>
      <MoneyBar />
      <Products />
      <ItemsPreview />
    </article>
  </main>
</template>
<script>
import { defineComponent } from 'vue'
import BillAvatar from './BillAvatar.vue'
import MoneyBar from './MoneyBar.vue'
import Products from '../products/Products.vue'
import ItemsPreview from '../items-preview/ItemsPreview.vue'

export default defineComponent({
  components: {
    BillAvatar,
    MoneyBar,
    Products,
    ItemsPreview
  }
})
</script>
<style lang="scss">
main {
  max-width: 1000px;
  margin: 0 auto;

  header {
    text-align: center;
    font-size: 32px;
    font-weight: 500;
    padding: 30px 20px;
    margin-bottom: 10px;
    line-height: 1.3em;
  }
}
</style>
