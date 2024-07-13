import React from 'react'
import ThemeProvider from './theme'
import Router from './routes/router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Toast from './features/toast/components/Toast'

function App() {

  return (
    <ThemeProvider theme='dark' >
      <Router />
      <ToastContainer/>
      <Toast />
    </ThemeProvider>
  )
}

export default App