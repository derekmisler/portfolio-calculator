import uuid from 'uuid/v4'

export const createData = ({
  abbr,
  numShares,
  price,
  expectedPercentage
}: {
  abbr: string
  numShares: number
  price: number
  expectedPercentage: number
}) => ({
  id: uuid(),
  abbr,
  numShares,
  price,
  total: price * numShares,
  expectedPercentage
})
