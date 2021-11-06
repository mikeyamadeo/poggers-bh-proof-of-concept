import { Element, VStack, Text, HStack } from '@client/ui'
import { incentiveTypes } from '@client/api/promos'
import IncentiveDecoration from '@client/components/incentive-decoration'
import Tag from '@client/ui/components/tag'

const methods = [
  {
    id: 'store',
    label: 'In-Store',
    icon: require('@client/ui/components/icons').Store
  },
  {
    id: 'phone',
    label: 'Phone',
    icon: require('@client/ui/components/icons').Phone
  },
  {
    id: 'onlineOrder',
    label: 'Online',
    icon: require('@client/ui/components/icons').Monitor
  }
]

const typeToLabel = {
  [incentiveTypes.push]: 'Incremental Incentive',
  [incentiveTypes.sub]: 'Join Incentive'
}

const IncentiveDetails = (incentive) => {
  const redemptionMethods = incentive.redemptionMethods
  return (

    <VStack w='100%'>
      <VStack w='100%' gap={5} bg='base' borderRadius={2}>
        <VStack w='100%' pt={8} position='relative'>
          <HStack top='10px' left='10px' position='absolute'>
            <Tag>
              {typeToLabel[incentive.type]}
            </Tag>
          </HStack>
          <VStack x>
            <IncentiveDecoration {...incentive} />
          </VStack>
        </VStack>

        <VStack gap={3} w='100%' x py={3}>
          {methods.filter($ => (redemptionMethods[$.id] || {}).allowed).map(($) => {
            const hasOloCode = $.id === 'onlineOrder' && redemptionMethods.onlineOrder.code
            const Icon = $.icon

            return (
              <VStack w='90%' bg='white' key={$.id} borderRadius={2} css={{ overflow: 'hidden' }}>

                <HStack gap={3} y x p={3}>

                  <Icon color='midnight' w={24} />
                  <Text>{$.label}</Text>
                </HStack>
                {hasOloCode && (
                  <Element bg='midnight' css={{ textAlign: 'center' }} py={2}>
                    <Text variant='light'>
                      {redemptionMethods.onlineOrder.code}
                    </Text>
                  </Element>
                )}
              </VStack>

            )
          })}
        </VStack>

      </VStack>

    </VStack>
  )
}

export default IncentiveDetails
