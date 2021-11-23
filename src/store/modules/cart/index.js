export const cart = {
  namespaced: true,
  state: () => ({
    items: []
  }),
  getters: {
    quantityForProductCode: (state) => (code) => {
      const product = state.items.find((item) => item.code === code)

      if (product) {
        return product.quantity
      }

      return 0
    }
  },
  actions: {},
  mutations: {}
}
