/* 

Question Link: https://www.codewars.com/kata/56606694ec01347ce800001b/javascript


Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

*/

function isTriangle(a,b,c)
{
   if (a > 0 && b > 0 && c > 0) {
      if (a + b > c && a + c > b && c + b > a) {
        return true;
      } else {
        return false;
        }
   }  else {
      return false;
      }
}

/*

the function accepts 3 arguments, a, b, and c. From there, we can use an if statement to check if the arguments are greater than 0. If they are, we can use another if statement to check if the sum of any two arguments is greater than the third. If it is, we can return true, if not, we can return false. If the arguments are not greater than 0, we can return false.


*/