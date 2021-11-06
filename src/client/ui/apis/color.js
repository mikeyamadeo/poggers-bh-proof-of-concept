const useColor = (tokens) => {
  const colorFromToken = (str) => tokens.colors[str] || str
  const color = ({ bg, color }) => {
    const css = {}
    if (bg) {
      css.background = colorFromToken(bg)
    }

    if (color) {
      css.color = colorFromToken(color)
    }

    return { css }
  }
  return color
}

export default useColor
