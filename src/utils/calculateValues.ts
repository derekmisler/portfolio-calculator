import uuid from 'uuid/v4'
import {
  StateTypes as PositionTypes,
  ShareTypes,
  SharesTypes,
  TotalsTypes
} from 'utils/reducers/positions'

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

export const calculateTotals = (currentShares: ShareTypes[]) =>
  currentShares.reduce(
    (acc, share: ShareTypes) => {
      acc.totalPercentage += share.expectedPercentage
      acc.totalPositionValue += share.total
      return acc
    },
    { totalPercentage: 0, totalPositionValue: 0 }
  )

export const calculateCashRemaining = (totalPositionValue: number, totalCash: number) =>
  totalCash - totalPositionValue

export const calculateShareValues = (currentShares: ShareTypes[], totalPositionValue: number) =>
  currentShares.reduce(
    (acc, share) => {
      acc.total = share.price * share.numShares
      acc.realPercentage = (acc.total / (totalPositionValue || 1)) * 100
      return acc
    },
    { total: 0, realPercentage: 0 }
  )
export const calculateNumToBuy = (totalPositionValue: number, currentShares: ShareTypes[]) =>
  currentShares.reduce(
    (acc, share) => {
      acc.buy = (totalPositionValue / share.expectedPercentage - share.total) / share.price
      return acc
    },
    { buy: 0 }
  )

export const formatShares = (shares: ShareTypes[]) =>
  shares.reduce((keyedShares, share) => {
    keyedShares[share.id] = share
    return keyedShares
  }, {} as SharesTypes)
