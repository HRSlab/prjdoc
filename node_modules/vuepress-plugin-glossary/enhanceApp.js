import Term from './components/Term.vue'
import Glossary from './components/Glossary.vue'

export default ({ Vue, options, router, siteData }) => {
  Vue.component('Term', Term)
  Vue.component('Glossary', Glossary)
}