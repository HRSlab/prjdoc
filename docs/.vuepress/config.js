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
    ['vuepress-plugin-glossary'],
    [ Auth, {
          domain: 'dev-zl1ksw63.eu.auth0.com',                           // Substitute your actual Auth0 domain.  Custom domains should work as well
          redirectUri: 'https://docshrs.netlify.app/callback.html',     // Substitute the callback URL domain in your specific Application Config in the Auth0 portal. Make sure this url ends in `callback.html`
          clientID: 'CXRqgoucCUhzQo7X6Ps4MkvzjTe5Kp4q',                 // Substitute your actual Client Id
        }
        ], /// Comment Auth in Dev Mode
  ],


  themeConfig: {
    logo: '/logo-hrs.png',
    sidebar: 'auto',
    smoothScroll: true,
    lastUpdated: 'Last Updated',
    nav: [

      {
        text: 'Progetto', link: '/projectsummary/',
        meta: {
          // auth: true // The meta tag is required to let the plugin know you want to secure this nav route.
        }
      },
      { text: 'Funzionalità', link: '/features/' },
      { text: 'Guida', link: '/scrum/' },
      { text: "Casi d'uso", link: '/usecases/' },
      { text: "User Stories", link: '/userstories/' },
      { text: "Termini e Condizioni", link: '/termandcond/' },
    ],
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-task-lists'));
    }
  },

};