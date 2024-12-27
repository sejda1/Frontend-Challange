import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
       // ilk açılışta localstorage okuyoruz
      const localValue = localStorage.getItem(key);

      // boşsa default değeri, localStorage'a atıyoruz
      // aynı değeri dönüyoruz
      if (localValue === null) {
        localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
      } else {
        return JSON.parse(localValue);
      }
    } catch (error) {
      console.error("Error reading localStorage:", error); 
      return initialValue;
    }
  });
   //Bileşenler arasında senkronizasyon gerektiginden, useEffect'e ihtiyaç duyulur.
    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error(`localStorage error: ${error}`);
        }
    }, [key, value]);

    return [value, setValue];
}

    