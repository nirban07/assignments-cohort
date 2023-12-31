// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

fs.readFile("./demo.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }

  let a = data
    .split(" ")
    .filter((x) => x !== "")
    .join(" ");

  fs.writeFile("./demo.txt", a, (err) => {
    if (err) {
      console.log(err);
    }
  });
});
