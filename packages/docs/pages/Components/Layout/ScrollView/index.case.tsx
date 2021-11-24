import basic from './basic.raw'
import scrollToElement from './scrollToElement.raw'
import scrollTop from './scrollTop.raw'
import watchElement from './watchElement.raw'

export const title = 'ScrollView'
export const glyph = require(`./ScrollView.svg`)
export const ns = 'ScrollViewTypes'
export const cases = [
  {
    label: 'ScrollView',
    code: basic,
  },
  {
    label: 'Scroll top',
    code: scrollTop,
  },
  {
    label: 'Scroll to element',
    code: scrollToElement,
  },
  {
    label: 'Watch element',
    code: watchElement,
  },
]
