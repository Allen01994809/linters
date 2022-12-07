const configration = {
  env: {
    browser: true,
    node: true
  },
  plugins: [
    '@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    './rule.json'
  ]
}
export default configration;
