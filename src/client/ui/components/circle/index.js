import { Stack } from '@client/ui'
const Circle = ({ border, color, size = '1.25em', children }) => (
  <Stack x y bg={color} border={border} borderRadius='50%' minHeight={size} minWidth={size} css={{ transition: '.25s' }}>
    {children}
  </Stack>
)

export default Circle
