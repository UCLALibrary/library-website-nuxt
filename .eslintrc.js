/* eslint-env node */
module.exports = {
    extends: ["eslint:recommended", "plugin:vue/recommended", "plugin:cypress/recommended"],
    rules: {
        // override/add rules settings here, such as:
        indent: ["error", 4, { SwitchCase: 1 }],
        "vue/html-indent": ["error", 4],
        semi: [2, "never"],
    },
    env: {
        node: true
    }
}
