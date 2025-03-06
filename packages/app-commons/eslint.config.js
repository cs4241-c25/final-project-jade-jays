import defaultConfig from "@repo/eslint-config/index.js"

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignore: ['.index.js'],
    extends: ['@repo/eslint-config/index.js'],
    parserOptions: {
      project: true,
    }
  },
  defaultConfig,
];