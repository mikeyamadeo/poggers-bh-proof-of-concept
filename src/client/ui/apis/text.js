const useText = (tokens) => {
  const text = ({ textAlign, textTransform }) => {
    const css = {}
    if (textAlign) {
      css.textAlign = textAlign
    }

    if (textTransform) {
      css.textTransform = textTransform
    }

    return { css }
  }
  text.blacklist = ['textAlign', 'textTransform']
  return text
}

export default useText
