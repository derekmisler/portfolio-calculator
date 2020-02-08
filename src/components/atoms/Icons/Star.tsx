import { SFC, memo } from 'react'
import StarIcon from '@material-ui/icons/Star'
import { TYPOGRAPHY, yellow, blueDarker } from 'styles'

export const Star: SFC<{ active?: boolean }> = memo(({ active }) => (
  <StarIcon fontSize='large' style={{ color: active ? yellow : blueDarker }} />
))
