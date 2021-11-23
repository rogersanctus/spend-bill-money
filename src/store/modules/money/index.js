import { MUTATIONS } from './mutationTypes'
const BILL_MONEY = 100000000000

export const money = {
  namespaced: true,
  state: () => ({
    ammount: BILL_MONEY
  }),
  getters: {},
  actions: {
    updateFromSpent({ commit }, spentAmmount) {
      commit(MUTATIONS.SET_MONEY, BILL_MONEY - spentAmmount)
    }
  },
  mutations: {
    [MUTATIONS.SET_MONEY](state, ammount) {
      state.ammount = ammount
    }
  }
}
