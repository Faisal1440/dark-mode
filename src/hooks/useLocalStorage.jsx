import { useState } from "react";

const useLocalstorage = (key, initialValue) => {

  const [setValue, setSetValue] = useState(() => {

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

  return [setValue];
};

export default useLocalstorage;