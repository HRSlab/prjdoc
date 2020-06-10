// const Auth = require('vuepress-auth0'); // Comment This in Dev Mode

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
 /*    [Auth, {
      domain: 'dev-zl1ksw63.eu.auth0.com',                           // Substitute your actual Auth0 domain.  Custom domains should work as well
      redirectUri: 'http://localhost:8080/callback.html',    // Substitute the callback URL domain in your specific Application Config in the Auth0 portal. Make sure this url ends in `callback.html`
      clientID: 'CXRqgoucCUhzQo7X6Ps4MkvzjTe5Kp4q'            // Substitute your actual Client Id
    }
    ], /// Comment Auth in Dev Mode */
    [
      'vuepress-plugin-copyright',
      {
        noCopy: true,
        minLength: 100,
        authorName: "© 2012 - 2020 HRS Consulting Group. All rights reserved."
      },
    ],
    [ 'vuepress-plugin-git-log', 
    {
      additionalProps: {
        subject: '%s',
        authorEmail: '%ae',
        authorRelative: '%ar',
        shortDate: '%as',
        shortHash: '%t',
      },
    }, 
  ],
  [
    'gitalk-maker',
    {
      gitalkConfig: {
        clientID: 'b1bd0e08b8af8d2bbf61',
        clientSecret: '92d2eacfbf57d6ebaf30e09b8960f8e62e1fe70e',
        repo: 'com',
        owner: 'hrslab',
        admin: ['SteveVercellin', 'hrslab'],
        // id: location.pathname, // 无法配置默认用 location.pathname
        distractionFreeMode: false, // Facebook-like distraction free mode
      },
    },
  ],
  [ 'flowchart' ]
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
/*         meta: {                                             // The meta tag is required to let the plugin know you want to secure this nav route.
          auth: true
        }     */                                    
      },
      { text: "proposta Commerciale", link: '/proposal/'},
     // { text: 'Funzionalità', link: '/features/' },
      // { text: "Storie Utente", link: '/userstory/' },
      // { text: "Termini e Condizioni", link: '/termandcond/' },
      { text: 'Specifiche Tecniche', link: '/developers/' },
      { text: 'Specifiche Funzionali', link: '#' },
    ],
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'));
    }
  },
};