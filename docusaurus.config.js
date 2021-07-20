module.exports = {
  title: 'Project CX Documentation',
  tagline: '',
  url: 'https://docs.project-cx.com.au',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'proj-cx', // Usually your GitHub org/user name.
    projectName: 'documentation', // Usually your repo name.
    plugins: [require.resolve('docusaurus-lunr-search')],
    plugins: [
        // ...
        '@aldridged/docusaurus-plugin-lunr'
    ],
    themeConfig: {
    navbar: {
          title: '',
          logo: {
              alt: 'Project-CX logo',
              src: 'img/logo.png',
              href: 'https://project-cx.com.au',
          },
      items: [
          { to: "/", className: 'material-icons', label: 'home', position: 'left' },
          {
              type: 'doc',
              docId: 'gettingStarted/main',
              position: 'left',
              label: 'Getting Started',
          },
          {
              type: 'doc',
              docId: 'features/features-main',
              position: 'left',
              label: 'Features',
          },
          {
              type: 'doc',
              docId: 'api',
              position: 'left',
              label: 'API',
          },
          //{ to: '/blog', label: 'Blog', position: 'left' },
          //{ to: "skype:dominiccollier?call", className: 'material-icons', label: 'headset', position: 'right' },
          { to: "tel: +61294999544", className: 'material-icons', label: 'call', position: 'right' },
          { to: "mailto: help@project-cx.com.au", className: 'material-icons', label: 'mail', position: 'right' },
          //{ to: "https://project-cx.com.au", className: 'material-icons', label: 'forum', position: 'right' },

      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Project CX.`,
    },
    },
    stylesheets: [
        "https://fonts.googleapis.com/icon?family=Material+Icons",
    ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/proj-cx/documentation/blob/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
