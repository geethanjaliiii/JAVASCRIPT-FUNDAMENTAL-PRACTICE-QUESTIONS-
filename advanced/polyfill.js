// tranferpile

//before running tranferpile
// let height = null||undefined;
// height = height ?? 100

// console.log(height);//100

// //after running tranferpile
// height = (height!==undefined && height!== null)?height:50
// console.log(height);//100

//polyfill

//without polyfill
let num = 1.24;

console.log(Math.trunc(num));


//with polyfill
num = 0.56

  let  math = function(){
        return num<0?Math.ceil(num):Math.floor(num)
    }
let p =Math.ceil(2.5)
let q =Math.floor(2.5)
p
q
console.log(p);
console.log(Math.trunc(-1.67));
console.log(Math.trunc(1.67));

console.log(math(num));
