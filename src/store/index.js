import { createStore } from 'vuex'
import { cart } from './modules/cart'
import { money } from './modules/money'
import { products } from './modules/products'
import { images } from './modules/images'

export const store = createStore({
  modules: {
    cart,
    money,
    products,
    images
  }
})
