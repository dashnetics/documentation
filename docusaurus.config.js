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
        navbar: {
            title: '',
            logo: {
                alt: 'Dashnetics logo',
                src: 'img/logo.png',
                href: 'https://docs.dashnetics.com.au',
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
                { to: "mailto: help@Dashnetics.com.au", className: 'material-icons', label: 'mail', position: 'right' },
                //{ to: "https://dashnetics.com.au", className: 'material-icons', label: 'forum', position: 'right' },

            ],
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} Dashnetics.`,
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
