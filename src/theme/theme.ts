import { createTheme, type Theme } from '@mui/material/styles';

export const getAppTheme = (mode: 'light' | 'dark'): Theme => {
  const isDark = mode === 'dark';

  return createTheme({
    palette: {
      mode,
      primary: {
        main: isDark ? '#8d75ff' : '#7057e8',
        dark: isDark ? '#7057e8' : '#5740c6',
        light: isDark ? '#302654' : '#eee9ff',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#38bdf8',
        light: '#bae6fd',
        dark: '#0284c7',
      },
      background: {
        default: isDark ? '#0d0a1a' : '#f8f7ff',
        paper: isDark ? '#161228' : '#ffffff',
      },
      text: {
        primary: isDark ? '#f4f2fb' : '#201b35',
        secondary: isDark ? '#a79fb9' : '#68617d',
      },
      divider: isDark ? 'rgba(141, 117, 255, 0.14)' : 'rgba(112, 87, 232, 0.10)',
    },
    typography: {
      fontFamily: '"DM Sans", -apple-system, BlinkMacSystemFont, sans-serif',
      h1: {
        fontFamily: '"Space Grotesk", sans-serif',
        fontWeight: 700,
        letterSpacing: '-0.04em',
      },
      h2: {
        fontFamily: '"Space Grotesk", sans-serif',
        fontWeight: 700,
        letterSpacing: '-0.035em',
      },
      h3: {
        fontFamily: '"Space Grotesk", sans-serif',
        fontWeight: 700,
        letterSpacing: '-0.025em',
      },
      h4: {
        fontFamily: '"Space Grotesk", sans-serif',
        fontWeight: 700,
      },
      h5: {
        fontFamily: '"Space Grotesk", sans-serif',
        fontWeight: 700,
      },
      h6: {
        fontFamily: '"Space Grotesk", sans-serif',
        fontWeight: 700,
      },
      button: {
        textTransform: 'none',
        fontWeight: 700,
        letterSpacing: '-0.01em',
      },
    },
    shape: {
      borderRadius: 16,
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            borderRadius: 12,
            padding: '10px 20px',
            fontSize: '0.92rem',
            transition: 'all 0.2s ease-in-out',
            '&:focus-visible': {
              outline: `2px solid ${isDark ? '#8d75ff' : '#7057e8'}`,
              outlineOffset: '2px',
            },
          },
          containedPrimary: {
            backgroundColor: isDark ? '#7a60f0' : '#7057e8',
            '&:hover': {
              backgroundColor: isDark ? '#8f79f8' : '#5740c6',
              transform: 'translateY(-1px)',
              boxShadow: '0 8px 24px rgba(112, 87, 232, 0.35)',
            },
          },
          outlinedPrimary: {
            borderColor: isDark ? 'rgba(141, 117, 255, 0.35)' : '#d9d2f7',
            '&:hover': {
              borderColor: isDark ? '#8d75ff' : '#7057e8',
              backgroundColor: isDark ? 'rgba(141, 117, 255, 0.08)' : '#f3f0ff',
              transform: 'translateY(-1px)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            border: `1px solid ${isDark ? 'rgba(141, 117, 255, 0.14)' : '#ece8f7'}`,
            backgroundImage: 'none',
            backgroundColor: isDark ? '#161228' : '#ffffff',
            transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontWeight: 600,
            fontSize: '0.82rem',
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 12,
              backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : '#ffffff',
              transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
              '& fieldset': {
                borderColor: isDark ? 'rgba(141, 117, 255, 0.2)' : '#ded7f7',
              },
              '&:hover fieldset': {
                borderColor: isDark ? '#8d75ff' : '#7057e8',
              },
              '&.Mui-focused fieldset': {
                borderColor: isDark ? '#8d75ff' : '#7057e8',
                borderWidth: '2px',
              },
            },
          },
        },
      },
    },
  });
};
