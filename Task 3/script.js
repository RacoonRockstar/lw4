/**
* Function defines not even number or even
* @param  {number} number - The number variable has to be number.
* @return {number} - Returns number if number not even
*/
var odd = function(number) {
  return number % 2 === 1;
}


/**
* Function defines not even number or even
* @param  {number} number - The number variable has to be number.
* @return {number} - Returns number if number even
*/
var even = function(number) {
  return number === 0 ? false : number % 2 === 0;
}


/**
* Checks whether it is zero or not
* @param  {number} number - The number variable has to be number.
* @return {number} - Returns number if number === 0
*/
var eliminateZero = function(number) {
  return (number === 0);
}


/**
* Receives every second element in the array.
* @return {boolean} - Returns value of function on the counter 'everSecondTimer'
*/
var everySecond = function() {
  return even(++everSecondTimer);
}

/**
* Filter array
* @param  {Array} arr - The initial array.
* @param  {function} filter - Parameter in which filtration will be carried out.
* @return {Array} - Returned a filter Array
*/
function filterArray(arr, filter) {
  var resultArray = [];
  for (i = 0; i < arr.length; i++) {
    if (filter(arr[i])) {
      // TODO: add filtered element in resultArray
      resultArray.push(arr[i]);
    }
  }
  return resultArray;
}

var arr = [0, 1, 2, 3, 4, 0, 5];

function _test() {

  console.log(filterArray(arr, odd)); // [1, 3, 5]

  console.log(filterArray(arr, even)); // [2, 4]

  console.log(filterArray(arr, everySecond)); // [1, 3, 0]

  console.log(filterArray(arr, eliminateZero)); // [1, 2, 3, 4, 5]
}
