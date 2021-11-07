/// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Pisteiro',
  tagline: 'Pisteiro',
  url: 'https://pisteiro.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Pisteiro', // Usually your GitHub org/user name.
  projectName: 'docs-pisteiro', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: '/',          
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Pisteiro/docs-pisteiro',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '  PISTEIRO',
        logo: {
          alt: 'Pisteiro Logo',
          src: 'img/logo-pisteiro.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'my-home-doc',
            position: 'left',
            label: 'WiKi',
          },
          {
            href: 'https://github.com/Pisteiro/docs-pisteiro',
            label: 'GitHub',
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
                label: 'WiKi',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Pisteiro',
                href: 'https://www.pisteiro.com/',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Pisteiro. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;