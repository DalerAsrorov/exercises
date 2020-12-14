
const async = {
    sequence(tasks) {
        let result = null;

        const runner = (tasks, done) => {
            if (tasks.length) {
                let task = tasks.shift();

                const _callback = (err, value) => {
                    result = value;

                    if (err) {
                        done(err, value);
                    } else {
                        runner(tasks, done);
                    }
                };

                task(_callback, result);
            } else {
                done(null, result);
            }
        };

        return runner.bind(null, tasks);
    },

    parallel(tasks) {
        let results = [];

        const _callback = (index, err, value, done) => {
            results[index] = value;

            if (err) {
                done(err, results);
            } else if (results.length >= tasks.length) {
                done(null, results);
            }
        };

        const runner = (_tasks, done) => {
            _tasks.forEach((_task, i) => {
                _task((err, value) => _callback(i, err, value, done));
            });
        };

        return runner.bind(null, tasks);
    },

    race(tasks) {
        let status = {
            hasFinished: false
        };

        const _callback = (err, value, done) => {
            if (err || !status.hasFinished) {
                done(err, value);
                status.hasFinished = true;
            }
        };

        const runner = (_tasks, done) => {
            tasks.forEach(_task => {
                if (!status.hasFinished) {
                    _task((err, value) => _callback(err, value, done));
                }
            });
        };

        return runner.bind(null, tasks);
    }
};

module.exports = async;