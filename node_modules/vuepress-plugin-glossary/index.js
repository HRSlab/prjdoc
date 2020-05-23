const path = require('path')

module.exports = {
  enhanceAppFiles: path.resolve(__dirname, 'enhanceApp.js'),
  extendMarkdown: md => {
    const Plugin = require('markdown-it-regexp')
    const patterns = require('./components/patterns.js')
    for (const pattern of patterns) {
      md.use(Plugin(pattern.regex , pattern.modifier))
    }
  }
}