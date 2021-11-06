import { tokens, HStack, Text } from '../../'
import { opacity } from '../../theme/utils'

const Tag = ({ label, children, color = 'blue' }) => {
  return (
    <HStack borderRadius={2} h='35px' px={3} bg={opacity(tokens.colors[color], 0.08)} y>
      <Text color={color}>{label || children}</Text>
    </HStack>
  )
}

export default Tag
