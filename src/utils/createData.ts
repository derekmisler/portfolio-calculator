export const createData = (abbr: string, numShares: number, price: number, expectedPercentage: number) => ({
  abbr,
  numShares,
  price,
  total: price * numShares,
  expectedPercentage
})