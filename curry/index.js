
function curry(fn) {
    const next = (...args) => {
        return (...x) => {
            const allArgs = [...args, ...x];

            if (allArgs.length >= fn.length) {
                return fn.call(null, ...allArgs);
            }

            return next(...allArgs);
        };
    };

    return next();
}


module.exports = curry;