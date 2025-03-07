import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import prettier from "eslint-config-prettier"

export default tseslint.config(
    {
        rules:{
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": "off"
        }
    },
    eslint.configs.recommended,
    tseslint.configs.recommended,
    prettier,
);