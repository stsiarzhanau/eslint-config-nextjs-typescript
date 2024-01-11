
'use strict';

/**
 * @rushstack/eslint-patch is used to include plugins as dev dependencies
 * instead of imposing them as peer dependencies
 */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:import/recommended',
    /**
     * It's not necessary to include `plugin:import/react` config here as
     * `plugin:import/typescript` does it's job by adding `eslint-plugin-import`
     * settings that are required to properly handle .tsx files.
     *
     * https://github.com/import-js/eslint-plugin-import/blob/main/config/typescript.js
     */
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:vitest/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
  ],
  /**
   * `parser` option can be omitted because it is already specified in all
   * configs that are shipped with @typescript-eslint/eslint-plugin.
   *
   * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/base.ts
   *
   * Listed here for completeness and explicitness.
   */
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    /**
     * `sourceType: module` option can be omitted because it is already specified in all
     * configs that are shipped with @typescript-eslint/eslint-plugin.
     * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/base.ts
     *
     * Listed here for completeness and explicitness.
     */
    sourceType: 'module',
    /**
     * `jsx: true` option can be omitted because the TypeScript compiler has its
     * own internal handling for known file extensions (`.js`, `.mjs`,`.cjs`,
     * `.jsx`, `.tsx` files are always parsed as if this is `true`). And files
     *  with "unknown" extensions (`.md`, `.vue`) are always parsed as if this
     * is `false` if `parserOptions.project` is provided.
     *
     * https://typescript-eslint.io/packages/parser#ecmafeatures
     *
     * Listed here for completeness and explicitness.
     */
    jsx: true,
  },
  plugins: [
    /**
     * There's no need to include other plugins like `@typescript-eslint/eslint-plugin`
     * here since they are included by adding corressponding configs into `extends`
     * array. `eslint-plugin-simple-import-sort` is added explicitly since it
     * has no corresponding config and needs to be included in `plugins` array
     * to work.
     */
    'simple-import-sort',
  ],
  rules: {
    'react/prop-types': 0,
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
  },
  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
