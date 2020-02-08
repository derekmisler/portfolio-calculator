import { SFC, memo } from 'react'
import styled, { css } from 'styled-components'
import { StyledComponentProps, LAYOUT } from 'styles'
import { generateResponsiveCols } from 'utils/generateResponsiveGrid'

const { mediaQueries } = LAYOUT

interface ColProps extends StyledComponentProps {
  row?: boolean
  range?: number | string
  rangeDesktop?: number | string
  textAlign?: string
}
const StyledCol = styled.div<ColProps>`
  display: block;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  ${({ range = '', rangeDesktop = '', row = false }) => {
    if (row) {
      return css`
        ${generateResponsiveCols('1..')}
      `
    }
    if (!(range || rangeDesktop)) return null
    return css`
      ${generateResponsiveCols(range)}
      @media ${mediaQueries.desktop} {
        ${generateResponsiveCols(rangeDesktop || range)}
      }
    `
  }}
`

export const Col: SFC<ColProps> = memo(props => <StyledCol {...props} />)
