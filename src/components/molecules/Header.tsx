import React, { SFC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CloseRoundedIcon from '@material-ui/icons/CloseRounded'
import { Container } from 'atoms/Container'
import { Heading, Link } from 'atoms/Typography'
import { Button } from 'atoms/Buttons'
import { signOut } from 'utils/actions/auth'
import { authSelector } from 'utils/selectors'

interface HeaderTypes {
  siteTitle?: string
}
export const Header: SFC<HeaderTypes> = ({ siteTitle }) => {
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector(authSelector)
  const handleClick = () => {
    dispatch(signOut())
  }
  return (
    <>
      {siteTitle && (
        <Container as='header' p={[2, 4]} justifyContent='center'>
          <Heading level={1} textAlign='center'>
            <Link to='/'>{siteTitle}</Link>
          </Heading>
        </Container>
      )}
      {isLoggedIn && (
        <Container as='nav' p={[1, 2]} justifyContent='flex-end'>
          <Button type='button' variant='action' onClick={handleClick}>
            <CloseRoundedIcon />
          </Button>
        </Container>
      )}
    </>
  )
}
