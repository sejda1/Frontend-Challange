import { createContext, useContext, useEffect } from 'react';
import { data } from '../data/data';
import useLocalStorage from '../hooks/useLocalStorage';
import axios from 'axios';

const LanguageContext = createContext();

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useLocalStorage('language', 'tr');

  useEffect(() => {
    axios
      .get('https://reqres.in/api/workintech')
      .then((res) => {
        console.log('data GET successfully!', res.data);
      })
      .catch((err) => {
        console.error('data get failed!', err);
      });
  }, []);

  const changeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'tr' ? 'en' : 'tr'));
  };

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage, data }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  return useContext(LanguageContext);
};