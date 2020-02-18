export const createData = (id: string, numShares: number, price: number, expectedPercentage: number) => ({
  id,
  numShares,
  price,
  total: price * numShares,
  expectedPercentage
})