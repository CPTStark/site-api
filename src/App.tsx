import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';
import { Router } from './router';

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}
