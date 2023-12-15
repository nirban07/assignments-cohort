// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let count = 0;
let timeoutid;

let counter2 = () => {
  if (count === 5) {
    console.log("hello here ");
    clearTimeout(timeoutid);
  } else {
    timeoutid = setTimeout(() => {
      console.log(count);
      count++;
      counter2();
    }, 1000);
  }
};
counter2();
// (Hint: setTimeout);
