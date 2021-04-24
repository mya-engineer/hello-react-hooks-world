import React from 'react'
import Alert from './Alert/Alert'
import { AlertProvider } from './Alert/AlertContext'
import Main from './Main'

function App() {
  return (
    <AlertProvider>
      <div className='container pt-3'>
        <Alert />
        <Main />
      </div>
    </AlertProvider>
  )
}

export default App
