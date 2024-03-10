const moment = require('moment');

module.exports = {
    title: "Reinnovame",
    head: [
        ['link', { rel: 'stylesheet', href: 'https://unpkg.com/@primer/css@^16.0.0/dist/primer.css' }],
        ["script", { src: "https://cdn.auth0.com/js/auth0-spa-js/1.13/auth0-spa-js.production.js" }]
    ],
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => {
                    // Don't forget to install moment yourself
                    const moment = require('moment')
                    moment.locale(lang)
                    return moment(timestamp).fromNow()
                }
            }
        ],
        ['@vuepress/nprogress'],
        ['vuepress-plugin-reading-time'],
        ['vuepress-plugin-reading-progress'],
        ['@vuepress/back-to-top'],
        ['vuepress-plugin-glossary'],
        [
            'vuepress-plugin-copyright',
            {
                noCopy: true,
                minLength: 2,
                authorName: "© 2012 - 2021 HRS Consulting Group."
            },
        ],
        ['vuepress-plugin-git-log',
            {
                additionalProps: {
                    subject: '%s',
                    authorEmail: '%ae',
                    authorRelative: '%ar',
                    dateShort: '%ad',
                    shortHash: '%t',
                },
            },
        ],
        ['flowchart'],
        ['vuepress-plugin-chart'],
        ['vuepress-plugin-goatcounter',
            {
                user: 'reinnovame'
            },
        ],
        ['vuepress-plugin-mermaidjs'],
    ],

    themeConfig: {
        logo: '/logo-hrs.png',
        sidebar: 'auto',
        smoothScroll: true,
        lastUpdated: 'Last Updated',
        nav: [{
                text: ' ',
                link: '/index/',
            },
            {
                text: 'Dashboard',
                link: '/Dashboard/',
            },
            {
                text: "proposta Commerciale",
                link: '/proposal/'
            },
            { text: "Prestazioni", link: '/developers/' },
            { text: "Analisi Tecnica", link: '/sonar/' },
            { text: "Contatti", link: '/contactus/' },
            { text: "Esci", link: 'https://dev-zl1ksw63.eu.auth0.com/v2/logout?returnTo=https://reinnovame.hrslab.com', target: '_self', rel: false },
        ],
    },
    markdown: {
        extendMarkdown: md => {
            md.use(require('markdown-it-task-lists'));
        },

        externalLinks: {
            target: '_self',
            rel: ''
        },
    },
};