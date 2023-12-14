// Variable for Generate Button
var generateBtn = document.querySelector("#generate");

// User Password Inputs Declared in Global Scope 
var userlength;
var usernumbers;
var userspecial;
var userlowercase;
var useruppercase;

// Uppercase Alphabet Variable
var upper = function (x) {
  return x.toUpperCase();
};

// Writes password to the #password id
function writePassword() {
  var password = generatePassword();
  document.getElementById("password").placeholder = password;
}

function generatePassword() {
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperalphabet = alphabet.map(upper);
  var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

  // Prompts user for password length
  var userChoice = parseInt(window.prompt("How many characters do you want your password to contain?"));

  // Validate password length
  var notOption = userChoice < 8 || userChoice > 128;
  if (notOption) {
    window.alert("Invalid password length. Please choose a value between 8 and 128.");
    return;
  }

  // Prompt user for character types
  usernumbers = window.confirm("Do you want to include numbers?");
  userspecial = window.confirm("Do you want to include special characters?");
  userlowercase = window.confirm("Do you want to include lowercase letters?");
  useruppercase = window.confirm("Do you want to include uppercase letters?");

  // Validate at least one character type is selected
  if (!usernumbers && !userspecial && !userlowercase && !useruppercase) {
    window.alert("Please select at least one character type.");
    return;
  }

  // Generate the password randomly based on user choices
  var password = "";
  while (password.length < userChoice) {
    if (usernumbers) {
      password += number[Math.floor(Math.random() * number.length)];
    }
    if (userspecial) {
      password += special[Math.floor(Math.random() * special.length)];
    }
    if (userlowercase) {
      password += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    if (useruppercase) {
      password += upperalphabet[Math.floor(Math.random() * upperalphabet.length)];
    }
  }

  // Trim the password to the desired length
  password = password.slice(0, userChoice);

  return password;
}

// Creates event listener for when generate button is clicked, the writePassword function begins
generateBtn.addEventListener("click", writePassword);