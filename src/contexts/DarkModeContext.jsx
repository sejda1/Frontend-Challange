import { createContext, useCallback, useContext} from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const DarkModeContext = createContext();

export default function DarkModeProvider({children}) {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);

    const toggleDarkMode = useCallback(() => {
        setDarkMode((prevMode) => !prevMode);
    }, [setDarkMode]);

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
}
export const useDarkMode = () => {
    return useContext(DarkModeContext);
  };

