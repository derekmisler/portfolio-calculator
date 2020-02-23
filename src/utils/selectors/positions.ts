import { createSelector } from 'reselect'
import { StateTypes as PositionTypes, ShareTypes, SharesTypes, TotalsTypes } from 'utils/reducers/positions'

export const positionsSelector = createSelector(
  (state: PositionTypes) => state.getIn(['positions']),
  substate => substate.toJS()
)

export const sharesSelector = createSelector(
  (state: PositionTypes) => state.getIn(['positions', 'shares']),
  (substate): ShareTypes[] => {
    const jsShares = substate.toJS()
    return Object.values(jsShares)
  }
)

export const totalsSelector = createSelector(
  (state: PositionTypes) => state.getIn(['positions', 'totals']),
  (substate): TotalsTypes => substate.toJS()
)

export const calculateTotalsSelector = createSelector(
  (currentTotals: TotalsTypes, currentShares: ShareTypes[]) => {
    let totalPositionValue = 0
    let totalPercentage = 0
    currentShares.forEach((share: ShareTypes) => {
      totalPercentage += share.expectedPercentage
      console.log('----------')
      console.log('share', share)
      console.log('^^^^^^^^^^')
      totalPositionValue += share.total
    })
    return { ...currentTotals, totalPercentage, totalPositionValue }
  },
  currentTotals => ({
    ...currentTotals,
    availableCash: currentTotals.totalCash - currentTotals.totalPositionValue
  })
)

export const calculateShareValuesSelector = createSelector(
  (currentShares: ShareTypes[], totalPositionValue: number) => (
    currentShares.map(share => {
      const shareTotal = share.price * share.numShares
      return {
        ...share,
        total: shareTotal,
        realPercentage: (shareTotal / (totalPositionValue || 1)) * 100,
      }
    })
  ),
  currentShares => (
    currentShares.reduce((keyedShares, share) => {
      keyedShares[share.id] = share
      return keyedShares
    }, {} as SharesTypes)
  )
)