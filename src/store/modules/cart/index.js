export const MUTATIONS = {
  ADD_PRODUCT: 'ADD_PRODUCT'
}

const SHOP_ACTIONS = {
  BUY: 'buy',
  SELL: 'sell'
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
    removeProduct({ state }, product) {
      const productIndex = state.items.findIndex(
        (item) => item.code === product.code
      )

      if (productIndex !== -1) {
        state.items.splice(productIndex, 1)
      }
    },
    updateProductAmmount(
      { commit, state, getters, dispatch },
      { product, ammount = 1, shopAction = undefined }
    ) {
      let cartProduct = state.items.find((item) => item.code === product.code)

      if (!cartProduct && ammount > 0) {
        cartProduct = {
          code: product.code,
          description: product.description,
          price: product.price,
          quantity: 0
        }
        commit(MUTATIONS.ADD_PRODUCT, cartProduct)
      }

      let updateAmmount = ammount

      if (shopAction === SHOP_ACTIONS.BUY) {
        updateAmmount = cartProduct.quantity + ammount
      } else if (shopAction === SHOP_ACTIONS.SELL) {
        updateAmmount = cartProduct.quantity - ammount

        if (updateAmmount === 0) {
          dispatch('removeProduct', product)
        }
      }

      cartProduct.quantity = updateAmmount
      dispatch('money/updateFromSpent', getters.totalSpent, {
        root: true
      })
    },
    buyProduct({ dispatch }, { product }) {
      dispatch('updateProductAmmount', {
        product,
        shopAction: SHOP_ACTIONS.BUY
      })
    },
    sellProduct({ dispatch }, { product }) {
      dispatch('updateProductAmmount', {
        product,
        shopAction: SHOP_ACTIONS.SELL
      })
    }
  },
  mutations: {
    [MUTATIONS.ADD_PRODUCT](state, cartProduct) {
      state.items.push(cartProduct)
    }
  }
}
