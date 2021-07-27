module.exports = {
    title: 'Dashnetics Documentation',
    tagline: 'Put yourself in the driver\'s seat',
    url: 'https://docs.dashnetics.com.au',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.png',
    organizationName: 'proj-cx', // Usually your GitHub org/user name.
    projectName: 'documentation', // Usually your repo name.
    themeConfig: {

        colorMode: {
            // "light" | "dark"
            defaultMode: 'light',

            // Hides the switch in the navbar
            // Useful if you want to support a single color mode
            disableSwitch: true,

            // Should we use the prefers-color-scheme media-query,
            // using user system preferences, instead of the hardcoded defaultMode
            respectPrefersColorScheme: false,

            // Dark/light switch icon options
            switchConfig: {
                // Icon for the switch while in dark mode
                darkIcon: '🌙',

                // CSS to apply to dark icon,
                // React inline style object
                // see https://reactjs.org/docs/dom-elements.html#style
                darkIconStyle: {
                    marginLeft: '2px',
                },

                // Unicode icons such as '\u2600' will work
                // Unicode with 5 chars require brackets: '\u{1F602}'
                lightIcon: '\u{1F602}',

                lightIconStyle: {
                    marginLeft: '1px',
                },
            },
        },
        navbar: {
            title: '',
            logo: {
                alt: 'Dashnetics logo',
                src: 'img/logo.png',
                href: 'https://dashnetics.com.au',
            },
            items: [
                { to: "/", className: 'material-icons', label: 'home', position: 'left' },
                {
                    type: 'doc',
                    docId: 'tutorials/tutorials-intro',
                    position: 'left',
                    label: 'Tutorials',
                },
                {
                    type: 'doc',
                    docId: 'manuals/manuals-intro',
                    position: 'left',
                    label: 'Manuals',
                },
                {
                    type: 'doc',
                    docId: 'features/features-intro',
                    position: 'left',
                    label: 'Features',
                },
                {
                    type: 'doc',
                    docId: 'faq',
                    position: 'left',
                    label: 'FAQ',
                },
                //{ to: '/blog', label: 'Blog', position: 'left' },
                //{ to: "skype:dominiccollier?call", className: 'material-icons', label: 'headset', position: 'right' },
                { to: "tel: +61294999544", className: 'material-icons', label: 'call', position: 'right' },
                { to: "mailto: help@dashnetics.com.au", className: 'material-icons', label: 'mail', position: 'right' },
                //{ to: "https://dashnetics.com.au", className: 'material-icons', label: 'forum', position: 'right' },

            ],
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} Dashnetics.`,
        },
  algolia: {
      apiKey: 'b9acb6319c06b2971a85439a0f8c2322',
      indexName: 'docs',
          // Optional: see doc section below
          contextualSearch: false,

          // Optional: see doc section below
          appId: 'UBF3GVI7EP',
          
          // Optional: Algolia search parameters
          searchParameters: {},

          //... other Algolia params
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
