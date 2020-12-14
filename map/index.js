
const arr = [1, 2, 3];

function map(iterable, callback, context) {
    let newArr = new Array(iterable.length);

    for (let i = 0; i < iterable.length; i++) {
        newArr[i] = callback.call(context, iterable[i], i, iterable);
    }

    return newArr;
}

const mapped = map(arr, function (value) {
    return value * 2;
});

module.exports = map;