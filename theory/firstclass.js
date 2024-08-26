// function x(y){
// y()
// }
// x(function(){console.log("hii");
// })

function higherOrder(callback){
    console.log("higherorder running");
     return callback
}


function callback(){
    console.log("call back running");
    
}

higherOrder(callback)()
// function b(callback){
//     console.log("function b will execute");
    
//     callback();
// }
// b(function(){console.log("call back executed");
// })


///////////////
// function b(callback){
//     console.log("function b will execute");
    
//     setTimeout(callback,3000)
// }


// b(function(){console.log("call back executed");
// })

//////////////
// function x(y){
// y("anju")
// }

// x(y=>{console.log("hii",y);
// })