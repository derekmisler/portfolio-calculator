interface PositionHeadingTypes {
  label: string
  key: string
  class: string
}
export const POSITION_HEADINGS: PositionHeadingTypes[] = [
  {
    label: '',
    key: 'id',
    class: 'abbr'
  },
  {
    label: '#',
    key: 'numShares',
    class: 'num'
  },
  {
    label: 'Price',
    key: 'price',
    class: 'currency'
  },
  {
    label: 'Total',
    key: 'total',
    class: 'percent'
  },
  {
    label: 'Exp',
    key: 'expectedPercentage',
    class: 'percent'
  },
  {
    label: 'Real',
    key: 'realPercentage',
    class: 'percent'
  },
  {
    label: 'Buy',
    key: 'buy',
    class: 'num'
  },
  {
    label: '',
    key: 'button',
    class: 'button'
  }
]