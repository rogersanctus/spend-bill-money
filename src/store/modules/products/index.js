import productsRaw from '@/assets/products.json'

export const MUTATIONS = {
  SET_PRODUCTS: 'SET_PRODUCTS'
}

export const products = {
  namespaced: true,
  state: () => ({
    items: []
  }),
  getters: {},
  actions: {
    fetchProducts({ commit }) {
      commit(MUTATIONS.SET_PRODUCTS, productsRaw)
    }
  },
  mutations: {
    [MUTATIONS.SET_PRODUCTS](state, products_list) {
      // Inject fake product codes
      products_list.forEach((product, index) => (product.code = index))

      state.items = products_list
    }
  }
}
