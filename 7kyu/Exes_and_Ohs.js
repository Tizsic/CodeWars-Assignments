/*

Question Link: https://www.codewars.com/kata/55908aad6620c066bc00002a

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

function XO(str) {
    str = str.toLowerCase();
    let xCounter = 0;
    let oCounter = 0;
    let i = 0;
  
    
    for(i = 0; i < str.length; i++){
      if(str[i] == 'x'){
        xCounter++;
      }
      else if(str[i] == 'o'){
        oCounter++;
      }
    }
    
    
    if(xCounter == oCounter){
      return true;
    }
    else 
      return false;
  
  }

  /*
  
    str.toLowerCase() makes the string lowercase.
    xCounter and oCounter are counters that increase by 1 for every x or o in the string.
    for loop iterates through the string and checks if the character is an x or an o.

    if xCounter and oCounter are equal, it returns true, otherwise it returns false.

  
  */