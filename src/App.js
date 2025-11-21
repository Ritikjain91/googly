// App.jsx
import React, { useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/NavBar/Navbar.jsx';
import MemberSection from './components/MemberSection';
import Gridcontainer from './components/GridContainer/gridcontainer.jsx';
import HotDealsSection from './components/HotDealsSection';


function App() {
  const [isDark, setIsDark] = useState(() => JSON.parse(localStorage.getItem('isDark') || 'false'));
  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem('isDark', JSON.stringify(next));
  };

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDark ? 'dark' : 'light',
          background: { default: isDark ? '#000' : '#fff', paper: isDark ? '#000' : '#fff' },
          text: { primary: isDark ? '#fff' : '#000', secondary: isDark ? '#fff' : '#000' },
          primary: { main: isDark ? '#fff' : '#000' },
          secondary: { main: isDark ? '#fff' : '#000' },
          // real green accent
          success: { main: '#10b981', contrastText: '#fff' },
        },
        typography: { fontFamily: `'Inter', sans-serif` },
      }),
    [isDark]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar onToggle={toggleTheme} isDark={isDark} />
      <Gridcontainer />
      <MemberSection />
      <HotDealsSection />

    </ThemeProvider>
  );
}

export default App;