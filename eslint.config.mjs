import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Per-file globs + rules (applies after Nuxt generated configs)
  {
    // only apply this config to TypeScript files
    files: ['**/*.{ts,tsx,vue,js}'],
    ignores: ['node_modules/**', '.output/**', 'dist/**','.nuxt/**'],
    rules: {
      // your original choices
      '@typescript-eslint/comma-dangle': 'off',
      'n/prefer-global/process': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'space-before-function-paren': 'off',
      'comma-dangle': 'off',
      'operator-linebreak': 'off',
      'curly': 'off',
      'brace-style': 'off',
    },
  },

  // --- 2) Cypress test files: define test globals (fixes no-undef) ---
  {
    files: ['cypress/**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        before: 'readonly',
        after: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        cy: 'readonly',
        Cypress: 'readonly'    // ADDED Cypress global
      }
    },
    // if you later want to use plugin:cypress recommended rules, you can add an extends here
    rules: {
      // keep Cypress-specific rule tweaks here (if any)
    }
  },

)
