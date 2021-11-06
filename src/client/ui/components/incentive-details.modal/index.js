import { VStack, HStack } from '@client/ui'
import { Close } from '@client/ui/components/icons/'
import Modal from '@client/ui/components/modal'
import Pressable from '@client/components/animations/pressable'
import IncentiveDetails from '@client/ui/components/incentive-details'

const IncentiveDetailsModal = ({ onRequestClose, incentive }) => {
  return (
    <Modal onRequestClose={onRequestClose} bg='lilac'>

      <VStack x bg='white' px={4} pb={5} pt={1} borderRadius={2}>
        <HStack w='100%' h='50px' x='end' y>

          <Pressable onClick={onRequestClose}>
            <Close />
          </Pressable>
        </HStack>
        <IncentiveDetails {...incentive} />

      </VStack>
    </Modal>
  )
}

export default IncentiveDetailsModal
