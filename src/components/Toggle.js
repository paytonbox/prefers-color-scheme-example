import React from 'react'
import styled from 'styled-components'

const StyledToggle = styled.div`
  width: 55px;
  height: 30px;
  border-radius: 1000px;
  background-color: ${({ theme }) => theme.secondary};
  position: absolute;
  top: 25px;
  right: 35px;
  cursor: pointer;
  transition: 0.5s ease;

  &::after {
    content: '';
    height: 22px;
    width: 22px;
    background-color: ${({ theme }) => theme.primary};
    position: absolute;
    top: 50%;
    left: ${({ darkMode }) => darkMode ? '29px' : '4px'};
    transform: translate(0, -50%);
    border-radius: 100px;
    transition: 0.5s ease;
  }
`

const Toggle = ({ darkMode, toggler }) => {
  return (
    <StyledToggle darkMode={darkMode} onClick={() => toggler()} />
  )
}

export default Toggle