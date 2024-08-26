function greet(name,callback){
    console.log(`hii ${name}`);
    callback(name);
    
}
function goodnight(Name){
    console.log(`goodnight ${Name}`);
    
}

greet("ANJU",goodnight)

///////////////////////

function hii(cb){
    console.log("hii");
    
cb()
}
function halo(){
    console.log("halo");
    
}
hii(halo)