import React, { FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme/theme';
import { Router } from './router/Router';

const App: FC = () => (
  <ChakraProvider theme={theme}>
    <Router />
  </ChakraProvider>
);

export default App;
