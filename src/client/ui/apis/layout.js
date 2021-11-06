const useLayout = () => {
  const layout = ({ vertical, x, y, space }) => {
    const props = {}
    if (vertical) {
      props.direction = 'vertical'
      delete props.vertical

      if (x) {
        props.align = x === 'end'
          ? 'flex-end'
          : 'center'
        delete props.x
      }

      if (y) {
        props.justify = y === 'start'
          ? y
          : y === 'end'
            ? y
            : 'center'

        delete props.y
      }
    } else {
      if (x) {
        props.justify = x === 'end' ? 'flex-end' : 'center'
        delete props.x
      }

      if (y) {
        props.align = y === 'start' ? y : y === 'end' ? 'flex-end' : 'center'
        delete props.y
      }
    }

    if (space) {
      props.justify = 'space-' + space
      delete props.space
    }

    return { props }
  }

  layout.blacklist = ['x', 'y', 'vertical', 'space']
  return layout
}

export default useLayout
