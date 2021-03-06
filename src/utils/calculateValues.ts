import uuid from 'uuid/v4'
import { ShareTypes, SharesTypes } from 'types/positions'

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

export const calculateTotals = (currentShares: ShareTypes[]) => {
  console.log('----------')
  console.log('currentShares', currentShares)
  console.log('^^^^^^^^^^')
  return currentShares.reduce(
    (acc, share: ShareTypes) => {
      acc.totalPercentage += Number(share.expectedPercentage)
      acc.totalPositionValue += Number(share.total)
      return acc
    },
    { totalPercentage: 0, totalPositionValue: 0 }
  )
}

export const calculateavailableCash = (totalPositionValue: number, totalCash: number) =>
  totalCash - totalPositionValue

export const calculateShareValues = (currentShares: ShareTypes[], totalPositionValue: number) =>
  currentShares.map(share => {
    share.total = share.price * share.numShares
    share.realPercentage = (share.total / (totalPositionValue || 1)) * 100
    share.buy = Math.floor((totalPositionValue / share.expectedPercentage - share.total) / share.price)
    return share
  })

export const formatShares = (shares: ShareTypes[]) =>
  shares.reduce((keyedShares, share) => {
    keyedShares[share.id] = share
    return keyedShares
  }, {} as SharesTypes)
