// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");
const content = "some content ";

fs.writeFile(
  "./week-2/01-async-js/easy/text.txt",
  content,
  { flag: "a+" },
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);
