export function useLocalStorage<T>(key: string, initialValue: T) {
    const value = ref<T>(initialValue);

    onMounted(() => {
        const stored = localStorage.getItem(key);
        if (stored) {
            value.value = JSON.parse(stored);
        }
    });

    watch(value, (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue))
    }, { deep: true });

    return value;
}