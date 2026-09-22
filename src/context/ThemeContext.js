import { createContext, useContext } from 'react';

export const THEME_STORAGE_KEY = 'portfolio-theme';

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}
