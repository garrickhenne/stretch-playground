const countdownGenerator = function(x) {
  let countdown = x;

  return function() {
    if (countdown > 0) {
      console.log(`T-Minus ${countdown}...`);
      countdown--;
    } else if (countdown === 0) {
      console.log('Blast Off!');
      countdown--;
    } else {
      console.log('Rockets already gone, bub!');
    }
  };
};

const countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!