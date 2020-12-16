function throttle(fn, ms) {
    let lastCalled;
    let timeout;
    let ctx;
    let args;

    return function () {
        if (!lastCalled || (new Date() - lastCalled > ms && !timeout)) {
            lastCalled = new Date();
            return fn.apply(this, arguments);
        } else {
            ctx = this;
            args = [...arguments];

            if (!timeout) {
                timeout = setTimeout(function () {
                    lastCalled = new Date();
                    fn.apply(ctx, args);
                    timeout = null;
                }, ms);
            }
        }

    };
}

module.exports = throttle;