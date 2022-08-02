import React, { FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme/theme';
import { Router } from './router/Router';
import HeaderLayout from './components/templates/HeaderLayout';

const App: FC = () => (
  <ChakraProvider theme={theme}>
    <HeaderLayout>
      <Router />
    </HeaderLayout>
  </ChakraProvider>
);

export default App;
