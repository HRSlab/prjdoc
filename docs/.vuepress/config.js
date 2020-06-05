const Auth = require('vuepress-auth0'); // Comment This in Dev Mode


module.exports = {
  title: "Project Documentation",
  head: [
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/@primer/css/dist/primer.css' }],
  ],

  plugins: [
    ['@vuepress/nprogress'],
    ['vuepress-plugin-reading-time'],
    ['vuepress-plugin-reading-progress'],
    ['@vuepress/back-to-top'],
    ['vuepress-plugin-glossary'],
    [Auth, {
      domain: 'dev-zl1ksw63.eu.auth0.com',                           // Substitute your actual Auth0 domain.  Custom domains should work as well
      redirectUri: 'http://localhost:8080/callback.html',    // Substitute the callback URL domain in your specific Application Config in the Auth0 portal. Make sure this url ends in `callback.html`
      clientID: 'CXRqgoucCUhzQo7X6Ps4MkvzjTe5Kp4q'            // Substitute your actual Client Id
    }
    ], /// Comment Auth in Dev Mode
    [
      'vuepress-plugin-copyright',
      {
        noCopy: true,
        minLength: 100,
        authorName: "© 2012 - 2020 HRS Consulting Group. All rights reserved."
      },
    ],
    [ 'vuepress-plugin-git-log', {
      additionalProps: {
        subject: '%s',
        authorEmail: '%ae',
        shortHash: '%t',
      },
    } 
  ],
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
        }                                        
      },
      { text: "proposta Commerciale", link: '/proposal/'},
     // { text: 'Funzionalità', link: '/features/' },
      { text: "Storie Utente", link: '/userstory/' },
      { text: "Termini e Condizioni", link: '/termandcond/' },
      { text: 'TechDocs', link: '/developers/' },
      { text: 'LogOut', link: 'https://dev-zl1ksw63.eu.auth0.com/v2/logout' },
    ],
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'));
    }
  },

};