import React from 'react'
import styled from 'styled-components/macro'

const StyledHeadline = styled.h1`
  font-size: 20vw;
  line-height: 1em;
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
  color: ${({ theme }) => theme.secondary};
`

const Headline = ({ text }) => {
  return (
    <StyledHeadline>{text}</StyledHeadline>
  )
}

export default Headline;