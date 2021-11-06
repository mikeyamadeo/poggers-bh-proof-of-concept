import * as React from 'react'
import * as ui from 'react-ui'
import { tokens } from './theme/bytes'
import useApis from './apis'
const apis = useApis(tokens)

const shadowApiConfig = {
  fn: () => {
    const shadow = ({ shadow }) => {
      const css = {}
      if (shadow) {
        css.filter = 'drop-shadow(0.1rem .1rem 0.15rem rgba(0, 0, 0, 0.15))'
      }

      return { css }
    }

    return shadow
  },
  name: 'shadow'
}

const common = [
  'space',
  'size',
  'color',
  'border',
  'text',
  'position',
  'interaction',
  shadowApiConfig
]

const useCommon = apis.use(common)
const useLayout = apis.use([...common, 'layout'])

const Element = useCommon(ui.Element)
const Grid = useCommon(ui.Grid)
const Column = useCommon(ui.Column)
const Row = useCommon(ui.Row)
const Card = useCommon(ui.Card)
const Stack = useLayout(ui.Stack)
const HStack = Stack
const VStack = (props) => <Stack {...props} vertical />

const Textarea = React.forwardRef((props, ref) => <ui.Textarea {...props} ref={ref} />)
const Input = React.forwardRef((props, ref) => <ui.Input {...props} ref={ref} />)

export * from 'react-ui'
export {
  tokens,
  Card,
  Column,
  Element,
  Grid,
  Input,
  Row,
  Stack,
  HStack,
  VStack,
  Textarea
}
