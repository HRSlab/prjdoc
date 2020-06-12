# The CSS

CSS includes:

- [Normalize.css](#normalizecss)
- [main.css](#maincss)

## Normalize.css

In order to make browsers render all elements more consistently and in line with
modern standards, we include Normalize.css — a modern, HTML5-ready alternative
to CSS resets.

As opposed to CSS resets, Normalize.css:

- targets only the styles that need normalizing
- preserves useful browser defaults rather than erasing them
- corrects bugs and common browser inconsistencies
- improves usability with subtle improvements
- doesn't clutter the debugging tools
- has better documentation

For more information about Normalize.css, please refer to its [project
page](https://necolas.github.io/normalize.css/).

## main.css

Several base styles are included that build upon `Normalize.css`. These styles:

- provide basic typography settings that improve text readability
- protect against unwanted `text-shadow` during text highlighting
- tweak the default alignment of some elements (e.g.: `img`, `video`,
  `fieldset`, `textarea`)
- style the prompt that is displayed to users using an outdated browser
- and more...

These styles are included in
[main.css](/developers/maincss.md).
See the [main.css](https://github.com/HRSlab/-prjdoc/blob/master/docs/.vuepress/public/main.css)
