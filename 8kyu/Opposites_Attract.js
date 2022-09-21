/*

Question Link: https://www.codewars.com/kata/555086d53eac039a2a000083

Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.


*/

function lovefunc(flower1, flower2){
    if(flower1 % 2 == 1 && flower2 % 2 == 0){
      return true
    }else if(flower1 % 2 == 0 && flower2 % 2 == 1){
      return true
    }else{
      return false
    }
    // moment of truth
  }

  /*

    This function checks if the first flower has an odd number of petals and the second flower has an even number of petals.
    It also checks if the first flower has an even number of petals and the second flower has an odd number of petals.
    If either of these conditions are true, it returns true.
    If neither of these conditions are true, it returns false.

  */