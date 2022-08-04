import { ChakraProvider } from '@chakra-ui/react'
import React, { FC } from 'react'

import { Router } from './router/Router'
import theme from './theme/theme'

const App: FC = () => (
  <ChakraProvider theme={theme}>
    <Router />
  </ChakraProvider>
)

export default App
