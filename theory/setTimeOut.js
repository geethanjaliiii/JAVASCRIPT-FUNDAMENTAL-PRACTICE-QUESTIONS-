// function x() {
//     for (let i = 0; i < 5; i++){
//     setTimeout(() => {

//             console.log(i);
//         }
//     , i*3000)
//     //i = 3;
// }
// }
// x()
//THR SETTIMEOUT FORMAS A CLOSURE WHICH IS WRAPPED INSIDE A FUNCTION IT REMEMBERS WHERE IT IS CREATED

// function y() {
//     for (var i = 0; i < 5; i++){
//     setTimeout(() => {
//             console.log(i);
//         }
//     , i*3000)
//     }
// console.log("Using var the var is function scope, in previous case let is block scope it creates new values to i");
// }
// y()

// //in previous case we have value of i so its giving  55555555555,so we want new copies of i,so we can create a closure
// function z() {
//     for(var i =0;i<5;i++){
//         function close(x){
//             setTimeout(()=>{
//                 console.log(x);
                
//             },x*1000)
//         }
//         close(i)
//     }
// }
// z()

/////////////////////////////////////////////////////////////////////////////////////////////////////
//----------------------setInterval
const start = new Date()
const timer = setInterval(()=>{
    
    console.log("setTimeInterval runnung at ");}
    ,2000)


const stopTimer= setTimeout(()=>{
    clearInterval(timer);
    const stop =new Date()-start
    console.log("stopped at",stop);
},5000)