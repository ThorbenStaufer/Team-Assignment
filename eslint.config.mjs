// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  // Your custom configs here
    rules: {
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        //'@typescript-eslint/no-non-null-assertion': 'warn',
        'no-console': 'warn',
        'no-debugger': 'error',
        //'no-var': 'error',
        //'prefer-const': 'error',
},
})
