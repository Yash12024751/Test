// const cont = document.body.children[0];

// const cont =document.getElementsByClassName("container");
// console.log(cont);

// const cont =document.getElementById("container");
// console.log(cont);


// const box=document.getElementById("box");
// console.log(box);

// function handleclick() {
//     alert("this is button");
// }

// box.addEventListener("click",handleclick);

const parent =document.getElementsByClassName("parent")[0];
const child = document.getElementsByClassName("child")[0];
const grandfather = document.getElementsByClassName("grandfather")[0];


console.log(parent,child,grandfather);
parent.addEventListener("click",function(e){
    alert("parent is clicked");
    e.stopPropagation();
})


child.addEventListener("click",function(e){
    alert("child is clicked");
    e.stopPropagation();

})

grandfather.addEventListener("click",function(e){
    alert("grandfather is clicked");
    e.stopPropagation();

})

