import * as React from 'react'
import { Stack, Text } from '@client/ui'
import Select from '@client/modules/toggle-select'
import ToggleIcon from '@client/components/icons/dropdown-toggle'
import Option from '@client/ui/components/option'

const ToggleSelect = ({
  selected,
  selectedToString,
  from: options,
  children,
  onChange,
  menuAlign = 'center'
}) => {
  const [active, setActive] = React.useState(selected)

  React.useEffect(() => {
    setActive(selected)
  }, [selected])

  const handleSelect = (val) => {
    setActive(val)
    onChange(val)
  }

  return (
    <Select selectedToString={selectedToString} selected={selected} onChange={handleSelect}>

      <Select.Toggle>
        {({ selected, listIsOpen }) =>
          (
            <Stack gap={2} y>
              <Text>{active.name}</Text>
              <ToggleIcon />
            </Stack>
          )}
      </Select.Toggle>

      <Select.List>
        <Stack vertical position='absolute' bg='lilac' p={3} gap={3} mt={6} borderRadius={2} shadow>
          {options.map(($, i) => (
            <Select.Option key={i} value={$.value}>
              {({ isSelected }) => (
                <div style={{ cursor: 'pointer' }}>
                  <Option.Radio isSelected={isSelected} label={$.label} />
                </div>
              )}
            </Select.Option>
          ))}
        </Stack>
      </Select.List>

    </Select>
  )
}

export default ToggleSelect
