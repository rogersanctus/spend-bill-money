const imagesContext = require.context(
  '@/assets/images/',
  true,
  /\.jpg$/,
  'sync'
)

export const MUTATIONS = {
  SET_IMAGES_MAP: 'SET_IMAGES_MAP'
}

export const images = {
  namespaced: true,
  state: () => ({
    map: {}
  }),
  getters: {},
  actions: {
    createImagesMap({ commit }) {
      const imagesMap = imagesContext.keys().reduce((accum, filename) => {
        const imageData = imagesContext(filename)
        const imageName = filename.split('/').pop()

        if (imageName) {
          accum[imageName] = imageData
          return accum
        }
      }, {})

      commit(MUTATIONS.SET_IMAGES_MAP, imagesMap)
    }
  },
  mutations: {
    [MUTATIONS.SET_IMAGES_MAP](state, imagesMap) {
      state.map = imagesMap
    }
  }
}
