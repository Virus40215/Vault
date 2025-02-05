const pluginJs = require("@eslint/js");
const pluginReact = require("eslint-plugin-react");
const pluginReactHooks = require("eslint-plugin-react-hooks");
const pluginJsxA11y = require("eslint-plugin-jsx-a11y");
const pluginImport = require("eslint-plugin-import");
const pluginPrettier = require("eslint-plugin-prettier");
const globals = require("globals");

/** @type {import('eslint').Linter.Config} */
module.exports = {
  files: ["**/*.{js,jsx,ts,tsx}"],
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    globals: globals.browser,
  },
  plugins: {
    js: pluginJs,
    react: pluginReact,
    "react-hooks": pluginReactHooks,
    "jsx-a11y": pluginJsxA11y,
    import: pluginImport,
    prettier: pluginPrettier,
  },
  rules: {
    ...pluginJs.configs.recommended.rules,
    ...pluginReact.configs.recommended.rules,
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    ...pluginReactHooks.configs.recommended.rules,
    ...pluginJsxA11y.configs.recommended.rules,
    "import/no-unresolved": "error",
    "import/order": ["warn", { groups: [["builtin", "external", "internal"]] }],
    "import/newline-after-import": "warn",
    "prettier/prettier": [
      "error",
      {
        semi: true,
        useTabs: false,
        tabWidth: 2,
        printWidth: 100,
        singleQuote: true,
        trailingComma: "all",
        arrowParens: "always",
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
