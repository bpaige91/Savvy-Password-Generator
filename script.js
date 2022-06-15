// Assignment code here
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyx";
var numbers = "0123456789";
var specialChar = "!@#$%^&*()?/;:~";

//added userSelection & finalPassword var
var userSelection =[]; 

var finalPassword = [];

//added functions, prompt, console.log
function generatePassword(hasUpper, hasLower, hasNumbers, hasSymbols, length) {
  let generatedPassword = '';

  const typesCount = hasUpper + hasLower + hasNumbers + hasSymbols;

  const typesArr = [{ hasUpper }, { hasLower }, { hasNumbers }, { hasSymbols }]

  for (let i = 0; i < length; i += typesCount) {
      typesArr.forEach(function(type) {
          const funcName = Object.keys(type)[0];
          generatedPassword = generatedPassword + randomFunc(funcName);
      });

  return generatedPassword;
}
  var passLength = prompt("Please insert a password length between 8 to 128 characters");
  //IF  the user choose less than 8 or greater than 128, then ask initial question again 
  if (passLength <8 ) {
    alert ("Please insert a password length between 8 to 128 characters");
    return;
  }
  if (passLength >128 ) {
  alert ("Please insert a password length between 8 to 128 characters");
  return;
  }
  
  //upperCase/lowerCase confirm var
  var upperC = confirm("Would you like to include Uppercase Letters?");
  if(upperC) {
    userSelection.push(upperCase);
  } 
  
  var lowerC = confirm("Would you like to include Lowercase Letters?");
  if(lowerC) {
    userSelection.push(lowerCase);
  }
  //added remaining specChar and numb var
  var specC = confirm("Would you like to include Special Characters?");
  if(specC) {
    userSelection.push(specialChar);
  }

  var numb = confirm("Would you like to include Numbers?"); 
  if(numb) { 
    userSelection.push(numbers);
  }
  console.log("user selection = " + userSelection);

}
alert(generatePassword());

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

