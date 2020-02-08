import styled from 'styled-components'
import { StyledComponentProps, TYPOGRAPHY, LAYOUT } from 'styles'

const {
  headingFontFamily,
  headingFontSizes,
  headingLineHeights,
  headingFontWeights
} = TYPOGRAPHY

const { mediaQueries } = LAYOUT

export interface StyledHeadingProps extends StyledComponentProps {
  textAlign?: 'center' | 'right' | 'left'
  level: 1 | 2 | 3 | 4 | 5 | 6
}

export const Heading = styled.div.attrs<StyledHeadingProps>(({ level }) => ({
  role: 'heading',
  'aria-level': level,
  as: `h${level}`
}))<StyledHeadingProps>`
  font-family: ${headingFontFamily};
  font-style: italic;
  text-align: ${({ textAlign = 'left' }) => textAlign};
  font-weight: ${({ level }) => headingFontWeights[level - 1]};
  line-height: ${({ level }) => headingLineHeights[level - 1]};
  font-size: ${({ level }) => headingFontSizes.mobile[level - 1]};

  @media ${mediaQueries.desktop} {
    font-size: ${({ level }) => headingFontSizes.desktop[level - 1]};
  }
`
