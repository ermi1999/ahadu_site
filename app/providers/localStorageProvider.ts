"use client";
const setAndGetStorage = (key: string, _value: value, method: string) => {
  if (method === 'set') {
    localStorage.setItem(key, JSON.stringify(_value));
  } else if (method === 'get') {
    return JSON.parse(localStorage.getItem(key) || '{}';
  }
};

export default setAndGetStorage;
