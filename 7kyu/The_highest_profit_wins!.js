/* 

Question link: https://www.codewars.com/kata/559590633066759614000063

Story

Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task

Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)

[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
Remarks

All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

*/

function minMax(arr){
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return [min, max];
  }

  /* 
  
  the ...arr is the spread operator, which is used to expand an iterable object into the list of arguments.
  using Math.min and Math.max to find the min and max values in the array.
  we then store and return these values
  
  */
