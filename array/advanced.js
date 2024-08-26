//1.reduce smallest  num
const arr=[1,2,5,4,8,9];
const sm = arr.reduce((small,curr)=>curr<small?curr:small,Infinity);
sm

//2.smallest odd num
const smallOdd = arr.filter((arr)=>arr%2==1).reduce((small,curr)=>curr<small?curr:small,Infinity)
smallOdd

//print non repeating elements in a string
const str = "hallooo"
const unique = [...new Set(str)]
unique

//sum of elements in nested array 
//with flatmap
const array = [1,2,[3,3],[4,5,[6,7]],9];
const total = array.flat(Infinity).reduce((sum,curr)=>sum+=curr,0)
total

//w/o flat-using recursion
function sumnest(arr){
let sum = 0
for(let i of arr){
    if(Array.isArray(i)){
        sum+=sumnest(i)
    }
    else{
        sum+=i
    }
}
return sum
}
console.log(sumnest(array));
