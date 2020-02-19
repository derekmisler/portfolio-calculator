import { TotalsTypes, ShareTypes, SharesTypes } from 'utils/reducers/positions'

export const createData = (
  abbr: string,
  numShares: number,
  price: number,
  expectedPercentage: number
) => ({
  abbr,
  numShares,
  price,
  total: price * numShares,
  expectedPercentage
})

export const calculateTotals = (currentTotals: TotalsTypes, currentShares: ShareTypes[]) => {
  let totalPositionValue = 0
  let totalPercentage = 0
  Object.values(currentShares).forEach((share: ShareTypes) => {
    totalPercentage += share.expectedPercentage
    totalPositionValue += share.total
  })

  const availableCash = currentTotals.totalCash - totalPositionValue

  const shares = currentShares
    .map(share => ({
      ...share,
      realPercentage: (share.total / totalPositionValue) * 100
    }))
    .reduce((keyedShares, share) => {
      keyedShares[share.positionId] = share
      return keyedShares
    }, {} as SharesTypes)

  const totals = {
    ...currentTotals,
    totalPositionValue,
    totalPercentage,
    availableCash
  }
  return { totals, shares }
}
