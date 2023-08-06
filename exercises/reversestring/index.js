// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     let revStr = '';

//     for (let index = str.length - 1; index >= 0; index--) {
//         revStr = revStr + str[index];
//     }

//     return revStr;
// }

// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// function reverse(str) {
//     let revStr = '';

//     for (char of str) {
//         revStr = char + revStr;
//     }

//     return revStr;
// }

function reverse(str) {
    return str.split('').reduce((accStr, curValue) => {
        return accStr = curValue + accStr;
    }, '');
}


module.exports = reverse;
