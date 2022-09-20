/* 

Question Link: https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example

filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

*/

function filter_list(l) {
    // Return a new array with the strings filtered out
    
    let newArray = [];
    for (let i = 0; i < l.length; i++) {
      if (typeof(l[i]) === 'number') {
        newArray.push(l[i]);
      }
    }
    return newArray;
  }

  /*
  
  Firstly, we create a new array to store the numbers in.
  Then, we loop through the array and check if the type of the value is a number.
  If the value is a number, we push it to the newArray.
  Finally, we return the newArray.
  */