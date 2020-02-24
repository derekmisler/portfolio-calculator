import React, { SFC, memo, ChangeEvent } from 'react'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import { useDispatch } from 'react-redux'
import { Input } from 'molecules/Forms'
import { Column } from 'atoms/Grid'
import { Text } from 'atoms/Typography'
import { ShareTypes } from 'types/positions'
import { deletePosition } from 'utils/actions/positions'
import { formatCurrency, formatPercentage } from 'utils/format'
import { Button } from 'atoms/Buttons'

interface BodyProps {
  share: ShareTypes
  index: number
  onChange: Function
}

export const DataRow: SFC<BodyProps> = memo(({ share: s, index, onChange }) => {
  const dispatch = useDispatch()
  const handleDeleteClick = () => dispatch(deletePosition(s.id))
  const handleChange = (value: { [key: string]: string }) => {
    if (onChange) onChange(value)
  }

  return (
    <>
      <Column>
        <Input
          onChange={handleChange}
          textAlign={['center', 'left']}
          name={`shares.${index}.abbr`}
        />
      </Column>
      <Column>
        <Input
          onChange={handleChange}
          textAlign={['center', 'right']}
          name={`shares.${index}.numShares`}
        />
      </Column>
      <Column>
        <Input
          onChange={handleChange}
          type='currency'
          textAlign={['center', 'right']}
          name={`shares.${index}.price`}
        />
      </Column>
      <Column>
        <Text textAlign={['center', 'right']}>{formatCurrency(s.total)}</Text>
      </Column>
      <Column>
        <Input
          onChange={handleChange}
          textAlign={['center', 'right']}
          name={`shares.${index}.expectedPercentage`}
        />
      </Column>
      <Column>
        <Text textAlign={['center', 'right']}>{formatPercentage(s.realPercentage)}</Text>
      </Column>
      <Column>
        <Text textAlign={['center', 'right']}>{s.buy || 0}</Text>
      </Column>
      <Column justifyContent='center'>
        <Button type='button' variant='action' onClick={handleDeleteClick}>
          <CloseRoundedIcon />
        </Button>
      </Column>
    </>
  )
})
