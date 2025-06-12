const initApp = () => {
    const MultiplyBy10 = memoizedMultiplyBy10();
    console.log(MultiplyBy10(10));  // 50
    console.log(MultiplyBy10(10));  // Fetching from cache: { '5': 50 }
    console.log(MultiplyBy10(6)); // 100
}

document.addEventListener('DOMContentLoaded', initApp);

const MultiplyBy10 = (num) => {
    return num * 10;
}

const memoizedMultiplyBy10 = () => {
    const cache = {};

    return (num) => {
        if (num in cache) {
            console.log(cache);
            return cache[num];
        }
        const result = num * 10;
        cache[num] = result;
        return result;
    }
}