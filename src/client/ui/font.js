import { useEffect } from 'react'
import { tokens } from './theme'

const LoadFont = () => {
  useEffect(() => {
    const WebFont = require('webfontloader')
    WebFont.load({
      google: {
        families: Object.values(tokens.fontFamilies).map(font =>
          font.name + (font.weights ? ':' + font.weights.join(',') : '')
        )
      }
    })
  }, [])
  return <div />
}

export default LoadFont
