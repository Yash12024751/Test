const inputBox = document.querySelector(".inputbox");
const btn = document.querySelectorAll(".btn");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const Delete = document.querySelector(".delete");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
    // console.log(btn[i].textContent)
    // alert("button is clicked")
    inputBox.value += btn[i].textContent;
    // console.log(inputBox)
  });
}

// inputBox.addEventListener("click",function(){
//     // console.log(inputBox.textContent=inputBox.valu)
// //     alert("input is clicked")
//         i
// })

equal.addEventListener("click", function () {
  // alert("equal is clicked")
  // console.log(equal.textContent)
  inputBox.value = eval(inputBox.value);
});
clear.addEventListener("click", function () {
  // console.log(inputBox.textContent="")
  // alert("clear is clicked")
  inputBox.value = "";
});

Delete.addEventListener("click", function () {
  const value = inputBox.value;
  const newValue = value.slice(0, value.length - 1)
  inputBox.value = newValue;
});
