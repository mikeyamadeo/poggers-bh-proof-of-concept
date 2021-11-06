import { tokens, Stack, Element, Text } from '@client/ui'
import ToggleState from '@client/modules/toggle'
import { motion } from 'framer-motion'

const Circle = ({ color, size = '1.25em' }) =>
  <Element bg={color} borderRadius='50%' w={size} h={size} css={{ transition: '.25s' }} />

const Toggle = ({
  onToggle = () => ({}),
  onText = 'On',
  offText = 'Off',
  on = true,
  onColor = 'green',
  offColor = 'red'
}) => (
  <ToggleState checked={on} onToggle={onToggle}>
    {isOn => (
      <Stack>
        <Element
          bg='white' px={3} py={2} borderRadius='50px' cursor='pointer'
          css={{ boxShadow: tokens.shadows[2] }}
        >
          <Stack y space='between' gap={2}>
            <Text variant='title'>{isOn ? onText : offText}</Text>
            <Stack
              y
              borderRadius='50px'
              h='20px'
              w='40px'
              bg={isOn ? onColor : offColor}
              css={{
                boxShadow: tokens.shadows[2],
                userSelect: 'none'
              }}
            >
              <motion.div
                animate={isOn ? 'on' : 'off'}
                variants={{
                  off: { x: 3 },
                  on: { x: 21 }
                }}
              >
                <Circle size={4} color='white' />
              </motion.div>
            </Stack>

          </Stack>
        </Element>
      </Stack>
    )}
  </ToggleState>
)

export default Toggle
