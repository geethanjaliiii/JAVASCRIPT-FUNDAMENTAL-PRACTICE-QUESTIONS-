const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
const dataReceived= false;
if(dataReceived){
    resolve("dataReceived")
}else{
    reject("data not received")
   
}
    },5000)
})

 async function getData() {
    console.log("above function");
    
    try{
        console.log("the function will stop exec only when it see await");
        
       const data = await p
       console.log(data);///////since error occured moved to catch

       console.log("after returning data");
       
    }
    catch(err){
console.log(err);
console.log("hii");

    }
    console.log("below function");
}
getData()
