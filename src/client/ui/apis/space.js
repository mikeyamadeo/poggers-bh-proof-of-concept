const num = (n) => typeof n === 'number' && !isNaN(n)
const px = (n) => (num(n) ? n + 'px' : n)

const spaceApi = {
  p: ['padding'],
  pt: ['paddingTop'],
  pr: ['paddingRight'],
  pb: ['paddingBottom'],
  pl: ['paddingLeft'],
  px: ['paddingLeft', 'paddingRight'],
  py: ['paddingTop', 'paddingBottom'],
  m: ['margin'],
  mt: ['marginTop'],
  mr: ['marginRight'],
  mb: ['marginBottom'],
  ml: ['marginLeft'],
  mx: ['marginLeft', 'marginRight'],
  my: ['marginTop', 'marginBottom']
}

const use = (tokens) => {
  const space = ({ ...props }) => {
    const css = Object.keys(props).reduce((css, key) => {
      if (!spaceApi[key]) return css

      const propVal = props[key]
      const val = tokens.space[propVal] || px(propVal)
      const spaceProps = spaceApi[key].reduce(
        (props, propName) => ({
          ...props,
          [propName]: val
        }),
        {}
      )

      return {
        ...css,
        ...spaceProps
      }
    }, {})

    return {
      css
    }
  }
  return space
}

export default use
