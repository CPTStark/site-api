import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { App } from './App';
import { queryClient } from './lib/react-query';

// biome-ignore lint/style/noNonNullAssertion: Obriga o uso do operador !
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
