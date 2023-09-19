// reverse each word given in arguments passed.

if (process.argv.length < 3) {
  console.log('Please provide arguments');
  process.exit(1);
}

// This solution assumes that arguments given that are numbers are treated as numbers rather than strings.
const givenArgs = process.argv.slice(2);
for (let word of givenArgs) {
  if (parseFloat(word) || typeof word !== 'string' || word.length === 1) {
    // argument given was not a string, or a single character.
    console.log(word);
    continue;
  }

  let reversedString = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reversedString += word.charAt(i);
  }

  console.log(reversedString);
}