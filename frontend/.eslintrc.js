module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended", 
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: true, 
        singleQuote: false, 
        tabWidth: 2, 
        trailingComma: "es5", 
      },
    ],
    "no-console": "warn", 
  },
};
