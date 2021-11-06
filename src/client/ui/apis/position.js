const usePosition = () => {
  const color = ({ position, top, right, bottom, left }) => {
    const css = {}
    if (position) {
      css.position = position
    }
    if (top !== undefined) {
      css.top = top
    }
    if (right !== undefined) {
      css.right = right
    }
    if (bottom !== undefined) {
      css.bottom = bottom
    }
    if (left !== undefined) {
      css.left = left
    }
    return { css }
  }
  return color
}

export default usePosition
