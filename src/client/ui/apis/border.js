const useBorder = (tokens) => {
  const colorFromToken = (str) => tokens.colors[str] || str
  const border = ({
    border,
    borderColor,
    borderRadius: br,
    borderTop,
    borderRight,
    borderBottom,
    borderLeft
  }) => {
    const css = {}
    if (border) {
      css.border = border
      return css
    }
    if (borderTop) {
      css.borderTop = borderTop
    }
    if (borderRight) {
      css.borderRight = borderRight
    }
    if (borderBottom) {
      css.borderBottom = borderBottom
    }
    if (borderLeft) {
      css.borderLeft = borderLeft
    }

    if (br) {
      css.borderRadius = tokens.radii[br] || br
    }

    if (borderColor) {
      css.border = `1px solid ${colorFromToken(borderColor)}`
    }

    return { css }
  }
  return border
}

export default useBorder
