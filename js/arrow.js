// function declaration
// function add(first, Second){
//     const total = first + Second;
//     return total;
// }

const number = 56;

// function expression
const add1 = function add1(first, second){
    const total = first + second;
    return total;
}
// function expression with anonymous function
const add2 = function (first, second){
    const total = first + second;
    return total;
}

function add(first, second){
    return first + second;
}


const add5 = function(first , second){
    return first + second;
}
// arrow function
const add8 = (first, second) => 5 + 9;


const result = add8(50, 50);
console.log(result);

// interview question : differences between 
// function declaration, function expression and arrow function