//creating object
const obj = { place: "kattappana" }

//inserting
obj.name = "anju", obj.age = 22;
console.log(obj);

//loop
for (let ob in obj) {
  console.log(ob);

}

//deleting prop
delete obj.place
obj

//checking existance using " in"
console.log("name" in obj);

//editing
obj.name = "anjali"
obj

//printing
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
console.log(salaries["John"]);
console.log(salaries.John);


for (let sal in salaries) {
  //print values
  console.log(salaries[sal]);
  //print keys
  console.log(sal);
  console.log(salaries["sal"]);

  console.log(salaries["John"]);

}

//find sum
let salariees = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for (let sal in salariees) {
  sum += salariees[sal]
}

sum

//multiply all numeric prop by 2
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
function multiplyNumeric(menu) {
  for (let me in menu) {
    if (typeof menu[me] === "number") {
      menu[me] *= 2;
    }
  }

}
multiplyNumeric(menu)
menu
//returning number type
for (let i in menu) {
  if (typeof (menu[i]) === "number") {
    console.log(i);

  }
}
//transforming objects to array
console.log(Object.keys(menu));
console.log(Object.values(menu));
console.log(Object.entries(menu));


let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

//Object.entries(prices) converts your object into an array of [key, value] pairs.
let dob = Object.entries(prices).map((item) => ([item[0], item[1] * 2]))
dob

//Object.fromEntries 
//is a method that takes an array of key-value pairs (like the ones you get from Object.entries) and converts it back into an object.
let double = Object.fromEntries(Object.entries(prices).map((entries) => ([entries[0], entries[1] * 2])))
//convert modified array to obj
prices
double


//sum of propeetiees
let salary = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
const summ = Object.values(salary).reduce((sum, curr) => (sum += curr), 0)
summ

//or
let summm = 0
for (let i of Object.values(salary)) {
  summm += i
}
summm

//----------------------count properties
let user = {
  name: 'John',
  age: 30
};

const count = Object.keys(user)
console.log(count.length);

//--------------------------add function
user.getFullname = function() {return `${this.name}` }
user


const userName =user.getFullname();
console.log(userName);

//-------copy an object-------
//One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, whereas primitive values:
// strings, numbers, booleans, etc – are always copied “as a whole value”.


let object = {
  name: 'John',
  age: 30};

let newObj = object;
newObj.age=27//modifying
object //original object js changed

//--------array also
let hari =[1,2,3]
let anju = hari
anju.push(7)
hari

//primitive-----no change in original
let message="how are you"
let some = message
message
some
let so =some.substring(1,4)
so

//----------------------existance checking-----
let halo = {
  name: 'John',
  age: 30};

console.log("name" in halo );
console.log("place" in halo );

const haloo={}

//noSuchProperty
console.log(haloo.noSuchProperty===undefined);
