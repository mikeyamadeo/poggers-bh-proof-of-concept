import { VStack, HStack, Text } from '@client/ui'
import { Close } from '@client/ui/components/icons/'
import Modal from '@client/ui/components/modal'
import Pressable from '@client/components/animations/pressable'
import IncentiveDetails from '@client/ui/components/incentive-details'
import { useWelcomeLanguage } from '@client/components/msg/hooks'
import Message from '@client/ui/components/message'
import {
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  Hourglass as HourglassIcon
} from '@client/ui/components/icons'

const enumToLabel = {
  SUNDAY: 'Sun',
  MONDAY: 'Mon',
  TUESDAY: 'Tue',
  WEDNESDAY: 'Wed',
  THURSDAY: 'Thu',
  FRIDAY: 'Fri',
  SATURDAY: 'Sat'
}

const toStandardHour = (hour24) => hour24 > 12
  ? hour24 - 12
  : hour24

const Main = ({ onRequestClose, broadcast }) => {
  const promo = broadcast?.promo
  return (
    <Modal onRequestClose={onRequestClose} bg='lilac'>
      <VStack gap={3} x bg='white' px={6} pb={6} pt={4} borderRadius={2}>
        <HStack w='100%' space='between' y>
          <HStack gap={3} x py={2} space='around'>
            <HStack gap={2} y>
              <CalendarIcon w={18} />
              <Text>
                {enumToLabel[broadcast.schedule.day]}
              </Text>
            </HStack>
            <Vr />
            <HStack gap={2} y>
              <ClockIcon w={18} />
              <Text>
                {toStandardHour(broadcast.schedule.time.hour)}:{pad(broadcast.schedule.time.minute, 2)} {broadcast.schedule.time.hour > 12 ? 'PM' : 'AM'}
              </Text>
            </HStack>
            {broadcast.promo && (
              <>
                <Vr />
                <HStack gap={2} y>
                  <HourglassIcon w={18} />
                  <Text>
                    {broadcast.promo.expiration.count}d
                  </Text>
                </HStack>
              </>
            )}
          </HStack>

          <Pressable onClick={onRequestClose}>
            <Close />
          </Pressable>
        </HStack>

        {promo && <IncentiveDetails {...promo?.incentive} />}

        <Msg {...broadcast.message} />
      </VStack>
    </Modal>
  )
}
const Vr = () => (
  <HStack h='20px' w='1px' bg='#CBD3DC' />
)

export default Main

const Msg = (message) => {
  const lang = useWelcomeLanguage(message)

  return (
    <Message
      language={lang} attachment={{
        url: message.attachment?.originalUrl
      }}
    />
  )
}

function pad (n, width, z) {
  z = z || '0'
  n = n + ''
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
}
