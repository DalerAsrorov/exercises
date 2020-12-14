var assert = require('assert');
var flatten = require('./');

describe('flatten', function () {
  var arr = [1, [2], [3, 4, [5]]];

  it('will return another array', function () {
    assert.notEqual(flatten(arr), arr);
  });

  it('will flatten a simple array', function () {
    assert.deepEqual(flatten([1, 2, 3, 4, [5]]), [1, 2, 3, 4, 5]);
  });

  it('will flatten an array', function () {
    const result = flatten(arr);
    assert.deepEqual(result, [1, 2, 3, 4, 5]);
  });
});
