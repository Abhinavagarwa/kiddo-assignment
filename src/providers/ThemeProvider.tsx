import React, {
  createContext,
  useContext,
  ReactNode,
} from "react";

export interface Theme {
  primary: string;
  background: string;
}

const defaultTheme: Theme = {
  primary: "#FF9933",
  background: "#FFF5E6",
};

const ThemeContext =
  createContext<Theme>(defaultTheme);

interface Props {
  value: Theme;
  children: ReactNode;
}

export function ThemeProvider({
  value,
  children,
}: Props) {
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}