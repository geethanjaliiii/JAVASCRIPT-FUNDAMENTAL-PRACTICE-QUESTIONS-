let arr1 = [1,2,3];
console.log(arr1);

const hello = ()=>{console.log("hii");}
let arr2 = ["halo", {name:"anju ", age: 2}, function(){console.log("how are u")}]

console.log(arr2[0]);// halo
console.log(arr2[1].name);//anju

//console.log(arr2[1]());------------gives error
arr2[2]()//how are u
console.log(arr2[2]);
console.log(arr1[0]);
console.log(arr1[-1]);
