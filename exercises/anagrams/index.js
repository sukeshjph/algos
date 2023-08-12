// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function charMap(str) {
    const objChars = {};
    for (let char of str) {
        objChars[char] = objChars[char] + 1 || 1;
    }

    return objChars;
}

// function anagrams(stringA, stringB) {
//     const charMapStringA = charMap(stringA.replace(/[^\w]/g, "").toLowerCase());
//     const charMapStringB = charMap(stringB.replace(/[^\w]/g, "").toLowerCase());

//     if (Object.keys(charMapStringA).length !== Object.keys(charMapStringB).length) {
//         return false;
//     }

//     for (const key in charMapStringA) {
//         if (!Object.keys(charMapStringB).includes(key)) {
//             return false;
//         }

//         if (charMapStringA[key] !== charMapStringB[key]) {
//             return false;
//         }
//     }

//     return true;
// }

function anagrams(stringA, stringB) {
    return stringA.replace(/[^\w]/g, "").toLowerCase().split('').sort().join()
        === stringB.replace(/[^\w]/g, "").toLowerCase().split('').sort().join();
}

module.exports = anagrams;
