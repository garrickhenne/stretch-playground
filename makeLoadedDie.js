const makeLoadedDie = () => {
  let list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */

  return function() {
    /* your code here */
    if (list.length === 0) {
      list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
    }
    return list.shift();
  };
};

const rollLoadedDie = makeLoadedDie();

// Should restart after list is gone.
for (let i = 0; i < 15; i++) {
  console.log(rollLoadedDie());  // 5
}
// console.log(rollLoadedDie());  // 4
// console.log(rollLoadedDie());  // 6