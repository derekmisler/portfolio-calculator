import React, { SFC, memo } from 'react'
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
}

export const DataRow: SFC<BodyProps> = memo(({ share: s, index }) => {
  const dispatch = useDispatch()
  const handleDeleteClick = () => dispatch(deletePosition(s.id))

  return (
    <>
      <Column>
        <Input name={`shares.${index}.abbr`} />
      </Column>
      <Column>
        <Input textAlign='right' name={`shares.${index}.numShares`} />
      </Column>
      <Column>
        <Input type='currency' textAlign='right' name={`shares.${index}.price`} />
      </Column>
      <Column>
        <Text textAlign='right'>{formatCurrency(s.total)}</Text>
      </Column>
      <Column>
        <Input textAlign='right' name={`shares.${index}.expectedPercentage`} />
      </Column>
      <Column>
        <Text textAlign='right'>{formatPercentage(s.realPercentage)}</Text>
      </Column>
      <Column>
        <Text textAlign='right'>{s.buy || 0}</Text>
      </Column>
      <Column alignContent='center' justifyContent='center'>
        <Button type='button' variant='action' onClick={handleDeleteClick}>
          <CloseRoundedIcon />
        </Button>
      </Column>
    </>
  )
})
