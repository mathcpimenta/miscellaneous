function breakString(str, chars) {
  // Create an empty result string
  let result = '';

  // Split the input string into an array of words
  let words = str.split(' ');

  // Keep track of the current line length
  let lineLength = 0;

  // Loop through the array of words
  for (let i = 0; i < words.length; i++) {
    // If the current word will make the line too long,
    // add a newline character to the result string
    if (lineLength + words[i].length > chars) {
      result += '\n';
      lineLength = 0;
    }

    // Add the current word to the result string, followed by a space
    result += words[i] + ' ';

    // Increase the line length by the length of the current word plus one (for the space)
    lineLength += words[i].length + 1;
  }

  // Return the result string
  return result;
}

let str = 'This is a very long string that needs to be broken into multiple lines.';
let brokenString = breakString(str, 40);