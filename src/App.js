import React, { Component } from 'react';
import './App.css';

import styled, { ThemeProvider } from 'styled-components/macro'

const theme = {
  light: {
    primary: '#FFFFFF',
    secondary: '#000000'
  },

  dark: {
    primary: '#000000',
    secondary: '#FFFFFF'
  }
}

const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.primary};
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      darkMode: false
    }
  }

  componentDidMount () {
    // save reference to media query
    this.mq = window.matchMedia('(prefers-color-scheme: dark)')

    // listen for change in media query
    this.mq.addListener(this.handleChange)

    // set initial state based on media query
    this.setDarkMode(this.mq.matches)
  }

  setDarkMode = (val) => {
    // animate here

    // transition theme
    this.setState({
      darkMode: val
    })

    // animate again
  }

  handleChange = (e) => {
    this.setDarkMode(e.matches)
  }

  render () {
    return (
      <ThemeProvider theme={this.state.darkMode ? theme.dark : theme.light}>
        <StyledApp />
      </ThemeProvider>
    )
  }
}

export default App;
