console.log('TEST map');

var tests = [];

tests.push(function () {
  console.log('should succeed on iterating an array and multiply by 2');

  var nums = [1, 2, 3];
  var res = [];
  map(nums, function(element, index) {
    res[index] = element * 2;
  });

  if (res.length !== nums.length) throw Error('result length is not equal to nums length');

  res.forEach(function(element, index) {
      if (element !== (nums[index] * 2)) throw Error('element at index ' + index + ' does not match the expected value');
  });
});

tests.push(function () {
  console.log('should fail on non-array');

  var arr;
  var error;

  try {
    map(arr, function() {});
  } catch (err) {
    error = err;
  }

  if (!error) throw Error('has not failed');

  if (error.message !== 'array is not valid') throw Error('error message is not correct');
});

tests.push(function () {
  console.log('should fail on empty array');

  var arr = [];
  var error;

  try {
    map(arr, function() {});
  } catch (err) {
    error = err;
  }

  if (!error) throw Error('has not failed');

  if (error.message !== 'array is not valid') throw Error('error message is not correct');
});

tests.push(function () {
  console.log('should fail on non-function callback');

  var nums = [1, 2, 3];
  var error;

  try {
    map(nums, 1);
  } catch (err) {
    error = err;
  }

  if (!error) throw Error('has not failed');

  if (error.message !== 'callback is not a function') throw Error('error message is not correct');
});

tests.push(function () {
  console.log('should fail on empty callback');

  var nums = [1, 2, 3];
  var error;

  try {
    map(nums);
  } catch (err) {
    error = err;
  }

  if (!error) throw Error('has not failed');

  if (error.message !== 'callback is not a function') throw Error('error message is not correct');
});

tests.push(function () {
  console.log('should fail on non-array and non-callback');

  var error;

  try {
    map();
  } catch (err) {
    error = err;
  }

  if (!error) throw Error('has not failed');

  if (error.message !== 'array is not valid') throw Error('error message is not correct');
});

testSuite(tests);