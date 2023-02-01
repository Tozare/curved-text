import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from "@chakra-ui/react";
import { App } from "./app";

// Say something
console.log('[ERWT] : Renderer execution started');

// Application to Render
const app = (
  <ChakraProvider>
    <App />
  </ChakraProvider>
)

// Render application in DOM
createRoot(document.getElementById('app')).render(app);
