import { Stack, Element, Text } from '@client/ui'

const DotProgress = ({ color = 'green', ...step }) => {
  return (
    <Stack gap={2} y>

      {new Array(step.total).fill(0).map((_, i) => {
        const isCurrent = i === step.index
        const config = isCurrent
          ? { color, size: 3 }
          : { color: 'grey', size: 2 }
        return <Circle key={i} size={config.size} color={config.color} />
      }

      )}
    </Stack>
  )
}

const NumberProgress = (step) => {
  return (
    <Text variant='subtle'>{step.current}/{step.total}</Text>
  )
}

const Circle = ({ color, size = '1.25em' }) =>
  <Element bg={color} borderRadius='50%' w={size} h={size} css={{ transition: '.25s' }} />

export { DotProgress, NumberProgress }
