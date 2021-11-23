export const MUTATIONS = {
  ADD_PRODUCT: 'ADD_PRODUCT'
}

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
    },
    totalSpent(state) {
      return state.items.reduce((accum, item) => {
        accum += item.price * item.quantity
        return accum
      }, 0)
    }
  },
  actions: {
    buyProduct({ commit, state, getters, dispatch }, { product, ammount = 0 }) {
      if (ammount < 1) {
        return
      }

      let cartProduct = state.items.find((item) => item.code === product.code)

      if (!cartProduct) {
        cartProduct = {
          code: product.code,
          description: product.description,
          price: product.price,
          quantity: 0
        }
        commit(MUTATIONS.ADD_PRODUCT, cartProduct)
      }

      cartProduct.quantity += ammount
      dispatch('money/updateFromSpent', getters.totalSpent, {
        root: true
      })
    }
  },
  mutations: {
    [MUTATIONS.ADD_PRODUCT](state, cartProduct) {
      state.items.push(cartProduct)
    }
  }
}
