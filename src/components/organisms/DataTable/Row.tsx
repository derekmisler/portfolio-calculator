import React, { SFC, memo } from 'react'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import { useDispatch } from 'react-redux'
import { Tr, Td } from 'molecules/Tables'
import { Text } from 'atoms/Typography'
import { ShareTypes } from 'utils/reducers/positions'
import { deletePosition, updatePosition } from 'utils/actions/positions'
import { formatCurrency, formatPercentage } from 'utils/format'
import { Button } from 'atoms/Buttons'

interface BodyProps {
  share: ShareTypes
}

export const Row: SFC<BodyProps> = memo(({ share: s }) => {
  const dispatch = useDispatch()
  const handleDeleteClick = () => dispatch(deletePosition(s.id))
  const handleUpdate = () => dispatch(updatePosition({}))
  return (
    <Tr key={s.id} id={s.id}>
      <Td>{s.abbr}</Td>
      <Td textAlign='right'>
        <Text>{s.numShares}</Text>
      </Td>
      <Td textAlign='right'>
        <Text>{formatCurrency(s.price)}</Text>
      </Td>
      <Td textAlign='right'>
        <Text>{formatCurrency(s.total)}</Text>
      </Td>
      <Td textAlign='right'>
        <Text>{formatPercentage(s.expectedPercentage)}</Text>
      </Td>
      <Td textAlign='right'>
        <Text>{formatPercentage(s.realPercentage)}</Text>
      </Td>
      <Td textAlign='right'>
        <Text>{s.buy || 0}</Text>
      </Td>
      <Td>
        <Button type='button' variant='action' onClick={handleDeleteClick}>
          <CloseRoundedIcon />
        </Button>
      </Td>
    </Tr>
  )
})
