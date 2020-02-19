import React, { SFC, memo, HTMLProps } from 'react'
import styled from 'styled-components'
import { space, SpaceProps, border, BorderProps, typography, TypographyProps } from 'styled-system'

interface TdProps
  extends SpaceProps,
    BorderProps,
    TypographyProps,
    HTMLProps<HTMLTableDataCellElement> {
    }

const StyledTd = styled.td<TdProps>`
  ${border}
  ${space}
  ${typography}
`
export const Td: SFC<TdProps> = memo(({ ref, as, color, ...props }) => (
  <StyledTd
    borderBottom='1px solid'
    borderBottomColor='background'
    {...props}
  />
))
