// Make password.js take in a single string as a command line argument and print out an obfuscated version of that password, using the rules defined below.
/*
Our program should define a function named obfuscate. This function should take a string as an argument and obfuscate it by applying the following rules:

Every "a" in the string should be replaced with a "4".
Every "e" in the string should be replaced with a "3".
Every "o" (oh) in the string should be replaced with a "0" (zero).
Every "l" (el) in the string should be replaced with a "1" (one).
*/

const checkSingleArg = function(args) {
  if (!args[2]) {
    console.log('Please enter a password as an argument');
    process.exit(1);
  }

  if (args.length > 3) {
    console.log('Please only enter one argument.');
    process.exit(1);
  }
};

checkSingleArg(process.argv);

const argPassword = process.argv[2];

const obfuscate = function(password) {
  let obfuscatedPassword = '';

  for (const letter of password) {
    switch (letter) {
    case 'a':
      obfuscatedPassword += '4';
      break;
    case 'e':
      obfuscatedPassword += '3';
      break;
    case 'o':
      obfuscatedPassword += '0';
      break;
    case 'l':
      obfuscatedPassword += '1';
      break;
    default:
      obfuscatedPassword += letter;
      break;
    }
  }

  return obfuscatedPassword;
};

console.log(obfuscate(argPassword));