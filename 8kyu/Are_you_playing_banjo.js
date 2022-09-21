/*

Question Link: https://www.codewars.com/kata/53af2b8861023f1d88000832

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.


*/

function areYouPlayingBanjo(name) {
    let firstLetter = name.charAt(0).toLowerCase();
    
    if (firstLetter === 'r') {
      return name + " plays banjo"
    } else {
      return name + " does not play banjo"
    }
    }

    /* 
        The function takes in a name as a string.
        The function uses the charAt() method to get the first letter of the name.
        The function uses the toLowerCase() method to make the first letter lowercase.
        The function uses an if statement to check if the first letter is an r.
        If the first letter is an r, it returns the name + " plays banjo".
        If the first letter is not an r, it returns the name + " does not play banjo".
    */