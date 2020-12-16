function debounced(fn, delay) {
    let timerId = null;

    return function (...args) {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn.call(this, ...args);
        }, delay);
    };
}
module.exports = debounced;