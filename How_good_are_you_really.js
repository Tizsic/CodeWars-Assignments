/*

Question Link: https://www.codewars.com/kata/5601409514fc93442500010b/javascript

There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:

Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
FUNDAMENTALS

*/

function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    let average = 0;
    for(i in classPoints){
      sum += classPoints[i];
      average = sum/classPoints.length;
    }
    if(yourPoints > average){
      return true;
    }
    else
      return false;
  }

    /*
    
    The function takes in two parameters, classPoints and yourPoints.
    classPoints is an array of numbers.
    yourPoints is a number.
    it iterates through the array and adds all the numbers together.
    it then divides the sum by the length of the array to get the average.
    it then checks if yourPoints is greater than the average.
    if it is, it returns true, otherwise it returns false.
    
    */