module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    extraFileExtensions: '.vue',
    ecmaFeatures: {
      jxs: true
    },
    sourceType: 'module'
  },
  plugins: [],
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'linebreak-style': [0, 'error', 'windows']
  }
}
