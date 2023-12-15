// ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second
let counter = 0;
let i = setInterval(() => {
  if (counter == 5) {
    console.log(i);
    clearInterval(i);
  }
  console.log(counter);
  counter++;
}, 1000);
console.log(i);
