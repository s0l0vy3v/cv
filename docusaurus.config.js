// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  // site params
  title: "Andrei Solovev",
  tagline: 'Currently employed as Delivery Manager @ Samokat.tech',
  //favicon: 'img/favicon.ico',
  url: 'https://s0l0vy3v.github.io',
  baseUrl: '/cv/',
  // deployment
  organizationName: 's0l0vy3v',
  projectName: 'cv',
  deploymentBranch: 'gh-pages',
  // site behavior
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  trailingSlash: false,
  noIndex: true,
  // localization
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Andrei Solovev | Delivery Manager @ Samokat.tech',
        items: [
          {
            type: 'dropdown',
            label: 'Contact Me',
            position: 'left',
            items: [
              {
                href: 'https://linkedin.com/in/andreisolovev',
                label: 'LinkedIn',
              },
              {
                href: 'https://t.me/andreisolovyev',
                label: 'Telegram',
              },
                  ],
            },
          ],
        },
      prism: {
        defaultLanguage: 'py',
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
