'use strict'

function fact(num){  
    let factorial=1;
    if (num<0){
        console.log("can't find the factorial for the negative numbers" );
    }
    else{
        for (let i=1;i<=num;i++) 
        {
            factorial*=i;
        }
        console.log('factorial of number',num,'is =',factorial);
        }
    }

fact(7)