export const getLS = name => Number(localStorage.getItem(name));
export const setLS = (name, value) => localStorage.setItem(name, value);
export const currentTime = () => new Date().getTime();
