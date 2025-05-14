const inputBox=document.getElementsByClassName(".inputbox")
const btns=document.querySelector(".btn")



btns.addEventListener("click",function(){
    if(inputBox.value===""){
        alert("box is empty")
    }
    else{
        // alert("box is full")
        const newlist=document.createElement("ul")
        newlist.innerHTML=`${inputBox.value}`
        // console.log(newlist)
        btns.appendChild(newlist)
        inputBox.value=" "
    }
})
// inputBox.addEventListener("keyup",function(event){
//     alert("input box is clicked")
//     // console.log(inputBox.value)
//     const list=document.createElement("li")
//     // console.log(list)
//     inputBox.appendChild()
 
// })

// btns.addEventListener("click",function(event){
//     // alert("button is clicked")
   
    
// })