import {createContext} from 'react';
import React from 'react';
export const ThemeContext = createContext();

export function ContextApi({children}) {
    return(
    <ThemeContext.Provider value={{color:'blue'}}>
        {children}
    </ThemeContext.Provider>
    )
}