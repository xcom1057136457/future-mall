import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  rules: {
    'node/prefer-global/process': 'off',
  },
})
