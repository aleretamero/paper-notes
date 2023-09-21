// Routes
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

// Styles
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyles';
import { lightTheme } from './styles/Theme/lightTheme';
import { darkTheme } from './styles/Theme/darkTheme';

function App() {
  return (
    <ThemeProvider theme={lightTheme ?? darkTheme}>
      <GlobalStyle />

      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
