// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function reverse(str) {
    return str.split('').reduce((accStr, curValue) =>
        accStr = curValue + accStr
        , '');
}

function getKeyValPair(str) {
    const objKeyValPair = {};

    for (char of str) {
        if (objKeyValPair[char]) {
            objKeyValPair[char] = objKeyValPair[char]++;
        }

        else {
            objKeyValPair[char] = 1;
        }
    }
    return objKeyValPair;

}

// function palindrome(str) {
//     if (str.includes(' ')) {
//         return false;
//     }

//     if (str[0] !== str[str.length - 1]) {
//         return false;
//     }

//     const strObj = getKeyValPair(str);
//     const revStrObj = getKeyValPair(reverse(str));

//     for (key in strObj) {
//         if (!Object.keys(revStrObj).includes(key)) {
//             return false;
//         }

//         if (revStrObj[key] !== strObj[key]) {
//             return false;
//         }
//     }

//     return true;
// }

function palindrome(str) {
    return reverse(str) === str;
}

module.exports = palindrome;
