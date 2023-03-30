// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Helper function for generatePassword() that checks for a numeric value in the prompt between 8 and 128 (inclusive)
function getCharLen() {
  var len = prompt("Enter your desired character count")

  // Checks for numerics, and that the number is 8 <=len <= 128
  if (!len.match(/^[0-9]+$/) || (Number(len) < 8 || Number(len) > 128)) {
    len = getCharLen()
  }
  return len
}

// Helper function that takes in a yes/no prompt and returns a boolean based on user input
function getBool(ask) {
  // Prompts the user with a yes/no question
  var bool = prompt(ask)

  // Maps yes-ish type answers to true, no-ish type answers to false, and re-runs function if no matches
  if (bool.match(/^(Yes|yes|Y|y|True|true|T|t)$/)) {
    return true
  } else if (bool.match(/^(No|no|N|n|False|false|F|f)$/)) {
    return false
  } else {
    bool = getBool(ask)
  }
}