/**
 *write a program to calculate the average marks of math biology chemestry physics 
 and bangla  of a student .
 *input:: the first line of the input is the  marks of the five subjects mentioned above respectively.
 *output::
  * print the result in 2 decimal places.
 **/ 

var math = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;
var totalResult = math + biology + chemistry + physics + bangla;
// console.log(totalResult);
var gorResult = totalResult/5;
gorResult = gorResult.toFixed(2);
gorResult = parseFloat(gorResult);
console.log(gorResult);


