"use strict"

function isLeapYear(year) {
    if (year%4===0){
         console.log(year,'is a leap year');
    }
    else{
         console.log(year,'is not a leap year');
    }
}
isLeapYear(2003)