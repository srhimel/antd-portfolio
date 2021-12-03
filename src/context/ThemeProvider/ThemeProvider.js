import React, { createContext } from 'react';
import useTheme from '../../hooks/useTheme';
export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
    return (
        <ThemeContext.Provider value={useTheme()}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;