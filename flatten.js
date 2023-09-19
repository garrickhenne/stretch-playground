// Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
// I know it said no recursion hehe
const flatten = function(arr) {
  if (!Array.isArray(arr)) {
    console.log('Please provide an array.');
    return undefined;
  }

  let flattenedArray = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      flattenedArray = flattenedArray.concat(flatten(item));
    } else {
      flattenedArray.push(item);
    }
  }

  return flattenedArray;
};






console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2, 3, [4, 3]]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, 3, [4, 5, [6, 7]]]));
console.log(flatten([1, 2, 3, [4, 5, [6, 7, [8, 9]]], 10]));
console.log(flatten([[1, 1.1, [1.2, 1.3]], 2, 3, [4, 5, [6, 7, [8, 9]]], 10]));
console.log(flatten(1));
console.log(flatten("hello"));