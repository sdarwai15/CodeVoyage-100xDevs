// File cleaner
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

fs.readFile("test.txt", "utf-8", (err, data) => {
	if (err) throw err;
	let contentToUpdate = data.replace(/\s\s+/g, " ");
	fs.writeFile("test.txt", contentToUpdate, (err) => {
		if (err) throw err;
		console.log("The file has been saved!");
	});
});
