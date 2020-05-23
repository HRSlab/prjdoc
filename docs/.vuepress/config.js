const Auth = require('vuepress-auth0');

module.exports = {
  plugins: [
    ['vuepress-plugin-glossary'],
    ['@vuepress/active-header-links'],
    ['@vuepress/nprogress'],

    [ Auth, {
      domain: 'dev-zl1ksw63.eu.auth0.com',                     // Substitute your actual Auth0 domain.  Custom domains should work as well
      redirectUri: 'http://localhost:8080/callback.html',     // Substitute the callback URL domain in your specific Application Config in the Auth0 portal. Make sure this url ends in `callback.html`
      clientID: 'CXRqgoucCUhzQo7X6Ps4MkvzjTe5Kp4q',          // Substitute your actual Client Id
    }
    ],
  ],


  themeConfig: {
    logo: '/logo-hrs.png',
    sidebar: 'auto',
    smoothScroll: true,
    nprogress: true,
    lastUpdated: 'Last Updated',
    nav: [
      {
        text: 'home',
        link: '/',
        meta: {
          auth: true // The meta tag is required to let the plugin know you want to secure this nav route.
        }  
      },
      { text: 'Progetto', link: '/ita/projectsummary/' },
      { text: 'Funzionalità', link: '/features/' },
      { text: 'Guida', link: '/scrum/' },
      { text: "Casi d'uso", link: '/usecases/' },
      { text: "Termini e Condizioni", link: '/termandcond/' },
    ],
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'));
    }
  },

};