
function once(cb) {
    this.hasBeenCalled = false;
    this.result = null;

    const called = (cb, ...args) => {
        if (!this.hasBeenCalled) {
            this.hasBeenCalled = true;

            this.result = cb.call(this.result, ...args);
            return this.result;
        } else if (this.hasBeenCalled && this.result) {
            return this.result;
        } else {
            return cb;
        }
    };

    return called.bind(null, cb);
}

module.exports = once;