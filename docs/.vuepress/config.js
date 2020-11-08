const Auth = require('vuepress-auth0'); // Comment This in Dev Mode

module.exports = {
  title: "Project Documentation",
  head: [
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/@primer/css/dist/primer.css' }],
    ["script", { src: "/__/firebase/7.20.0/firebase-app.js" }],
    ["script", { src: "/__/firebase/init.js" }],
  ],

  plugins: [
    ['@vuepress/nprogress'],
    ['vuepress-plugin-reading-time'],
    ['vuepress-plugin-reading-progress'],
    ['@vuepress/back-to-top'],
    ['vuepress-plugin-glossary'],
    [Auth, {
      domain: 'dev-zl1ksw63.eu.auth0.com',                           // Substitute your actual Auth0 domain.  Custom domains should work as well
      redirectUri: 'https://docshrs.netlify.app/callback.html',      // Substitute the callback URL domain in your specific Application Config in the Auth0 portal. Make sure this url ends in `callback.html`
      clientID: 'emmXT3vGp47A7sraT3mogcGulzxpbBpH'                   // Substitute your actual Client Id
    }
    ], /// Comment Auth in Dev Mode */
    [
      'vuepress-plugin-copyright',
      {
        noCopy: true,
        minLength: 2,
        authorName: "© 2012 - 2020 HRS Consulting Group."
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
  ],

  themeConfig: {
    logo: '/logo-hrs.png',
    sidebar: 'auto',
    smoothScroll: true,
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: ' ',
        link: '/',
      },
      {
        text: 'Progetto', link: '/projectsummary',
         meta: {                                             // The meta tag is required to let the plugin know you want to secure this nav route.
          auth: true
      } */
      },
      { text: "proposta Commerciale", link: '/proposal/' },
      { text: 'Specifiche Tecniche', link: '/developers/' },
      { text: 'Contatti', link: '/contactus/' },
      { text: 'Esci', link: 'https://dev-zl1ksw63.eu.auth0.com/v2/logout?returnTo=https://docshrs.netlify.app', target: '_self', rel: false },
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
