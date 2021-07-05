import { useState } from "react";

const useLocalstorage = (key, initialValue) => {

  const [myValue, setStoredValue] = useState(() => {

    const item = window.localStorage.getItem(key);
        if
            (item) {return JSON.parse(item);} 
        else 
            {return initialValue;}

  });

  const setValue = value => {

    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [myValue, setValue];
};

export default useLocalstorage;