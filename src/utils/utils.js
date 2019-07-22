export const getLS = (key, isNumber = true) =>
	isNumber
		? Number(localStorage.getItem(key))
		: JSON.parse(localStorage.getItem(key));

export const setLS = (key, value, isNumber = true) =>
	isNumber
		? localStorage.setItem(key, value)
		: localStorage.setItem(key, JSON.stringify(value));

export const currentTime = () => new Date().getTime();
