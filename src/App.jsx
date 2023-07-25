import { ChakraProvider } from '@chakra-ui/react'
import { RouterApp } from './router/routes'
import { extendTheme } from "@chakra-ui/react"
import { createContext } from 'react'

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: ''
      },
    },
  }
})

const TramiteContext = createContext(null)


function App() {
  return (
    <ChakraProvider>
      <RouterApp />
    </ChakraProvider>
  )
}

export default App
