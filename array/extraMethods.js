//flat

//-flat nested arrays
const arr = [1,2,[3,4],[4,5,[2,4,[5,6,7]]]]
const arr2 = arr.flat(1);
arr2
console.log(arr.flat(Infinity));


//flatmap
//-combinaton iof map followed by flat()
//adds a callback to eacg elem and thrm flat to one level
const arr3 =[1,2,3];
const arr4 = arr3.flatMap((num)=>(num===2?[2,2]:1));
arr4
const arr5 = arr3.map((num)=>(num===2?[2,2]:1)).flat();
arr5;
