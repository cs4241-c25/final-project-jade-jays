import tseslint from 'typescript-eslint'
import defaultConfig from "@repo/eslint-config";

/** @type {import("eslint").Linter.Config} */
export default tseslint.config(defaultConfig);