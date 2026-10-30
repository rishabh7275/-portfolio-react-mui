import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { getAppTheme } from '../theme/theme';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: 'light',
  toggleTheme: () => {},
  setMode: () => {},
});

export const useColorTheme = () => useContext(ThemeContext);

const THEME_STORAGE_KEY = 'portfolio_theme_mode';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    } catch {
      // Fallback
    }
    return 'light';
  });

  useEffect(() => {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, mode);
      document.documentElement.setAttribute('data-theme', mode);
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', mode === 'dark' ? '#0d0a1a' : '#f8f7ff');
      }
    } catch {
      // Ignore in restricted environments
    }
  }, [mode]);

  const toggleTheme = () => {
    setModeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
  };

  const theme = useMemo(() => getAppTheme(mode), [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, setMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
