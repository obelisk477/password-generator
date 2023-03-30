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

// Function to take data in from prompts and create bassword based on input
function generatePassword() {

  // Define strings that contain all possible characters in their respective sets
  var specials =  "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowers = uppers.toLowerCase()
  var numerics = "0123456789"
  var password = ""
  
  // Get inputs for password length and parameters from user input
  var charLen = getCharLen()
  var hasLowerCase = getBool("Do you want your password to contain lowercase characters? (y/n)")
  var hasUpperCase = getBool("Do you want your password to contain uppercase characters? (y/n)")
  var hasNumeric = getBool("Do you want your password to contain numeric characters? (y/n)")
  var hasSpecial = getBool("Do you want your password to contain special characters? (y/n)")

  // Checks that at least one character type was selected
  if (!(hasLowerCase || hasUpperCase || hasNumeric || hasSpecial)) {
    alert("You did not select any character types to include in your password. Please try again.")
    return
  }
  
  // Prepares character groups for concatenation by setting them to blank if user doesn't want
  var specials = hasSpecial ? specials : ""
  var uppers = hasUpperCase ? uppers : ""
  var numerics = hasNumeric ? numerics : ""
  var lowers = hasLowerCase ? lowers : ""
  
  // Creates string of all preferred password characters
  var allowedChars = specials + uppers + numerics + lowers

  // Randomly selects a character from above string as many times as the user specifies, and concats to password
  for (var i=0; i < charLen ; i++) {
    password += allowedChars[Math.floor(Math.random()*allowedChars.length)]
  }

  return password
}

// Helper function for generatePassword() that checks for a numeric value in the prompt between 8 and 128 (inclusive)
function getCharLen() {
  var len = prompt("Enter your desired character count")

  // Checks for numerics, and that the number is 8 <=len <= 128
  if (!len.match(/^[0-9]+$/) || (Number(len) < 8 || Number(len) > 128)) {
    alert("Character length must be a number between 8 and 128 characters (inclusive). Please try again.")
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
    alert("Invalid response. Please type 'y' or 'n'")
   return bool = getBool(ask)
  }
}