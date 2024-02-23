import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://witheslint.github.io',
  base: '/',
  integrations: [
    starlight({
      title: 'WithESLint',
      logo: {
        src: './src/assets/witheslint.svg',
      },
      social: {
        github: 'https://github.com/witheslint/witheslint',
      },
      editLink: {
        baseUrl: 'https://github.com/witheslint/witheslint.github.io/edit/main/docs/',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            { label: 'Introduction', link: '/guides/introduction' },
            { label: 'Getting Started', link: '/guides/getting-started' },
            { label: 'IDE Support', link: '/guides/ide-support' },
            { label: 'Customization', link: '/guides/customization' },
          ],
        },
        {
          label: 'Integrations',
          autogenerate: { directory: 'integrations' },
        },
      ],
      customCss: [
        './src/design/override.css',
      ],
    }),
  ],
})
