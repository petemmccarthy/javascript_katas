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
  var result = [];
  var even = array.filter(evenNos);
  var odd = array.filter(oddNos);
  result.push(even, odd);
  return result
};

function evenNos(number) {
  return number % 2 === 0;
};

function oddNos(number) {
  return number % 2 === 1;
};

// Question 12

function numberOfElementsThatArePalindromes(array) {
  var result = array.filter(palindrome).length;
  return result
};

function palindrome(word) {
  return word === word.split('').reverse().join('');
};

// Question 13

function shortestWordInArray(array) {
 array.sort(function(a, b) {
  return a.length - b.length;
 });
 return array[0];
};

// Question 14

function longestWordInArray(array) {
  array.sort(function(a, b) {
    return b.length - a.length;
 });
  return array[0];
};

// Question 15

function arrayTotal(array) {
  var result = array.reduce(function(a, b) {
    return a + b;
  });
  return result;
};

// Question 16

function doubleArray(array) {
  var result = array.concat(array);
  return result;
};

// Question 17

function averageOfArray(array) {
  var result = array.reduce(function(a, b) {
    return a + b;
  });
  return parseFloat((result / array.length).toFixed(1));
};

// Question 18

function removeElementsGreaterThanFive(array) {
  var result = array.filter(lessThanFive);
    return result;
};

function lessThanFive(element) {
  return element <=5;
};

// Question 19

function convertArrayToObject(array) {
  var result = {};
  for (var i = 0; i < array.length; i++)
    result[i] = array[i];
    return result;
};

// Question 20

function getLettersInArrayOfWords(array) {
  var newArray = [];
  var result = [];
  for(i= 0; i < array.length; i++) {
    newArray.push(array[i].split(''));
  };
  return (result.concat.apply(result, newArray)).sort();
};

// Question 21

function swapKeysAndValuesInObject(object) {
  var result = {};
  for(var key in object) {
    result[object[key]] = parseInt(key);
  };
  return result;
};

// Question 22

function addKeysAndValues(object) {
  var result = 0;
  for(var key in object) {
    result += parseInt(key) + parseInt(object[key])
  };
  return result;
};

// Question 23

function removeCapitalLettersFromString(string) {
  var words = string.split(' ');
  var tempArray = []
  for(i = 0; i < words.length; i++) {
    var noUpperCase = words[i].replace( /[A-Z]/g, '')
    tempArray.push(noUpperCase);
  };
  return tempArray.join(' ');
};

// Question 24

function everyPossiblePairing(array) {
  var result = [];
    for(var a = 0; a < array.length - 1; a++) {
      for(var b = 1; b < array.length; b++) {
        if (array[a] != array[b]) {
          pairs = [array[a], array[b]];
          result.push(pairs);
        };
      };
    };
  return result;
};

// Question 25

function roundUpNumber(number) {
  return Math.ceil(number);
};

// Question 26

function roundDownNumber(number) {
  return Math.floor(number);
};

// Question 27

function formatDateNicely(date) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  var currentMonth = months[date.getMonth()]
  return date.getDate()+ '-' +currentMonth+ '-' +date.getFullYear();
};

// Question 28

function getDomainNameFromEmailAddress(email) {
  return email.split('@')[1].split('.')[0];
};

// Question 29

function titleizeString(string) {
  return string.toLowerCase().replace(/^.|\s\S/g, function(a) {
    return a.toUpperCase();
  });
};

// Question 30

function checkStringForSpecialCharacters(string) {
  if (string.match(/[^A-Za-z0-9\-]/)) {
    return true;
    }
      else
    {
      return false;
  }
};

// Question 31

function getUpperLimitOfRange(range) {
  return range[(range.length - 1)];
};

// Question 32

function squareRootOf(number) {
  return Math.sqrt(number);
};

// Question 33

function callMethodFromString(string) {
  var stringFunction = string +"()";
  return eval(stringFunction);
};

function sayHello() {
  return 'Hello!'
}

// Question 34

function isA2015BankHoliday(date) {
  holidays = ['1/1/2015', '3/4/2015', '6/4/2015', '4/5/2015', '25/5/2015', '31/08/2015', '25/12/2015', '28/12/2015']
  currentDate = date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear();
  if(holidays.indexOf(currentDate) >= 0) {
    return true
  } else {
    return false;
  };
};

// Question 35

function convertToRomanNumerals(number) {
  var numberAsArray = number.toString().split('')
  var oneToTen = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']
  var tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', 'C']
  var hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', 'M']

  if (number === 0) {
    return 'n/a'
  } else if (number <= 9) {
    return oneToTen[numberAsArray[0]];
  } else {
    return tens[numberAsArray[0]] + oneToTen[numberAsArray[1]];
  };
};
