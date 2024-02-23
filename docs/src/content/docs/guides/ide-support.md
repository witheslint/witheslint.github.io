---
title: IDE Support
sidebar:
  order: 3
---

### VSCode

- Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Add the following settings to your project setting `.vscode/settings.json`:

```jsonc
{
  // Enable the ESlint flat config support
  "eslint.experimental.useFlatConfig": true,

  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  },

  // Enable eslint for supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    // "astro",
    // "svelte",
    // "vue",
  ]
}
```

### JetBrains IDEs

- Open the Settings dialog
- Go to `Languages & Frameworks -> JavaScript -> Code Quality Tools -> ESLint`
- Select the `Run eslint --fix on save` checkbox.

> Refer to [JetBrains Docs](https://www.jetbrains.com/help/idea/eslint.html#ws_eslint_configure_run_eslint_on_save)
