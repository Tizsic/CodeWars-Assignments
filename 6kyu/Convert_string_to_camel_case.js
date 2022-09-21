/*

Question Link: https://www.codewars.com/kata/517abf86da9663f1d2000003


Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

*/

function toCamelCase(str){
    let newStr = "";
    if(str){
      let wordArr = str.split(/[-_]/g);
      for (let i in wordArr){
        if(i > 0){
          newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
        }else{
          newStr += wordArr[i]
        }
      }
    }else{
      return newStr
    }
    return newStr;
  }


    /* 
    
    First we create a new string variable to store the new string.
    If a string is passed, we split the string into an array of words.

    /g is a flag that tells the regex engine to search for all matches in the string, not just the first one.
    /-_/g means that the regex engine will search for all matches of - or _ in the string.

    so for the line of code: let wordArr = str.split(/[-_]/g);
    if the string is "the-stealth-warrior", the wordArr will be ["the", "stealth", "warrior"]

    within the for loop, we check if the index is greater than 0. If it is, we capitalize the first letter of the word and add it to the new string variable.
    If the index is 0, we just add the word to the new string variable.

    We then return the value.
    
    */