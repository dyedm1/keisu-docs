// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Keisu Docs',
  tagline: 'Documentation for private APIs offered by Keisu Analytics',
  url: 'https://docs.keisu.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'Keisu Analytics', // Usually your GitHub org/user name.
  projectName: 'keisu-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.

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
        title: 'Keisu',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon.png',
        },
        items: [
          {
            href:'/',
            position: 'left',
            label: 'Block API(soon)',

          },

          {
            href:'/',
            position: 'left',
            label: 'Marketplace API(soon)',
          },
          {
            href: 'https://playground.open-rpc.org/?schemaUrl=https://raw.githubusercontent.com/etclabscore/ethereum-json-rpc-specification/master/openrpc.json&uiSchema%5BappBar%5D%5Bui:input%5D=false&uiSchema%5BappBar%5D%5Bui:title%5D=Ethereum%20JSON-RPC%20API/',
            label: 'Hypernode JSON-RPC spec',
            position: 'left',
          },
          {
            href: 'https://graphql-docs.keisu.io',
            label: 'GraphQL Docs',
            position: 'left',
          },
          {
            href: 'https://keisu.io/app',
            label: 'Back to Keisu',
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
                label: 'Block(coming soon)',
                to: '/',
              },
              {
                label: 'Marketplace API(coming soon)',
                to: '/',
              }
            ],
          },
          {
            title: 'Community',
            items: [

              {
                label: 'Discord',
                href: 'https://discord.gg/ThgV2vpasd',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/keisuio',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GraphQL Docs',
                to: 'https://graphql-docs.keisu.io',
              },
              {
                label: 'Back to Keisu',
                href: 'https://keisu.io/app',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Keisu Analytics LLC. `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
