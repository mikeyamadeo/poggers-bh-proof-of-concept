import { Stack, Text } from '@client/ui'

const Bg = ({ children, onClick, isActive }) => {
  return (
    <Stack
      w={80}
      x
      p={2}
      onClick={onClick}
      borderRadius={2}
      cursor='pointer'
      bg={isActive ? 'lilac' : 'transparent'}
      css={{ transition: '.5s' }}
    >
      {children}
    </Stack>
  )
}

const Label = ({ isActive, children }) => (
  <Text
    size={4}
    weight={isActive ? 'medium' : 'regular'}
    color={isActive ? 'midnight' : 'rgba(0, 0, 0, 0.5)'}
    css={{ transition: '.25s' }}
  >
    {children}
  </Text>
)

const Tab = ({ isActive, label, onClick }) => {
  return (
    <Bg {...{ isActive, onClick }}>
      <Label isActive={isActive}>
        {label}
      </Label>
    </Bg>
  )
}

Tab.Bg = Bg
Tab.Label = Label

export default Tab
