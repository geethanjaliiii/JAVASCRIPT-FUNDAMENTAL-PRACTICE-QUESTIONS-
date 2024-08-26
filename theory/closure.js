//---------CLOSURE-----------
//---FUCTION ALONG WITHNITS LEXICAL SCOPE(LOCAL MEM + REFERENCE TO parent LOCAL MEMORY)
//SCOPE IS WHERE THE AREA THAT IS ACCESIBLE

// function a(){
//     var a =100;
//     function b(){
//         console.log(a);
//     }
//     var a =90// it gives 90 as it REMEMBERS THE FUNCTION ALONG WITH THE REFENCE TO THE VARIABLE(MEMORY LOCATION) NOT THE VALUE OF VARIABBLE
//   return b
// }

//  const z = a()// the function a return function b
//  console.log(z);// to know what is inside it it gives function b
 
// z()// when u execlute z you actually exc b
//it gives o/p 100 ,even if the function a and var a have been removed from its lexical scope ,function b still remembers where it was created and remembers the variable
 //THE VALUE OF A IS NOT GARBAGE COLLECTED

 //////////////////////////////////////////////////////////////////////////////


 function c(){
    var a =1;
    function x(){
        var b = 2
        function y(){
            let c =3;
            console.log(a,b,c);
        }
       return y
    }
    return x;
 }
 const d =c()()()

 ////////////////////////////////
 //-------USES OF CLOSURE-------------------------
 //1.module design pattern
 //2.currying
//  3.function like once
//  4.memoize
// 5.setTimeout
// 6.iterators

 