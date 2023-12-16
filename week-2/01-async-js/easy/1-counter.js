// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second
let counter = 0;
let i = setInterval(() => {
  console.log(counter);
  if (counter == 5) {
    clearInterval(i);
    console.log(i);
  }
  counter++;
}, 1000);
console.log(i);
