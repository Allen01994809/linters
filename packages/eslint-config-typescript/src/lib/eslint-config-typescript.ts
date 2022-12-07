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
    '@allen-packages/eslint-config'
  ],
}
export default configration;
