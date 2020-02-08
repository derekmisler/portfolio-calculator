import { FC, memo, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Input } from 'components/molecules/Forms'
import { Text, Span } from 'components/atoms/Typography'
import { getPlaces, resetPlaces, selectPlace } from 'utils/actions'
import { RootState } from 'utils/reducers'
import { SuggestionResultTypes } from 'utils/parseSuggestions'
import { LAYOUT } from 'styles'
import debounce from 'lodash/debounce'

const { borderSize, borderStyle, borderRadius, spacing, dropShadow } = LAYOUT

const StyledAutocompleteWrapper = styled.div`
  position: relative;
`

const StyledResults = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  padding: ${spacing.medium} ${spacing.large};
  border: ${({ theme }) => `${borderSize} ${borderStyle} ${theme.border}`};
  background-color: ${({ theme }) => theme.background};
  border-top: none;
  border-bottom-left-radius: ${borderRadius};
  border-bottom-right-radius: ${borderRadius};
  box-shadow: ${({ theme }) =>
    `0 ${dropShadow.small} ${dropShadow.small} ${theme.shadow}`};
`
const StyledResultsItem = styled.div`
  padding: ${spacing.small} ${spacing.large};
  border-bottom: ${({ theme }) =>
    `${borderSize} ${borderStyle} ${theme.border}`};
  text-align: center;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.linkHover};
    border-bottom-color: ${({ theme }) => theme.link};
  }
`

interface ItemProps extends SuggestionResultTypes {}

const AutocompleteItem: FC<ItemProps> = memo(({ place, title, subtitle }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(selectPlace(place))
    dispatch(resetPlaces())
  }
  return (
    <StyledResultsItem onClick={handleClick}>
      <Text textAlign="center">
        <Span small bold>
          {title}
        </Span>
        {subtitle && <Span small> ({subtitle})</Span>}
      </Text>
    </StyledResultsItem>
  )
})

export const LocationAutocomplete = memo(() => {
  const [inputValue, setInputValue] = useState('')
  const [suggestionsVisible, setSuggestionsVisible] = useState(false)
  const { suggestions = [] } = useSelector((state: RootState) => state.places)

  const dispatch = useDispatch()

  const handleChange = debounce(
    (text: string = '') => {
      setInputValue(text)
      dispatch(getPlaces(text))
    },
    500,
    { trailing: true }
  )

  useEffect(() => {
    if (!inputValue) dispatch(resetPlaces())
    setSuggestionsVisible(!!inputValue && !!suggestions[0])
  }, [inputValue, suggestions[0]])

  return (
    <>
      <Input
        autoFocus
        id="location-search"
        onChange={handleChange}
        placeholder="Search"
      />
      {suggestionsVisible && (
        <StyledAutocompleteWrapper>
          <StyledResults>
            {suggestions.map(suggestion => (
              <AutocompleteItem
                {...suggestion}
                key={`${suggestion.title}-${suggestion.subtitle}`}
              />
            ))}
          </StyledResults>
        </StyledAutocompleteWrapper>
      )}
    </>
  )
})
