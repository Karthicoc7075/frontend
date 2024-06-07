import React from 'react'
import ThemeProvider from './theme'
import Router from './routes/router'

function App() {

  return (
    <ThemeProvider theme='dark' >
      <Router />
    </ThemeProvider>
  )
}

export default App