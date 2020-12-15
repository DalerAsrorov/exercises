
function once(cb) {
    let result = null;
    let hasBeenCalled = false;

    return function () {
        if (!hasBeenCalled) {
            hasBeenCalled = true;
            result = cb.apply(this, arguments);
            return result;
        }

        return result;
    };
}

module.exports = once;