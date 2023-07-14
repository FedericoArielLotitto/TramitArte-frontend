import { ChakraProvider } from '@chakra-ui/react'
import { RouterApp } from './router/routes'


function App() {
  return (
    <ChakraProvider>
      <RouterApp />
    </ChakraProvider>
  )
}

export default App

