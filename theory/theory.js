
//falsy values

//In JavaScript, every value has a boolean equivalent. This means it can either be 
//evaluated as true (truthy value) or false (falsy value) when used in a boolean context.

// 6 falsy values in js
//checked using Boolean
//return false if falsy
console.log(Boolean(false));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(undefined));

//truthy values that might appear falsy
console.log(Boolean(" "));// an empty object
console.log(Boolean([]));//empty array
console.log(Boolean({}));//empty object
console.log(Boolean("false"));//empty array
console.log(Boolean("0"));//empty array


///////////////////////////////////////////////////////////////////
//----------------------MAP SET-----------------------
let user = new Map();
user.set( 1, "hii")//numeric map
user.set( "1", "hii")//string key 

const key =user.get(1);
key

//----------------------SET------------------
let set = new Set()
set.add("anju")

let john={name: "john" , age: 22}
let sam={name: "sam" , age: 22}
let hari={name: "hari" , age: 42};

set.add(john)

set.add(hari,sam)

for(let user of set){
    console.log(user);
    console.log(user.name);
    
}
//--------------------weakmap--------------------------
// Use case: additional data
// The main area of application for WeakMap is an additional data storage.
//For multiple calls of process(obj) with the same object, it only calculates the result the first time, 
//and then just takes it from cache. The downside is that we need to clean cache when the object is not needed any more.

// If we replace Map with WeakMap, then this problem disappears. The cached result will be removed from 
//memory automatically after the object gets garbage collected.
//When obj gets garbage collected, cached data will be removed as well

//----------------WEAKSET--------

// WeakSet behaves similarly:

// It is analogous to Set, but we may only add objects to WeakSet (not primitives).

// An object exists in the set while it is reachable from somewhere else.

// Like Set, it supports add, has and delete, but not size, keys() and no iterations.

// -----------------Summary
// WeakMap is Map-like collection that allows only objects as keys and removes them together with associated value once they become inaccessible by other means.

// WeakSet is Set-like collection that stores only objects and removes them once they become inaccessible by other means.

// Their main advantages are that they have weak reference to objects, so they can easily be removed by garbage collector.