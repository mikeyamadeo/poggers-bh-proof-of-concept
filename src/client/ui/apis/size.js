const useSize = () => {
  const size = ({
    w,
    width,
    h,
    height,
    maxWidth,
    minWidth,
    maxHeight,
    minHeight,
    size
  }) => {
    const css = {}
    if (w || width) {
      css.width = [w || width]
    }

    if (h || height) {
      css.height = [h || height]
    }

    if (maxWidth) {
      css.maxWidth = maxWidth
    }

    if (minWidth) {
      css.minWidth = minWidth
    }

    if (maxHeight) {
      css.maxHeight = maxHeight
    }

    if (minHeight) {
      css.minHeight = minHeight
    }

    if (size) {
      css.width = size
      css.height = size
    }

    return { css }
  }

  return size
}

export default useSize
