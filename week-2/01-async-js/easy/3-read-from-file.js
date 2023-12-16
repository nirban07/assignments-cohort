// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");
// pwd is assignments
fs.readFile("./week-2/01-async-js/easy/1-counter.js", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  let i = 0;
  while (i < 10000000000) {
    //     console.log(i);
    i++;
  }
  //   console.log(process.env.PWD);
  console.log(data);
});
console.log(
  `How much wood could a woodchuck chuck 
  If a woodchuck could chuck wood ?
  As much wood as a woodchuck could chuck,
  If a woodchuck could chuck wood.`
);
