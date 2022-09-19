/* 

Question can be found at: https://www.codewars.com/kata/5ab6538b379d20ad880000ab/javascript

You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

Example(Input1, Input2 --> Output):

6, 10 --> 32
3, 3 --> 9

Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.

*/

// My solution

const areaOrPerimeter = function(length , width) {
    if (length === width ){
        return length * width;
    } else {
        return (length + width) * 2;
    }
  };

  //the code accepts two values(a length and a width).
  //it then compares the values to determine if it is a square(length and with are equal) or a rectangle(length and width are not equal).
  //if the values are the same, meaning its a square, it multiplies the length by width to determine its area.
  //if the values are not the same, meaning its a rectangle, it adds the length and width together, then multiplies the sum by 2 to determine its perimeter.



