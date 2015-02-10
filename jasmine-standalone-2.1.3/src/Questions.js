// Question 1

function selectElementsStartingWithE(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].charAt(0) === 'e') {
      result.push(array[i]);
    };
  };
  return result;
};

// Question 2

function selectElementsStartingWithVowel(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].charAt(0).match(/[aeiou]/)) {
      result.push(array[i]);
    };
  };
  return result;
};

// Question 3

function removeNullsFromArray(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== null) {
      result.push(array[i]);
    };
  };
  return result;
};

// Question 4

function removeNullsAndFalseFromArray(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== null && array[i] !== false) {
      result.push(array[i]);
    };
  };
  return result;
};

// Question 5

function reverseEveryElementInArray(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result.push(array[i].split('').reverse().join(''));
  };
  return result;
};

// Question 6

function dropFirstThreeElements(array) {
  array.splice(0, 3);
  return array;
};

// Question 7

function addElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array;
};

// Question 8

function sortArrayByLastLetterOfEachWord(array) {
  array.sort(function(a, b) {
    var aLastLetter = a.charAt(a.length -1)
    var bLastLetter = b.charAt(b.length -1);
    return aLastLetter < bLastLetter ? -1 : aLastLetter > bLastLetter ? 1 : 0;
  });
  return array;
};

// Question 9

function returnFirstHalfOfString(string) {
  var midpoint = Math.ceil((string.length) / 2)
  var result = string.split('').splice(0, midpoint).join('');
  return result;
};

// Question 10

function makeNumberNegative(number) {
  return number < 0 ? number : number * -1;
};

// Question 11

function separateArrayIntoEvenAndOddNumbers(array) {

};

// Question 12

function numberOfElementsThatArePalindromes(array) {

};

// Question 13

function shortestWordInArray(array) {

};

// Question 14

function longestWordInArray(array) {

};

// Question 15

function arrayTotal(array) {

};

// Question 16

function doubleArray(array) {

};

// Question 17

function averageOfArray(array) {

};

// Question 18

function removeElementsGreaterThanFive(array) {

};

function isLessThanFive(element) {

};

// Question 19

function convertArrayToObject(array) {

};

// Question 20

function getLettersInArrayOfWords(array) {

};

// Question 21

function swapKeysAndValuesInObject(object) {

};

// Question 22

function addKeysAndValues(object) {

};

// Question 23

function removeCapitalLettersFromString(string) {

};

// Question 24

function everyPossiblePairing(array) {

};

// Question 25

function roundUpNumber(number) {

};

// Question 26

function roundDownNumber(number) {

};

// Question 27

function formatDateNicely(date) {

};

// Question 28

function getDomainNameFromEmailAddress(email) {

};

// Question 29

function titleizeString(string) {

};

// Question 30

function checkStringForSpecialCharacters(string) {

};

// Question 31

function getUpperLimitOfRange(range) {

};

// Question 32

function squareRootOf(number) {

};

// Question 33

function callMethodFromString(string) {

};

// Question 34

function isA2015BankHoliday(date) {

};

// Question 35

function convertToRomanNumerals(number) {

};
