let Passw = document.getElementById("Passw");
let ConfirmPassw = document.getElementById("ConfirmPassw");
let ErrorText = document.getElementById("ErrorText");
let ConfirmBtn = document.getElementById("ConfirmBtn");
let a = document.getElementById("a");
let b = document.getElementById("b");

console.log(Passw);

Passw.addEventListener("input",ValidarePassw);
ConfirmPassw.addEventListener("input", (ev) => ValidarePassw());
ConfirmBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    console.log("sal");
});

a.addEventListener("click", (ev) => {
    console.log("a");
})

b.addEventListener("click", (ev) => {
    console.log("b");
    ev.stopPropagation();
})

function ValidarePassw(){
    if(Passw.value == ConfirmPassw.value && Passw.value != ""){
        ConfirmBtn.disabled = false;
        ErrorText.innerText = "Parola este identica";
        ErrorText.style.color = "green";
    }
    else{
        ConfirmBtn.disabled = true;
        ErrorText.innerText = "Parola nu este identica";
        ErrorText.style.color = "red";
    }
}