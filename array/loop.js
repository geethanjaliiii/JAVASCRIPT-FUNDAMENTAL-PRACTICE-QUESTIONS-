let fruits = ["Apple", "Orange", "Pear"];

//normal loop
for (let i =0;i<fruits.length ; i++){
    console.log(fruits.at(i));
    console.log(fruits[i]);
}

//with for of
for(let fruit of fruits){
    console.log(fruit);
    
}

//for in -its n object method since arr is an object ,it can use
//but for-in loop is slower for aray
let arr = ["Apple", "Orange", "Pear"];
for(let key in arr){
    console.log(arr[key]);
    
}