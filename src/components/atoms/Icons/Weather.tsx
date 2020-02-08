import { SFC, memo } from 'react'
import { TYPOGRAPHY, orange, teal, whiteDarkest, blue } from 'styles'
import FilterDramaRoundedIcon from '@material-ui/icons/FilterDramaRounded'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import OpacityRoundedIcon from '@material-ui/icons/OpacityRounded'
import AcUnitIcon from '@material-ui/icons/AcUnit'
import GrainIcon from '@material-ui/icons/Grain'

export const Weather: SFC<{ forecast: string }> = memo(({ forecast }) => {
  const isCloudy = forecast.toLowerCase().indexOf('cloudy') > -1
  const isRainy = forecast.toLowerCase().indexOf('rain') > -1
  const isSnow = forecast.toLowerCase().indexOf('snow') > -1
  const isFog = forecast.toLowerCase().indexOf('fog') > -1

  const iconStyles = { fontSize: TYPOGRAPHY.iconSize }
  if (isSnow) {
    return <AcUnitIcon style={{ ...iconStyles, fill: blue }} />
  }
  if (isFog) {
    return <GrainIcon style={{ ...iconStyles, fill: whiteDarkest }} />
  }
  if (isRainy) {
    return <OpacityRoundedIcon style={{ ...iconStyles, fill: teal }} />
  }
  if (isCloudy) {
    return (
      <FilterDramaRoundedIcon style={{ ...iconStyles, fill: whiteDarkest }} />
    )
  }
  return <WbSunnyRoundedIcon style={{ ...iconStyles, fill: orange }} />
})
