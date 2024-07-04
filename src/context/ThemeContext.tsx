// ThemeContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface Theme {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  textColor: string;
}

interface ThemeContextType {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const initialTheme: Theme = {
  primaryColor: '#4C9ED9',
  secondaryColor: '#7ED6A6',
  accentColor: '#ef9000',
  backgroundColor: '#FFFFFF',
  textColor: '#333333',
};

const ThemeContext = createContext<ThemeContextType>({
  theme: initialTheme,
  setTheme: () => { },
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => useContext(ThemeContext);
