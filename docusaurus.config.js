const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'FacilityEngineer\'s SCPF documentation',
  tagline: 'This site contains all public documentation for FacilityEngineer\'s SCPF',
  url: 'https://legislation.scpf.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Fugoist', // Usually your GitHub org/user name.
  projectName: 'legislation', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Fugoist/legislation/edit/master/docs/supreme/conclusion.md',
          routeBasePath: '/'
        },
        blog: {
          path: 'blog',
          editUrl: ({locale, blogDirPath, blogPath}) => {
            return `https://github.com/Fugoist/legislation/edit/master/${blogDirPath}/${blogPath}`;
          },
          postsPerPage: 5,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} FacilityEngineer's Special Containment Procedures Foundation`,
          },
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All our posts',
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
      metadatas: [
        { property: 'og:image', content: 'https://cdn.discordapp.com/attachments/840647045538250809/986412306562965534/NewLogoVantaBlackCropped.png' },
      ],
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true
      },
      navbar: {
        title: 'SCPF',
        logo: {
          alt: 'SCPF Logo',
          src: 'img/scpf.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'supreme/introduction',
            position: 'left',
            label: 'Supreme Guidelines',
          },
          {
            type: 'doc',
            docId: 'foundation_code/intro',
            position: 'left',
            label: 'Foundation Legal Code',
          },
          {
            type: 'doc',
            docId: 'departments/intro',
            position: 'left',
            label: 'Departmental Guidelines',
          },
          {to: 'blog', label: 'Blog', position: 'left'},
          /* {
            type: 'doc',
            docId: 'foundation_code/intro',
            position: 'left',
            label: 'Foundation Code',
          }, */
          {
            href: 'https://www.roblox.com/groups/5647083',
            label: 'Group',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Legislation',
            items: [
              {
                label: 'Legislation',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/Tcd9VgcvYb',
              },
              {
                label: 'Group',
                href: 'https://www.roblox.com/groups/5647083',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Ethics Committee Public Discord',
                href: 'https://discord.gg/QKqBMDTknm',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} FacilityEngineer's Special Containment Procedures Foundation`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
