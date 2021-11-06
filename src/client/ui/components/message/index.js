import * as React from 'react'
import { motion } from 'framer-motion'
import { tokens, VStack, HStack, Text } from '@client/ui'
import AspectImage from '@client/modules/aspect-ratio-image'
import Modal from '@client/ui/components/incentive-details.modal'

const Message = ({ language, attachment, promo }) => {
  const [show, setShow] = React.useState(false)
  const toggle = () => setShow($ => !$)
  const attachmentUrl = attachment?.url

  return (
    <>
      {show && <Modal incentive={promo} onRequestClose={toggle} />}
      <VStack
        gap={3}
        w='100%'
        p={4} css={{
          borderRadius: 2,
          border: `2px solid ${tokens.colors.base}`
        }}
      >

        <Text weight='medium' size={4}>{language.body}</Text>

        {language.redemption &&
          <Text size={3}>{language.redemption}{promo ? <Text variant='link' onClick={toggle}>{language.redemptionUrl}</Text> : language.redemptionUrl}</Text>}

        <Text size={3}>{language.disclaimer}</Text>

        {attachmentUrl && (
          <HStack>
            <HStack css={{ borderRadius: '10px', overflow: 'hidden' }}>
              <AspectImage src={attachmentUrl} maxHeight={250} maxWidth={350}>
                {({ width, height, src }) => (
                  <motion.img
                    src={src}
                    style={{ transformOrigin: 'right bottom' }}
                    animate={{
                      height: [0, height],
                      width: [0, width],
                      opacity: [0, 1]
                    }}
                  />
                )}
              </AspectImage>
            </HStack>
          </HStack>
        )}
      </VStack>
    </>
  )
}

export default Message
