import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import Hello from './components/Hello';

function App() {
  return (
    <ChakraProvider>
      <Hello/>
    </ChakraProvider>
  );
}

export default App;
