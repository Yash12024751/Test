// setTimeout(function(){
//     console.log("hello1");
// },0);

// const p =new Promise(function(res,rej) {
//     rej("hello2");
// })
// p.then(function(msg){
//     console.log(msg);
// }).catch(function(data){
//     console.log(data)
// })

// console.log("hello3");

// micro task queue


// function f1(){
    
//     setTimeout(function(){
//         console.log("account");

//     },2000)
// }
// function f2(){
//     setTimeout(function(){
//         console.log("payment");

//     },1000)
// }
// function f3(){
//     setTimeout(function(){
//         console.log("subscription");

//     },3000)
// }



// function f1() {
//     return new Promise(function(res, rej) {
//         res("hello1");
//     });
// }

// function f2() {
//     return new Promise(function(res, rej) {
//         res("hello2");
//     });
// }

// setTimeout(function() {
//     console.log("hello3");
// }, 0);

// console.log("hello4");

// f2().then(function(data) {
//     console.log(data);
// });

// f1().then(function(data) {
//     console.log(data);
// });


// const data=f1();
// console.log(data);

// const data2=f2();
// console.log(data2);

// const data3=f3();
// console.log(data3);

// console.log("hello1")
//  async function fn(){
//     console.log("hello2")
// }

// fn();
// console.log("hello3");



