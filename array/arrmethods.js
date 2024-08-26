
let arr = ["anju", "manju", "chinju", "ranju"];
//pop
arr.pop()
console.log(arr);

//push
arr.push("janju");
arr.push("malu", "paru")
console.log(arr);
//here arr works as a queue-LILO

//shift
console.log(arr.shift());//removing anju
console.log(arr);

//unshift
arr.unshift("mery", "hari")
console.log(arr);
//here arr as stack

//toString
//Arrays have their own implementation of toString method that returns a comma-separated list of elements.
let array = [1, 2, 3, 4];
console.log(array.toString());
console.log(arr.toString());

//same same
console.log([] + "1" + 2);
console.log("" + "1" + "2");


console.log([1] + "1" + 2);
//console.log([a]+"1"+2+3); error
console.log([] + "1" + 2);

//dont compare array with ==
console.log(array);
//splice

//1.wlete elememnt
array.splice(2, 1)// from index 2 delete one elem
console.log(array);

//2.delete and replace
arr.splice(2, 3, "hi", "halo", "wow");
arr

//slice-simpler
//copying from 2 to 6
console.log(arr.slice(2, 6));

//no change for arr
arr

console.log(arr.slice(3));

//concat
const arr1 = [1, 2];
console.log(arr1.concat([3, 4], [5, 6]));
arr1//no change in original array
console.log(arr1.concat(arr1, [3, 4]));


//forEach-allows a function for each element
arr1.push(3, 4, 5)
console.log(arr1);

arr1.forEach((array) => {
  console.log(array);

})

arr1.forEach((a) => {
  console.log(2 * a);

})

arr1.forEach(a => { console.log(2 * a); })
arr1;//no change in original array
let sum = 0;
arr1.forEach(arr => {
  sum += arr;
})
console.log(sum);




//finding
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" }
];
const user = users.find(item => item.id === 1)
console.log(user);

const user1 = users.findIndex(item => item.id === 1)
console.log(user1);


//transforming array

//map-calls function for each element in an array and returns a function-not possible with foreach
arr;
const len = arr.map(item => item.length)
len;

//sort-items are sorted as strin

arr
// let sort =arr.sort()
// sort;
//original array is also changed
console.log(arr);

//numeric sort

const anju = [21, 8, 3, 45];
console.log(anju.sort());
//not sorted correctly ,sorted as a string

//correct approach
anju
const sortt = anju.sort((a, b) => a - b)
sortt;
anju


//reverse
//reverse the order of elemts in arr
//reversing is permanent
arr;
console.log(arr.reverse());
arr;


//filter
//find will only return 1 st elem that satisfy the cond ,filter will return an array of elements
//original array is not changed
const arr3 = [4, 5, 2, 0, -1, 5];

const arr5 = arr3.filter((item) => isprime(item))

function isprime(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}
arr5


arr3.splice(2, 0, 2);
arr3
const arr4 = arr3.filter((item) => {
  if (item <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(item); i++) {
    if (item % i === 0) return false;
  }
  return true
}
)
arr4
//transform an array

//map -original array is not changed
//return a new array
arr;
const maplen = arr.map(item => item.length)
console.log(maplen.sort());
console.log(maplen.sort()[0]);
console.log(arr);

//forEach
arr4
const hi = arr4.forEach(item => { item * 2 });
hi;
//no new array is created
arr.forEach((item) => { console.log(item.length) });
arr;

arr4.forEach((item) => { console.log(item * 2) });
//map vs foreach
//map is used to create a new array,it always return ana array
//used when u want to tranform an array
//chaining is possible

//forEach
//used to perform an operation on array
//mainly used in consoling and simple modifying
//doesnt return an array-shows undefined

arr1.forEach(a => { console.log(2 * a); })
arr1;//no change in original array

//split-string method
//- split the string to an array with certain delimitters [str.split(delim)]
const str = "exam";
const splitted = str.split(",")
console.log(str.split(""));

splitted
const splitt = str.split(" ")
splitt
//simply make an array for string
console.log(str.split());

console.log(str.split(" "));//if there is space no splitting
console.log(str.split(""));//if there is space ,split into individual array elements

//join-array method
//convert to string
splitted
console.log(splitted.join(""));
console.log(splitted.join());
console.log(splitted.join(" "));
console.log(splitted.join("*"));
//joining with toString
console.log(splitted.toString());

//combined
console.log(str.split("").join(""));

arr
console.log(arr.join(" "));
arr1;
console.log(arr1.join(""));


//reduce-
//used to calculate a single value based on array
//a function is applied to all elements and carries on its result to each function call

//arr.reduce((acc,cur,index,array)=>{},[initial])
const amal = [1, 2, 3, 4, 5];
const amalSum = amal.reduce((sum, curr) => sum + curr, 0)
console.log(amalSum);

//acc-result of previous fun call,its first value is iniitial(if provided)
//cur- current array element
//index -is its position//optional
//array //optional


const amalSuu = amal.reduce((sum, curr) => { sum + curr }, 0);
//if we put the bracket it wont return
amalSuu

const amalSu = amal.reduce((sum, curr) => { return sum = sum + curr }, 0);
amalSu


