import React from 'react'
import styled, { ThemeProvider } from 'styled-components/macro'
import Toggle from './components/Toggle'
import Headline from './components/Headline'
import useDarkMode from './hooks/useDarkMode'
import Theme from './styles/Theme'

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease;
  background-color: ${({ theme }) => theme.primary};
`

const App = () => {
  const [darkMode, setDarkMode] = useDarkMode()
  const toggleIt = () => setDarkMode(!darkMode)

  return (
    <ThemeProvider theme={darkMode ? Theme.dark : Theme.light}>
      <StyledApp>
        <Toggle darkMode={darkMode} toggler={toggleIt} />
        {darkMode ? <Headline text="dark." /> : <Headline text="light." />}
      </StyledApp>
    </ThemeProvider>
  )
}

export default App;