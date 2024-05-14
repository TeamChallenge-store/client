/**
 * The useLocalStorage hook provides a way to store and retrieve values in local storage
 * while keeping the state of the value synchronized with the local storage.
 *
 * @param {unknown} initialValue - The initial value for the local storage state.
 * @param {string} key - The key under which the value will be stored in local storage.
 * @returns {[unknown, (newValue: unknown) => void]} - An array containing the current state value and the function to set a new value.
 * Current value - the current state of the value stored in local storage.
 * Set function - a function to set a new value to be stored in local storage.
 *
 * @example
 * Usage in a functional component:
 * const [storedValue, setStoredValue] = useLocalStorage('defaultValue', 'myStorageKey');
 *
 * useEffect(() => {
 *   Access the stored value
 *   console.log('Stored Value:', storedValue);
 * }, [storedValue]);
 *
 * Update the stored value
 * setStoredValue('newValue');
 */

import { useState } from 'react';

const useLocalStorage = <T>(initialValue: T, key: string) => {
  const [value, setValue] = useState(() => {
    const storage = localStorage.getItem(key);

    if (storage === null) {
      return initialValue;
    }

    return JSON.parse(storage);
  });

  const saveToLocal = (newValue: T) => {
    localStorage.setItem(key, JSON.stringify(newValue));

    setValue(newValue);
  };

  return [value, saveToLocal];
};

export { useLocalStorage };
