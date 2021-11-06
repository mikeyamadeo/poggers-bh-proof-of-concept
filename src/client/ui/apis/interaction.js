const useInteraction = () => {
  const interaction = ({ cursor }) => {
    const css = {}
    if (cursor) {
      css.cursor = cursor
    }
    return { css }
  }
  interaction.blacklist = ['cursor']
  return interaction
}

export default useInteraction
