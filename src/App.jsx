import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navigator from './config/Navigator'
import { ContextProvider } from './helper/ContextApi'

const App=()=> {
  return (
    <BrowserRouter>
    <ContextProvider> 
    <Navigator />
    </ContextProvider>

    </BrowserRouter>
  )
}
export default App
