import React, { useState, useEffect } from 'react';

function getStorageValue(key: string, defaultValue?: string) {
    const saved = sessionStorage.getItem(key);
    const initial = JSON.parse(saved || '{}');
    return initial || defaultValue;
}

export const useSessionStorage = (
    key: string,
    defaultValue?: string
): [any, React.Dispatch<any>] => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};
