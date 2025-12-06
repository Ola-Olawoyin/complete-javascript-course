// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//write a function that reverses the  a values passed in an array.

const reverseArray = function (arr) {

    const valueArray = []

    for (let i = arr.length - 1; i >= 0; i--) {

        valueArray.push(arr[i])
    }
    return valueArray;
}


console.log(reverseArray(['Boy', 'girl', 'woman', 'man']))

function filter_list(l) {
    // Return a new array with the strings filtered out
    const returnedNumbers = []
    for (let i = 0; i < l.length; i++) {

        if (typeof l[i] === 'number') {
            returnedNumbers.push(l[i])
        }

    }
    return returnedNumbers;
}

console.log(filter_list([1, '2', '3', 'abc', 1234]))


// Return a new array with the odd filtered out

const filterOddNumbers = function (arr) {
    const returnedOddNumbers = []
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 === 0) {
            returnedOddNumbers.push(arr[i])
        }

    }
    return returnedOddNumbers;
}

console.log(filterOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// put the characters of a string in an array

const stringChar = function (str) {
    const strArray = []

    for (let i = 0; i < str.length; i++) {
        strArray.push(str[i])
    }

    return strArray;
}

console.log(stringChar('Adeola'))

function XO(str) {
    //code here
    str = str.toLowerCase();

    const xCount = (str.match(/x/g) || []).length
    const oCount = (str.match(/o/g) || []).length

    if (xCount === oCount) {
        return true
    }
    else return false
}

console.log(XO('xoxoxoxox'))


function isTriangle(a, b, c) {
    if ((a > 0 && b > 0 && c > 0) && (a + b > c) && (a + c > b) && (b + c > a)) {
        return true
    }
    else return false
}

console.log(isTriangle(2, 1, 2))


function getMiddle(str) {

    if (str.length % 2 === 1) {
        return str.at((str.length - 1) / 2)
    }
    else if (str.length % 2 === 0) {
        return (str.at((str.length - 2) / 2) + str.at(str.length / 2))
    }
    else return str
}


console.log(getMiddle("test"))

function solution(number) {
    let sum = 0;
    const numArray = []
    for (let i = 0; i < number.length; i++) {
        sum = sum + numArray.push(number[i])
    }
    return sum;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))