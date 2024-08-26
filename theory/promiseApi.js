
///--------------------SUCCESS CASE-----------------------------------------------
// const p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('success at p1'),2000)
// })

// const p2= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const sucess = true;
//         if(sucess){
//             resolve('sucess at p2')
//         }else{
//             reject('error at p2')
//         }
//     },1000)
// })

// const p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('sucess at p3'),3000)
// })
//-----------------------------------Promise.all([])------------------------------------

// Promise.all([p1,p2,p3]).then((res)=>{console.log(res);}).catch((err)=>{console.log(err);
// })
// o/p: [ 'success', 'sucess', 'sucess' ]

//-----------------------------------Promise.allSettled([])------------------------------------
// Promise.allSettled([p1,p2,p3]).then((res)=>{console.log(res);}).catch((err)=>{console.log(err);
// })

// o/p: [
//   { status: 'fulfilled', value: 'success' },
//   { status: 'fulfilled', value: 'sucess' },
//   { status: 'fulfilled', value: 'sucess' }
// ]

//-----------------------------------Promise.race([])------------------------------------
// Promise.race([p1,p2,p3]).then((res)=>{console.log(res);}).catch((err)=>{console.log(err);
// })

//o/p: sucess at p2

//-----------------------------------Promise.any([])------------------------------------
//----------------seeking for 1st sucess
// Promise.any([p1,p2,p3]).then((res)=>{console.log(res);}).catch((err)=>{console.log(err);
// })

//o/p: sucess at p2
//----------------------------reject case= return only the first error--------------------------


const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('success'),2000)
})

const p2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const sucess = true;
        if(sucess){
            resolve('sucess')
        }else{
            reject('error at p2')
        }
    },1000)
})

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>reject('error at p3'),3000)
})
//-----------------------------------Promise.all([])------------------------------------

Promise.all([p1,p2,p3]).then((res)=>{console.log(res);}).catch((err)=>{console.log(err);
})

//o/p: error at p3

//-----------------------------------Promise.allsettled([])------------------------------------


Promise.allSettled([p1,p2,p3]).then((res)=>{console.log(res);console.log("all settled o/p")}).catch((err)=>{console.log(err);
})
// op: [
//     { status: 'fulfilled', value: 'success' },
//     { status: 'fulfilled', value: 'sucess' },
//     { status: 'rejected', reason: 'error at p3' }
//   ]
//   error at p3
Promise.any([p1,p2,p3]).then((res)=>{console.log(res);console.log("any o/p")}).catch((err)=>{console.log(err);
})
//o:p     sucess
// [
//     { status: 'fulfilled', value: 'success' },
//     { status: 'fulfilled', value: 'sucess' },
//     { status: 'rejected', reason: 'error at p3' }
//   ]
//   error at p3
Promise.race([p1,p2,p3]).then((res)=>{console.log(res);console.log("race o/p");
}).catch((err)=>{console.log(err);
})
// sucess----------------all
// any o/p
// sucess
// race o/p
// [
//   { status: 'fulfilled', value: 'success' },
//   { status: 'fulfilled', value: 'sucess' },
//   { status: 'rejected', reason: 'error at p3' }
// ]
// all settled o/p
// error at p3