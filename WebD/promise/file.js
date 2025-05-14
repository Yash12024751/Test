
// setTimeout(function(){  
//     console.log("hello0")
// },1500)

// console.log("hello1");
// setTimeout(function(){
//     console.log("hello2");
// },500)

// function f1(){
//     return new Promise(function(res,rej){
//         setTimeout(function(){
//             res("hello3")
//         },1000)
//     })
// }
// function f2(){
//     return new Promise(function(res,rej){
//         setTimeout(function(){
//             res("hello4")
//         },2000)
//     })
// }
// async function fn()
// {
//     console.log("hello5")
//     await f1();
//     console.log("hello6");
//     await f2();
//     console.log("hello7");
// }

// console.log("hello8");


// let p= new Promise(function(res,rej){
//     // console.log("hello")
//     res("problem is resolved")
// })

// async function async() {
    
//     return new Promise(function(res,rej){
//         setTimeout(function(){
//             console.log("new data...")
//             res("data resolved succesfully")
//         },2000)
//     })
// }
// async function async2() {
    
//     return new Promise(function(res,rej){
//         setTimeout(function(){
//             console.log(" data2...")
//             res("data2 resolved succesfully")
//         },4000)
//     })
// }
// console.log("data fetching1..")

// async().then(function(res){
//     console.log(res)
//     console.log("data fetching2..")

// async2().then(function(res){
//     console.log(res)
// })
// })



function getData(dataId){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log("data",dataId)
            res("success")
        },2000)
    });
}

async function getalldata() {
    console.log("fetching data1..")
    await getData(1)    
    console.log("fetching data2..")
    await getData(2)    
    console.log("fetching data3..")
    await getData(3)    
    console.log("fetching data4..")
    await getData(4)    
    console.log("fetching data5..")
    await getData(5)    
}