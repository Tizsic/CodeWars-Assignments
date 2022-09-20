/* 
 Question Link: https://www.codewars.com/kata/551f37452ff852b7bd000139

Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)


*/

function addBinary(a,b) {
    let newNum = a + b;
    let newNum2 = newNum.toString(2);
    return newNum2;
  
  }

// this can also be writted as:

function addBinary(a,b) {
    return (a + b).toString(2);
  }

/* 

the toString() method converts a number to a string however, passing the base of (2) as an argument will convert the number to binary.
for more into: https://www.w3schools.com/jsref/jsref_tostring_number.asp

*/