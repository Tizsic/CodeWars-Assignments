/*

Question link: https://www.codewars.com/kata/515e271a311df0350d00000f

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

*/

function squareSum(numbers){
    if (numbers.length == 0){
      return 0;
    }
    else{
        for(let i = 0; i < numbers.length; i++){
        numbers[i] = numbers[i] ** 2; 
      }
    } 
    
    return numbers.reduce((a , b) => a + b);
  }

  /* 
  
  the first if statement checks if the array is empty, if it is, it returns 0.
  the else statement squares each number in the array.
  the reduce method adds all the numbers in the array together
  
  */