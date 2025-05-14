// let pass=document.getElementsByClassName("passward");
// let genpass=document.getElementById("button");
// const change=document.getElementById("mybutton");
// const hero= document.getElementsByClassName("hero");
 

// change.addEventListener("click" ,function(){
//     change.style.backgroundColor="red";
// })
const passwordDiv = document.querySelector(".passward");
const generateBtn = document.getElementById("button");
const themeBtn = document.getElementById("mybutton");
const container = document.querySelector(".container");

// Functio
function generatePassword(length = 10) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randIndex = Math.floor(Math.random() * chars.length);
        password += chars[randIndex];
    }
    return password;
}

generateBtn.addEventListener("click", () => {
    const newPassword = generatePassword(12); 
    passwordDiv.textContent = newPassword;
});

let isDark = false;

themeBtn.addEventListener("click", () => {
    isDark = !isDark;
    if (isDark) {
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "#fff";
        container.style.backgroundColor = "#111";
    } else {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = "#000";
        container.style.backgroundColor = "";
    }
});
