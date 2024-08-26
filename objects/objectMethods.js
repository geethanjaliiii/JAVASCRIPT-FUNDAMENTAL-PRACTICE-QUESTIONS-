  //1. Object.assign(target,source)
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  const per2={
    fname:"anju",
    lname: "anjali"
  }
  Object.assign(per2,person1)
  console.log(per2);
//   {
//     fname: 'anju',
//     lname: 'anjali',
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 50,
//     eyeColor: 'blue'
//   }

//2
console.log(Object.entries(per2));
console.log(Object.values(person1));

const fruits = {Bananas:300, Oranges:200, Apples:500,Apple :500};
const myMap = new Map(Object.entries(fruits))
console.log(myMap);
