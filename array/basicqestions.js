
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


//How do you find the index of a specific element in an array?
console.log(arr.indexOf("mery")); arr
console.log(arr.indexOf("merrry"));//returns "-1" if not found

//How do you check if an array includes a certain element?
console.log(arr.includes("hari"));

//camalize string

const str = "my-background-color"
const camel = str.split("-").map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)).join("")

camel;

//Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher 
//or equal to a and lower or equal to b and return a result as an array

function filterRange(arr, a, b) {
    return arr.filter((elem) => (elem >= a && elem <= b))
}
console.log(filterRange([1, 45, 5, 7, 8, 2, 9, 15], 7, 18));

//Write a function filterRangeInPlace(arr, a, b) that gets an array 
//arr and removes from it all values except those that
// are between a and b. The test is: a ≤ arr[i] ≤ b.
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= a || arr[i] >= b) {
            arr.splice(i, 1);
            i--//its index should be reduced if deleted
        }
    }
}
let array = [1, 3, 4, 5, 6, 8, 0]
filterRangeInPlace(array, 1, 5);
console.log(array);

//Sort in decreasing order
let array1 = [2, 3, 4, 56, 6, 67, 7];
const sortArray = array1.sort((a, b) => (a - b));
sortArray

// !!!!!!!!!!!!!error!!!!!!!!
//{square bracket wont return anything}

// const sortedArray = array1.sort((a,b)=>{a-b});

//Create a function copySorted(arr) that returns such a copy.

//without builtin
let Array = ["HTML", "JavaScript", "CSS"];

function copysorted(arr) {
    return arr.slice().sort()
}
console.log(copysorted(Array));
console.log(Array);

//WITH BUILIN
function copySorted(arr) {
    return arr.toSorted()
}


console.log(copySorted(Array));
Array;

//You have an array of user objects, each one 
//has user.name. Write the code that converts it into an array of names.

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

const users = [john, pete, mary];
let names = users.map(item => item.name)
names
users

//Write the code to create another array from it, of objects with 
//id and fullName, where fullName is generated from name and surname

let johny = { name: "John", surname: "Smith", id: 1 };
let peter = { name: "Pete", surname: "Hunt", id: 2 };
let marry = { name: "Mary", surname: "Key", id: 3 };

let userss = [johny, peter, marry];
let usersMapped = userss.map(user => ({ fullName: `${user.name} ${user.surname}`, id: user.id }))
usersMapped

//Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
let joh = { name: "John", age: 25 };
let pet = { name: "Pete", age: 30 };
let mar = { name: "Mary", age: 28 };

let userdetails = [pet, joh, mar];
function sortByAge(users) {
    return users.sort((a, b) => a.age - b.age).map(user => user.name)
}

console.log(sortByAge(userdetails));


//shuffle array

let newarr = [2, 4, 6, 8];

function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.5)
}
console.log(shuffleArray(newarr));


//avg age
let jake = { name: "John", age: 25 };
let peper = { name: "Pete", age: 30 };
let hary = { name: "Mary", age: 29 };

let ppl = [jake, peper, hary]
const getAvgAge = (arr) => {
    return arr.reduce((avg, curr) => avg + curr.age, 0) / arr.length
}

console.log(getAvgAge(ppl));


//find unique elements
function unique(arr) {
    return arr.reduce((acc, curr) => {
        if (!acc.includes(curr)) {
            acc.push(curr);
        }
        return acc;
    }, [])
    //return [...new Set(arr)]
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings));

//or
console.log([...new Set(strings)]);


//Create a function groupById(arr) that creates 
//an object from it, with id as the key, and array items as values.
let people = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];
const maap = people.reduce((obj, user) => {
    obj[user.id] = user;
    return obj
}, {})
console.log(maap);


//reverse an array
array;
const rev = array.reverse();
rev


//concat
console.log(Array.concat(arr));
;

//convert array to string
console.log(arr.join(""));
console.log(arr.toString());


//find max number
array.push(1, 2, 3, 3, 15);
array
console.log(Math.max(...array));
console.log([...new Set(Array)]);
// max using reduce
const max = array.reduce((max, curr) => (curr > max ? curr : max), -Infinity)
max;

//find intersection of arrays
//1.filter
arr1 = [3,4,6,8,7,9]
array
const intersec = array.filter((value)=>arr1.includes(value));
intersec
//2.normal loop

const arr2 = []
array
for(let i of array){
    for(let j of arr1){
        if(i===j){
            arr2.push(array[i]);
            break;
        }
    }
    
}
arr2
