// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    if (str.length === 1) {
        return str;
    }

    const objChars = {};
    for (let char of str) {
        objChars[char] = objChars[char] + 1 || 1;
    }

    let max = 0;
    let maxChar = '';

    for (char in objChars) {
        if (objChars[char] > max) {
            maxChar = char;
            max = objChars[char];
        }

    }
    return maxChar;
}

module.exports = maxChar;
