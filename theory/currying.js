//currying
function add(a,b,c){
    return a+b+c
}
function sum(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
const summ = sum(1)(2)(3)
summ
console.log(add(1,2,3));


//case 3

function summm(a,b){
    return a+b;
}
function curry(f){
    return function(a){
        return function(b){
            return f(a,b)
        }
        
    }
}

const curriedSum = curry(summm)
console.log(curriedSum(1));  /// -----------even if one argument is not given it doesnt give an error
//--------it will continue working after all arguments are loaded
console.log(curriedSum(1)(2));

console.log(summm(1,2));

//from lodash library
const curried = _.curry(summm)
console.log(curried(1,2));
console.log(curried(1)(2));


//----------------thepry---------------
// currying

// It is a technique in functional programming, that transforms the function of multiple arguments into several functions 
// of a single argument in sequence. 

// Why is currying useful in JavaScript?

// It helps us to create a higher-order function
// It reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility.

// Benefits of Currying:
// Partial Application:

// Currying allows you to fix some arguments of a function and get a new function in return. This is known as partial application.

const add5 = curriedAdd(5);  // Creates a new function that adds 5 to whatever argument it gets
console.log(add5(10)(15)); 
// Code Reusability:

// 2.Curried functions can be reused and composed easily, making your code more modular and flexible.
// Avoids Repetition:

// 3.Currying helps in creating specialized functions from general-purpose functions, reducing the need to write similar functions for slightly different use cases.