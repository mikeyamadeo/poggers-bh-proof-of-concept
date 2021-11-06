import { VStack } from '@client/ui'
import Overlay from '../overlay'

const Main = ({ isOpen, onRequestClose, children, bg = 'white' }) => {
  return (
    <Overlay onRequestClose={onRequestClose}>
      <VStack
        position='fixed'
        m='2% auto'
        left={0}
        right={0}
        bg={bg}
        maxWidth='400px'
        maxHeight='calc(100vh - 2%)'
        borderRadius='2'
        css={{ overflowY: 'scroll' }}
      >
        {children}
      </VStack>
    </Overlay>
  )
}

export default Main
