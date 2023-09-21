// FUNCTION IMPLEMENTATION (MULTIPLE BUGS)
const isPalindrome = function(str) {
  const formattedString = str.split(" ").join("").toLowerCase();
  // console.log("formattedString: ", formattedString);
  const midIndex = Math.floor(formattedString.length / 2);
  const lastIndex = formattedString.length - 1;

  for (let i = 0; i < midIndex; i++) {
    if (formattedString[i] !== formattedString[lastIndex - i]) return false;
  }

  return true;
};

// Assertion Function
const assertPalindrome = function(word, expected) {
  console.log(`Testing isPalindrome("${word}"):`);
  const actual = isPalindrome(word);
  if (actual === expected) {
    console.log("\x1b[32m%s\x1b[0m", `\tPASS ✅ function returned ${actual}\n`);
  } else {
    console.log("\x1b[31m%s\x1b[0m", `\tFAIL 🛑 function returned ${actual} (expected ${expected})\n`);
  }
};


// TEST CODE
// These should all pass assertion, but they don't.
assertPalindrome('p', true);
assertPalindrome('racecar', true);
assertPalindrome('my gym', true);
assertPalindrome('foo', false);
assertPalindrome('fluff', false);
assertPalindrome('just some random words', false);

// Bonus / Stretch: Uncomment these tests and figure out why these are also failing
assertPalindrome('Kayak', true);