//Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects 
//into a bunch of variables, as sometimes that’s more convenient.

//ARRAY DESTRUCTURING
//------------------1--------------
const arr = ["geeth","anjali"]
let [fname , lname]= arr
console.log(fname);

//---------2------------------
let arr2 = [1,2,32,5,6]
let [first, sec,...rest]= arr2
console.log(first);
console.log(sec);
console.log(...rest);
console.log(rest[0]);

//------3-
let [onw, , two] = arr2
console.log(two);


const user= {name:"anju", age:22}
for(let key in user){
    console.log(`${key} ,${user[key]}`);
}
// const user = {}

// [user.name, user.surname] = "john kora".split(" ")
//DESTRUCTURING HELPS IN ITERATING CAN BE USED INSTEAD OF FOR..OF

//----------------OBJECT DESTRUCTURING-------------------
let options = {
    title: "Menu",
    width: 100,
    height: 200
  };

  //Properties options.title, options.width and options.height are assigned to the corresponding variables.
  let {title,manju,height}=options
  console.log(title);
  console.log(manju);////////////////////should be the same value
  
  //{sourceProperty: targetPropwrty}
  let{width: w, height: h, tittle}=options;
  console.log(w);
  console.log(h);
  console.log(tittle);
  
  

