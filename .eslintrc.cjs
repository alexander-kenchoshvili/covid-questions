// /* eslint-env node */
// require("@rushstack/eslint-patch/modern-module-resolution");

// module.exports = {
//   root: true,
//   extends: [
//     "plugin:vue/vue3-essential",
//     "eslint:recommended",
//     "@vue/eslint-config-prettier",
//   ],
//   parserOptions: {
//     ecmaVersion: "latest",
//   },
// };

module.exports = {
  env: {
    node: true,
  },
  extends: ["eslint:recommended", "plugin:vue/vue3-recommended", "prettier"],
  rules: {
    // override/add rules settings here, such as:
    // "vue/no-unused-vars": [1, { args: "all", argsIgnorePattern: "^_" }],
    "vue/no-unused-components": "off",
    "vue/no-reserved-component-names": "off",
  },
};
