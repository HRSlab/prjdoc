<template>
  <a :title="definition" :class="{'term-not-found': termNotFound, term: true}">{{ displayText }}</a>
</template>

<script>
import { removeTermLink } from './term-tag'
export default {
  name: 'Term',
  props: {
    term: {
      type: String,
      required: true
    },
    show: {
      type: String,
      required: false,
      default: ''
    }
  },
  data () {
    return {
      termNotFound: false
    }
  },
  computed: {
    terms () {
      return this.$site.pages.find(page => page.path === '/GLOSSARY.html').frontmatter.terms
    },
    definition () {
      const termWithSpaces = replaceUnderscoresWithSpaces(this.term)
      const definition = this.terms[termWithSpaces]
      if (definition) return removeTermLink(definition)
      this.termNotFound = true
      return 'Term not found in the glossary'
    },
    displayText () {
      return replaceUnderscoresWithSpaces(this.show ? this.show : this.term)
    }
  }
}

function  replaceUnderscoresWithSpaces(str) {
  return str.split('_').join(' ')
}
</script>
