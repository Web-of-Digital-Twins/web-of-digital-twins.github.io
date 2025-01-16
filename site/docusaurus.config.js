// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'HWoDT Framework',
  tagline: 'A framework for interoperable ecosystems of Digital Twins',
  favicon: 'img/hwodt_logo.svg',

  // Set the production url of your site here
  url: 'https://web-of-digital-twins.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Web-of-Digital-Twins', // Usually your GitHub org/user name.
  projectName: 'web-of-digital-twins.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Web-of-Digital-Twins/web-of-digital-twins.github.io/tree/main/site',
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/hwodt_logo.svg',
      navbar: {
        title: 'HWoDT Framework',
        // logo: {
        //   alt: 'Hypermedia-based Web of Digital Twins Logo',
        //   src: 'img/hwodt_logo.svg',
        // },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/academia', label: 'Publications', position: 'left'},
          {
            type: 'dropdown',
            label: 'Code APIs',
            position: 'left',
            items: [
                {
                  label: 'wodt platform',
                  href: 'https://web-of-digital-twins.github.io/wodt-platform/documentation/code-doc/',
                },
                {
                  label: 'adt adapter',
                  href: 'https://web-of-digital-twins.github.io/azuredt-wodt-adapter/documentation/code-doc/',
                },
                {
                  label: 'wldt adapter',
                  href: 'https://web-of-digital-twins.github.io/wldt-wodt-adapter/documentation/code-doc/',
                }
            ],
          },
          {
            type: 'dropdown',
            label: 'Swagger',
            position: 'left',
            items: [
                {
                  label: 'wodt platform',
                  href: 'https://web-of-digital-twins.github.io/wodt-platform/documentation/openapi-doc/',
                },
                {
                  label: 'adt adapter',
                  href: 'https://web-of-digital-twins.github.io/azuredt-wodt-adapter/documentation/openapi-doc/',
                },
                {
                  label: 'wldt adapter',
                  href: 'https://web-of-digital-twins.github.io/wldt-wodt-adapter/documentation/openapi-doc/',
                }
            ],
          },
          {
            href: 'https://github.com/Web-of-Digital-Twins',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Overview',
                to: '/docs/overview',
              },
            ],
          },
          {
            title: 'For Academia',
            items: [
              {
                label: 'Publications',
                to: '/academia',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub Organization',
                href: 'https://github.com/Web-of-Digital-Twins',
              },
              {
                label: 'Authors',
                href: '/authors',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Web of Digital Twins, Org. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
