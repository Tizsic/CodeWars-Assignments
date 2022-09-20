/* 

Question Link: https://www.codewars.com/kata/554b4ac871d6813a03000035

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.

*/

function highAndLow(numbers){
    let newNumbers = numbers.split(" ");
    newNumbers.sort(function(a,b){return b-a});
    return newNumbers[0] + " " + newNumbers[newNumbers.length - 1];
  }


  /* 
  
    the split() method splits a string into an array of substrings, and returns the new array.
    from there, the sort() method sorts the items of an array from highest to lowest and returrn the first and last value of the array
  
  */
