import { createContext, useContext } from 'react';
import useLocaleStorage from "../hooks/useLocalStorage";
import EN_LANG from "../data/dataEng.json";
import TR_LANG from "../data/dataTr.json";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useLocaleStorage("language",'tr'); 


  const toggleLanguage = (key) => {
    const translate = language === "tr" ? TR_LANG : EN_LANG; 
    return translate[key] || key; 
  };
  

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  return useContext(LanguageContext);
};
