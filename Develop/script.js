// Assignment Code
 var generateBtn = document.querySelector("#generate");


// this is a randon lowercase
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);

}

// this is a random upper case 
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

}

// this is a random number
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

}

// this is a random symbols
function getRandomSymbols() {
  var symbols = " !@#$%^&*()_+?";
  return symbols[Math.floor(Math.random() * symbols.length)]

}



// this function is going to generate your password

function generatePassword() {
  var userpass = ""



// this prompt ask user how long the password needed to be
  var userLength = prompt(" how many characterss do you want your password?")
  if (userLength > 10) {
     console.log("thats too much!!");
  }else if (userLength < 4) {
     console.log( "thats too little");
  } else {
    console.log("this is great");
  }
// loop to generate the password
  for (var index = 0; index < userLength; index++) {

    var upper = getRandomUpper();
    var lower = getRandomLower();
    var number = getRandomNumber();
    var symbolsChar = getRandomSymbols();

    var values = [upper, lower, number, symbolsChar ];

  
   console.log(values[Math.floor(Math.random() * values.length)]);


    }

  return userpass
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

