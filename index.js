function add(a,b){
    return(a+b);
    
   

}
function subtract(a,b){
    return(a-b);

}
function multiply(a,b){
    return(a*b);

}
function divide(a,b){
    return (a/b);

}

function increment(n){
    return ++n;
}

function decrement(n){
    return --n;
}

function makeInt(n){
    return parseInt(n);
    
}
function makeInt(n){
    return parseInt(n,10);

}
function preserveDecimal(n){
    return parseFloat(n);
}


console.log(add(2,4));
console.log(subtract(7,4));
console.log(multiply(2,4));
console.log(divide(8,4));
console.log(increment(100));
console.log(decrement(56));
console.log(makeInt(2));
console.log(preserveDecimal(3.456));