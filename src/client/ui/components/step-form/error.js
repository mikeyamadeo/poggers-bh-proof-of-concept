import { HStack, Text } from '@client/ui'

import AnimateOpen from '@client/components/animations/animate-open'

const Error = ({ copy }) => {
  return copy
    ? (
      <AnimateOpen>
        <HStack x py={3}>
          <Text weight='medium' variant='danger'>{copy}</Text>
        </HStack>
      </AnimateOpen>
      )
    : null
}

export default Error
