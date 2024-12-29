import { createContext, useState, useContext } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('eng'); 


  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'tr' ? 'eng' : 'tr'));
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
