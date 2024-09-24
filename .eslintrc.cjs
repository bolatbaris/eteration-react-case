module.exports = {
  ignorePatterns: [
    "node_modules",
    ".eslintrc.js",
    ".vscode",
    ".prettierrc",
    ".prettierignore",
    ".eslintcache",
    "docs",
    "typedoc.json",
    "./dist",
    "dist",
    "vite.config.ts"
  ],
  extends: [
    "prettier",
    "eslint:recommended",
    "airbnb",
    "airbnb/hooks",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-typescript",
    "plugin:xss/recommended",
    "plugin:security/recommended-legacy",
    "eslint:recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended"
  ],

  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    "prettier",
    "@typescript-eslint",
    "pure",
    "immutable",
    "no-secrets",
    "react",
    "react-refresh"
  ],
  root: true,
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["@pages", "./src/pages"],
          ["@constants", "./src/constants"],
          ["@layouts", "./src/layouts"],
          ["@components", "./src/components"],
          ["@contexts", "./src/contexts"],
          ["@api", "./src/api"],
          ["@hooks", "./src/hooks"],
          ["@models", "./src/models"],
          ["@stores", "./src/stores"]
        ],
        extensions: [".ts", ".js", ".jsx", ".json"]
      }
    }
  },
  overrides: [
    {
      extends: ["plugin:@typescript-eslint/disable-type-checked"],
      files: ["./**/*.js"]
    }
  ],
  rules: {
    "@typescript-eslint/indent": "off",
    "@stylistic/ts/indent": "off",
    "react-refresh/only-export-components": "warn",
    semi: ["error", "never"],
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "no-secrets/no-secrets": "error",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/quotes": ["error", "double"],
    "import/prefer-default-export": "off",
    "@typescript-eslint/consistent-type-imports": "error",
    "react/require-extension": "off",
    "react/react-in-jsx-scope": "off",
    "no-underscore-dangle": "off",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] }
    ],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
    ],
    "no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
    ],
    "react/jsx-sort-props": [
      "warn",
      {
        callbacksLast: true,
        shorthandFirst: false,
        shorthandLast: true,
        ignoreCase: true,
        noSortAlphabetically: false
      }
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          ["parent", "sibling", "index"],
          "type"
        ],
        pathGroups: [
          {
            pattern: "../models/**",
            group: "internal",
            position: "after"
          }
        ],
        "newlines-between": "always"
      }
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        modifiers: ["unused"],
        format: ["strictCamelCase"],
        leadingUnderscore: "require"
      }
    ],
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/semi": "off",
    "no-multi-spaces": ["error"],
    "react-hooks/exhaustive-deps": "error",
    "react/jsx-no-bind": "off",
    "no-restricted-syntax": ["off", "ForOfStatement"],
    "react/require-default-props": "off",
    "no-undef": "off",
    "react/destructuring-assignment": "off",
    "import/no-cycle": "off"
  }
}
