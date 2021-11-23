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
      state.items = products_list
    }
  }
}
