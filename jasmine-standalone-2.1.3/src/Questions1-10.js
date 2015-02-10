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

};

// Question 6

function dropFirstThreeElements(array) {

};

// Question 7

function addElementToBeginningOfArray(array, element) {

};

// Question 8

function sortArrayByLastLetterOfEachWord(array) {

};

// Question 9

function returnFirstHalfOfString(string) {

};

// Question 10

function makeNumberNegative(number) {
  
};
