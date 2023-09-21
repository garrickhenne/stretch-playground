const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    console.log('Both objects passed in must be arrays.');
    return;
  }

  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: Array 1 is equal to Array 2!`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: Array 1 NOT EQUAL to Array 2`);
    console.log(`Given: ${arr1} \n Expected: ${arr2}`);
  }
};

const array = [10, 2, 5, 1, 9];
array.sort((a, b) => a - b);

assertArraysEqual(array, [1, 2, 5, 9, 10]);

// Advanced sorting
const students = [
  { id: 1, name: "bruce", age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex", age: 22 },
  { id: 4, name: "alex", age: 30 }
];

// Write a sorting function (sometimes called a custom comparator),
// that sorts the above array first by the name ascending alphabetically,
// and in cases where the names are equal sort by descending age.
students.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  } else if (a.name === b.name) {
    return b.age - a.age;
  } else {
    return -1;
  }
});

console.log(students);