// function fn(){
// setTimeout(function fn() {
        // console.log("hello 1");
//     },1000);
// setTimeout(function fn() {
//         console.log("hello 2");
//     },2000);
// setTimeout(function fn() {
//         console.log("hello 3");
//     },3000);
// setTimeout(function fn() {
//         console.log("hello 4");
//     },0000);
// }
// fn();
// console.log("hello world");
// console.log("i am yash ");

// console.log("javascript");
// var ,let ,constant
// var a=10;
// var b="hello"
// var c={};
// var e=function(a,b){return a+b};
// console.log( typeof a)

// function fn(a,b) {
//     return  a+b;
// }
// console.log (fn(3,4));


// var a=10;
// var b=20;

// function fn(a,b) {
//     console.log(a+b)
//     return a+b;
// }

// fn(3,5);

// var x=1;
// f1();
// function f1 () {
//     // var x =10;
//     console.log(x);
//     var x=10;
//     f2();
//     console.log(x);
// }
// function f2 () {
//     console.log(x);
//     var x =20;
//     console.log(x);
// }
// // f2();

// lacksical chaining 
// var a=10;
// f1();
// function f1() {
//     var a=5;
//     f2();
//     function f2()
//     {
//         // var a=100;
//     }
//         f3();
//         function f3() {

//             {
//                 console.log(a);
//             }
//         }
// }
// // f1();
// var a= function (){console.log("hello")}
// {console.log("hello")};
// a();

// function f1(a,b,fn) 
// {
//     console.log(fn(a,b));
// }


// var sum1=function(a,b) {return a+b};
// var multiply=function(a,b) {return a*b};
// var divide=function(a,b) {return a/b};

// f1(3,2,sum1 );

// function f(a) {
//     if (a==='+'){
//         return function(a,b)
//     }
// }



// closure

// var x=1;
// f1();
// func();
// function func()
// {
//     console.log(func);
// }


// function f1() {
//     var x=2;
//     var y=3;
//     f2();
//     function f2()
//      {
//         var x =4;
//         var z =5;

//         function f3(){
//             console.log(x);
//         }
//         return f3();
//     }
//     // return f2();
//     // var fn=f2();
//     // console.log(fn);
// }


// function one() {
//     console.log("one");
//     two();
// }

// function two() {
//     console.log("two");
//     three();
// }

// function three() {
//     console.log("three");
// }

// one();
// two();
// three();
// console.log(window)

// let arr=[1,2,3,4,5];
//  const arr2 =arr.map(function(val,idx,arr) {
//         console.log(val,idx,arr);
// } )



//  const arr2=arr.filter(fuction(val,idx,arr){
//         if(val%2===0) {
//                 return true;
//         }
//         else(){

//                 return false;
//         }
//  })


// let dateobj = Date();
// console.log(dateobj); date time print 


// let i =0;
// let interval=setInterval(function(){
//     console.log(i);
//     if (i===5)
//         clearInterval(interval);
//     i++;   

// },1000)


// clearInterval(interval);


// setTimeout(function(){
//    alert("popup after 5 sec");
// },5000)


// let dateobj = Date.now();
// console.log(dateobj);




// let d1 =Date.now();

// setInterval(function () {
//     let d2 =Date.now();
//     console.log(d2-d1);

// },1000)



// setInterval(function(){

//     const date = new Date();
//     let hours = date.getHours();
//     let mintues =date.getMinutes();
//     let second = date .getSeconds();
//     // console.log(${hours},${mintues},${second})
//     // console.log(date.getSeconds());
//     let   h-box = document.getElementById("h-box");
//     let min-box = document.getElementById("min-box");
//     let sec-box = document.getElementById("sec-box");

// },1000)


// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + "from apna college";
// console.log(h2.);


// let element = document.querySelectorAll(".box");
// console.log(element);
// console.dir(element[0] .innerText);
// element.innerText="yash";

// element[0].innerHTML ="yash";
// element[1].innerText ="my box";
// element[2].innerText ="harsh";
//  let idx= 1;
// for(div of element) {
//         div.innerText=` new unique value ${idx}`;
//         idx++;
// }


let button = document.createElement("button");
button.innerHTML="Click Me !";
button.style.color="white";
button.style.backgroundColor="red";
document.querySelector("body").append(button);


// document.designMode="on"