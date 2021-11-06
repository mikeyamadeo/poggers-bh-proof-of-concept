import { HStack, VStack, Text } from '@client/ui'
import Pressable from '@client/components/animations/pressable'
import { Close, ArrowLeft as Back, ArrowRight as Next } from '@client/ui/components/icons/'
import { DotProgress } from '@client/ui/components/step-form/progress-indicators'

const themes = {
  txt: {
    color: 'blue'
  },
  ppl: {
    color: 'green'
  }
}
const Nav = ({ step, onCancel, submit: Submit, context = 'txt' }) => {
  const left = step.first
    ? {
        action: onCancel,
        Affordance: () => <Close size='18px' />
      }
    : {
        action: step.back,
        Affordance: () => <Back size='25px' />
      }
  const theme = themes[context]
  const next = () => step.next()
  return (
    <HStack space='between' w='100%' y h='70px' px={2}>
      <HStack w='25%'>
        <Pressable onClick={() => left.action()}>
          <span style={{ display: 'inherit', opacity: 0.7 }}>
            <left.Affordance />
          </span>
        </Pressable>
      </HStack>

      <VStack vertical x w='50%' h='42px' space='between' textAlign='center'>
        <Text variant='title'>{step.title}</Text>
        <DotProgress {...step} color={theme.color} />
      </VStack>

      <HStack w='25%' x='end' onClick={next} cursor='pointer'>
        {!step.last &&
              step.isComplete && (
                <Pressable>
                  <span style={{ display: 'inherit', opacity: 0.7 }}>
                    <Next size='25px' />
                  </span>
                </Pressable>
        )}
        {step.last && Submit && step.isComplete && <Submit />}
      </HStack>
    </HStack>
  )
}

export default Nav
