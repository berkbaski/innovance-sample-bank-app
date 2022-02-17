export function getStorageValue(key: string): any {
    const storageVaue = window.sessionStorage.getItem(key);
    return storageVaue ? JSON.parse(storageVaue) : undefined;
}

export function setStorageValue(key: string, value: any) {
    if (value && Object.keys(value).length > 0) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }
}
