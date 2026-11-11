import React, { createContext, useContext } from 'react';

export interface BrandPalette {
  id: 'gold';
  name: string;
  badge: string;
  primary: string;        // Deep Golden Amber (#b45309) for high-contrast text/icons on light surfaces
  primaryHover: string;   // Rich Golden Amber (#d97706)
  primaryLight: string;   // Vibrant Golden Yellow (#f5c400)
  secondary: string;      // Warm Gold (#eab308)
  buttonBg: string;       // Golden Yellow (#f5c400)
  buttonText: string;     // Crisp Dark Charcoal (#18181b)
  canvasBg: string;       // Warm Cream / Ivory (#fcf9f2)
  softBg: string;         // Soft Sunlit Gold Tint (#fef9e7)
  cardTint: string;       // Golden Pill Highlight (#fef08a)
  borderTint: string;     // Warm Golden Border (#fde047)
  darkSurface: string;    // Deep Warm Charcoal (#18181b)
}

export const GOLD_PALETTE: BrandPalette = {
  id: 'gold',
  name: 'Signature Golden Yellow',
  badge: 'Warm Gold Gradient',
  primary: '#b45309',
  primaryHover: '#d97706',
  primaryLight: '#f5c400',
  secondary: '#eab308',
  buttonBg: '#f5c400',
  buttonText: '#18181b',
  canvasBg: '#fcf9f2',
  softBg: '#fef9e7',
  cardTint: '#fef08a',
  borderTint: '#fde047',
  darkSurface: '#18181b',
};

interface ThemeContextValue {
  palette: BrandPalette;
}

const ThemeContext = createContext<ThemeContextValue>({
  palette: GOLD_PALETTE,
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeContext.Provider value={{ palette: GOLD_PALETTE }}>
      {children}
    </ThemeContext.Provider>
  );
};
