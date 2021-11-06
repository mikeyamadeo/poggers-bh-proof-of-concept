import * as React from 'react'
import { Element, HStack, Text, Card, VStack, tokens } from '@client/ui'
import { Check } from '@client/ui/components/icons/'
import AnimateOpen from '@client/components/animations/animate-open'

const Context = React.createContext()
const useTheme = () => React.useContext(Context)

const themes = {
  ppl: {
    tick: {
      fill: tokens.colors.green,
      border: tokens.colors.green
    },
    bookmark: {
      size: '6px',
      fill: tokens.colors.green
    }
  },
  txt: {
    tick: {
      fill: tokens.colors.blue,
      border: tokens.colors.blue
    },
    bookmark: {
      size: '6px',
      fill: tokens.colors.blue
    }
  },
  unselected: {
    tick: {
      fill: tokens.colors.lilac,
      border: '#CBD3DC'
    },
    bookmark: {
      size: '1px',
      fill: 'transparent'
    }
  },
  default: {
    tick: {
      fill: tokens.colors.midnight,
      border: 'transparent'
    },
    bookmark: {
      size: '6px',
      fill: tokens.colors.midnight
    }
  }
}

const shapes = {
  radio: '50%',
  checkbox: '4px'
}
const Tick = ({ border, color, size = '1.25em', shape = 'circle', children }) => (
  <HStack x y bg={color} css={{ border: `1px solid ${border}`, borderRadius: shapes[shape], transition: '.2s' }} minHeight={size} minWidth={size}>
    {children}
  </HStack>
)

const OptionInput = ({ type, label, isSelected, onSelect }) => {
  const style = isSelected
    ? useTheme() || themes.default
    : themes.unselected

  return (
    <HStack y gap={3} cursor='pointer' css={{ flexGrow: 1 }} onClick={onSelect}>
      <Element w={style.bookmark.size} h='100%' bg={style.bookmark.fill} css={{ transition: '.2s' }} />
      <Tick shape={type} border={style.tick.border} color={style.tick.fill}>
        {isSelected && <Check color='white' />}
      </Tick>
      <VStack>
        <Text weight='medium' size={4}>{label}</Text>
      </VStack>
    </HStack>
  )
}

const OptionUi = ({ type, isSelected, onSelect = _ => _, label, append, children }) => {
  return (
    <HStack minHeight='48px' w='100%'>
      <OptionInput type={type} {...{ label, onSelect, isSelected }} />
      {append || children}
    </HStack>
  )
}

const OptionCombo = ({ type, onSelect, isSelected, label, requireAdditionalInput, children }) => {
  return (
    <div>
      <div style={{ cursor: 'pointer' }}>
        <Card
          p={0}
          css={requireAdditionalInput
            ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }
            : {}}
        >
          <OptionUi
            type={type}
            onSelect={onSelect}
            isSelected={isSelected}
            label={label}
          />
        </Card>
      </div>

      {requireAdditionalInput && (
        <AnimateOpen>
          <Element bg='white'>
            {children}
          </Element>
        </AnimateOpen>
      )}
    </div>

  )
}

const Option = {
  Theme: ({ theme = 'default', children }) => {
    return (
      <Context.Provider
        value={themes[theme]}
      >
        {children}
      </Context.Provider>
    )
  },
  Radio: props => (
    <Card p={0}>

      <OptionUi type='radio' {...props} />
    </Card>
  ),
  Checkbox: props => (
    <Card p={0}>
      <OptionUi type='checkbox' {...props} />
    </Card>

  ),
  CheckboxCombo: props => <OptionCombo type='checkbox' {...props} />,
  RadioCombo: props => <OptionCombo type='radio' {...props} />
}

export default Option
