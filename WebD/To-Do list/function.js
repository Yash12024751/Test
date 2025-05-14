const inputbtn=document.querySelector(".inputBox");
const btn = document.querySelector("#submitbtn");
let task='';


inputbtn.addEventListener("keyup", function(){
    console.log(inputbtn.value);
   
    // console.log(li);

})


btn.addEventListener("click",function(){
    console.log(btn)
})

function addtask(){
const li=document.createElement("li")
}