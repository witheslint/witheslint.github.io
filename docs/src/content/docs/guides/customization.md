---
title: Customization
next: false
sidebar:
  order: 4
---

### Reference

<details>
<summary>Type Declarations</summary>

```ts
interface DefineConfigOptions {
  /**
   * `.eslintignore` is no longer supported in Flat config, use `ignores` instead
   */
  ignores?: string[]
  /**
   * Configuration for various features.
   */
  features?: FeaturesConfig
  /**
   * Predefined configurations for common use cases.
   */
  presets?: Preset[]
  /**
   * Additional configurations to extend.
   */
  extends?: Arrayable<FlatConfigItem>
}

interface FeaturesConfig {
  /**
   * Enable stylistic rules.
   *
   * @default true
   */
  stylistic: boolean | StylisticConfig
  /**
   * Enable TypeScript support.
   *
   * @default true
   */
  typescript: boolean
}

interface StylisticConfig {
  /**
   * Indentation level
   * Similar to the `tabWidth` and `useTabs` options in Prettier
   *
   * @default 2
   */
  indent?: 'tab' | number
  /**
   * Quote style
   * Similar to `singleQuote` option in Prettier
   *
   * @default 'single'
   */
  quotes?: 'double' | 'single'
  /**
   * Whether to enable semicolons
   * Similar to `semi` option in Prettier
   *
   * @default false
   */
  semi?: boolean
  /**
   * Enable JSX support
   * @default true
   */
  jsx?: boolean
  /**
   * When to enable arrow parenthesis
   * Similar to `arrowParens` option in Prettier
   *
   * @default false
   */
  arrowParens?: boolean
  /**
   * Which brace style to use
   * @default '1tbs'
   */
  braceStyle?: '1tbs' | 'allman' | 'stroustrup'
  /**
   * Whether to require spaces around braces
   * Similar to `bracketSpacing` option in Prettier
   *
   * @default true
   */
  blockSpacing?: boolean
  /**
   * When to enable prop quoting
   * Similar to `quoteProps` option in Prettier
   *
   * @default 'consistent-as-needed'
   */
  quoteProps?: 'always' | 'as-needed' | 'consistent-as-needed' | 'consistent'
  /**
   * When to enable comma dangles
   * Similar to `trailingComma` option in Prettier
   *
   * @default 'always-multiline'
   */
  commaDangle?: 'always-multiline' | 'always' | 'never' | 'only-multiline'
}
```
</details>

```js
// eslint.config.js
import { defineConfig, presetVue } from 'witheslint'

export default defineConfig({
  // Customize ignored files and directories.
  ignores: [
    '**/node_modules',
    '**/dist',
    '**/.idea',
  ],
  features: {
    // typescript: false, // Do not want to use TypeScript.
    // stylistic: false, // Do not want to use stylistic rules
  },
  presets: [
    presetVue() // In your vue project
  ],
  extends: [
    {
      // Remember to specify the file glob here, otherwise it might cause the vue plugin to handle non-vue files
      files: ['**/*.vue'],
      rules: {
        'vue/operator-linebreak': ['error', 'before'],
      },
    },
    {
      // Without `files`, they are general rules for all files
      rules: {
        'style/semi': ['error', 'never'],
      },
    }
  ]
})
```

### Plugins Renaming

Since flat config requires us to explicitly provide the plugin names (instead of the mandatory convention from npm package name), we renamed some plugins to make the overall scope more consistent and easier to write.

| New Prefix | Original Prefix        | Source Plugin                                                                              |
| ---------- | ---------------------- | ------------------------------------------------------------------------------------------ |
| `import/*` | `i/*`                  | [eslint-plugin-i](https://github.com/un-es/eslint-plugin-i)                                |
| `ts/*`     | `@typescript-eslint/*` | [@typescript-eslint/eslint-plugin](https://typescript-eslint.io)                           |
| `style/*`  | `@stylistic/*`         | [@stylistic/eslint-plugin](https://eslint.style)                                           |
| `sorter/*` | `perfectionist/*`      | [eslint-plugin-perfectionist](https://eslint-plugin-perfectionist.azat.io)                 |
| `-`        | `jsdoc/*`              | [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)                        |
| `-`        | `unicorn/*`            | [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)             |
| `-`        | `unused-imports/*`     | [eslint-plugin-unused-imports](https://github.com/sweepline/eslint-plugin-unused-imports)  |


