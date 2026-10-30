export function useLocalStorage<T>(key: string, initialValue: T) {
    const stored = localStorage.getItem(key);
    const value = ref<T>(stored ? JSON.parse(stored) : initialValue);

    watch(value, (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue))
    }, { deep: true });

    return value;
}