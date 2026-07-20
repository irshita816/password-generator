const password = document.getElementById("password");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const length = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const strength = document.getElementById("strength");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+?><{}[]";

generateBtn.addEventListener("click", generatePassword);

function generatePassword(){

    let characters = "";

    if(uppercase.checked)
        characters += upperChars;

    if(lowercase.checked)
        characters += lowerChars;

    if(numbers.checked)
        characters += numberChars;

    if(symbols.checked)
        characters += symbolChars;

    if(characters === ""){
        alert("Please select at least one option.");
        return;
    }

    let generatedPassword = "";

    for(let i=0;i<length.value;i++){

        let randomIndex = Math.floor(Math.random()*characters.length);

        generatedPassword += characters[randomIndex];
    }

    password.value = generatedPassword;

    checkStrength(generatedPassword);

}

copyBtn.addEventListener("click",()=>{

    navigator.clipboard.writeText(password.value);

    alert("Password Copied!");

});

function checkStrength(pass){

    if(pass.length<8){

        strength.innerHTML="Strength : Weak 🔴";

    }
    else if(pass.length<12){

        strength.innerHTML="Strength : Medium 🟡";

    }
    else{

        strength.innerHTML="Strength : Strong 🟢";

    }

}
