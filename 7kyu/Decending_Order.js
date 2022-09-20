/* 

Question link: https://www.codewars.com/kata/5467e4d82edf8bbf40000155

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:

Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

*/

function descendingOrder(n){
    let myArray = String(n).split("").map((n) => {return Number(n)});
    myArray.sort(function(a, b){return b - a});
    let newArray =  myArray.join("");

    return parseInt(newArray);

  }

  /* 
  
    Firstly, we convert the number to a string, then split it into an array.
    We then map the array to convert the strings to numbers.
    We then sort the array in descending order.
    We then join the array back into a string.
    Finally, we convert the string back into a number and return it.
  
  */
