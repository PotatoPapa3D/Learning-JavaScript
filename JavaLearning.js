// This is an in-line comment.

/* This is a 
multi-line comment */

// Creating variables for my age, first, and last name and assigning values

let myAge = 32;
var myFirstName = "Papa";
const myLastName = "Potato";
myfullname = myFirstName + " " + myLastName;

// Creating a variable and then assigning it the value of myAge

var wifeAge;
wifeAge = myAge - 3;
wifeFirstName = "Mama";
wifeLastName = myLastName;
wifeFullName = wifeFirstName + " " + wifeLastName;
countWifeFullName = wifeFullName.length;

/// Using Math Operators
addition = 4 + 5;
subtraction = addition - 5;
multiplication = subtraction * 5;
division = multiplication / 5;
/// Add 1
division++;
/// Subtract 1
division--;
/// Creating a remainder variable
remainder =  19 / 4;
/// Creating arrays
myFirstArray = ["BBQ", 365];
nestedArray = [["Stockton", 12], ["Fox", 5]];
const multiDimensionalArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
const subarray = multiDimensionalArr[3]; /// assigns [[10, 11, 12], 13, 14]
const nestedSubarray = multiDimensionalArr[3][0]; /// assigns  [10, 11, 12]
const element = multiDimensionalArr[3][0][1]; /// assigns 11
nestedArray.push(['Curry', 30]); /// adds ['Curry', 30]
nestedArray.pop(); /// drops ['Curry', 30]
nestedArray.shift(); /// drops ["Stockton", 12]
nestedArray.unshift(["Stockton", 12]); /// adds ["Stockton", 12] to beginning

