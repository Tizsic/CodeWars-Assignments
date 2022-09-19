/* 

question can be found at: https://www.codewars.com/kata/582cb0224e56e068d800003c

Nathan loves cycling.

Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:

time = 3 ----> litres = 1

time = 6.7---> litres = 3

time = 11.8--> litres = 5

*/

function litres(time) {
    return Math.floor(time * 0.5);
  }

  /*
    the code above takes the time in hours, then multiplies it by 0.5 to determine the number of litres Nathan drinks.
    the Math.floor() function is used to round the number down to the nearest whole number. It is an inbuilt function in javascript.
  */