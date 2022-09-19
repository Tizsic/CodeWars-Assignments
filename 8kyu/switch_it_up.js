/* Question can be fount at: https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/javascript

When provided with a number between 0-9, return it in words.
Input :: 1
Output :: "One".

*/


// My solution

function switchItUp(number){
    //Write your own Code!
        switch(number) {
            case 0:
            return 'Zero';
            break;
            case 1:
            return 'One';
            break;
            case 2:
            return 'Two';
            break;
            case 3:
            return 'Three';
            break;
            case 4:
            return 'Four';
            break;
            case 5:
            return 'Five';
            break;  
            case 6:
            return 'Six';
            break;       
            case 7:
            return 'Seven';
            break;
            case 8:
            return 'Eight';
            break;
            case 9:
            return 'Nine';      
        }
    }


// the code aboves takes a number, then tests the number against the switch statement, and returns the string that matches the number.
// However, if the input is over the number 9 or under the number 0, the code would fail.
// A way to remedy this would be to put the code within an IF statement that tests if the entered number is between 0-9. If it is, the code processes. If not, it produces an error message.

function switchItUp(number){
    if (number >= 0 && number <= 9) {
        switch(number) {
            case 0:
            return 'Zero';
            break;
            case 1:
            return 'One';
            break;
            case 2:
            return 'Two';
            break;
            case 3:
            return 'Three';
            break;
            case 4:
            return 'Four';
            break;
            case 5:
            return 'Five';
            break;  
            case 6:
            return 'Six';
            break;       
            case 7:
            return 'Seven';
            break;
            case 8:
            return 'Eight';
            break;
            case 9:
            return 'Nine';      
        }
    } else {
        return 'Please enter a number between 0 and 9';
    }
}

//the above code accepts the user's input, then tests if the input is between 0 and 9. If it is, the code processes. If not, it produces an error message.



