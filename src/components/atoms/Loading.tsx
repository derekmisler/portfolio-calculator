import React from 'react'
import styled, { keyframes } from 'styled-components'
import { space, SpaceProps } from 'styled-system'

const ellipsis1 = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`

const ellipsis2 = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
`

const ellipsis3 = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`
const LoadingWrapper = styled.div<SpaceProps>`
  ${space}
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
  width: 80px;
  & * {
    position: absolute;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: ${({ theme }) => theme.accent};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  & div:nth-child(1) {
    left: 8px;
    animation: ${ellipsis1} 0.6s infinite;
  }
  & div:nth-child(2) {
    left: 8px;
    animation: ${ellipsis2} 0.6s infinite;
  }
  & div:nth-child(3) {
    left: 32px;
    animation: ${ellipsis2} 0.6s infinite;
  }
  & div:nth-child(4) {
    left: 56px;
    animation: ${ellipsis3} 0.6s infinite;
  }
`

export const Loading = () => (
  <LoadingWrapper p={3}><div></div><div></div><div></div><div></div></LoadingWrapper>
)