import {useEffect, useState} from "react";

export default function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debouncedValue;
}

// How to use:
// import useDebounce from 'hooks/useDebounce';
//
// const [value, setValue] = useState('');
// const debouncedValue = useDebounce(value, 500);
//
// useEffect(() => {
// 	if (debouncedValue) {
// 		// do something with debounced value
// 	}
// }, [debouncedValue]);