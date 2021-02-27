//Array of uppercase characters
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
  ];


//Array of special characters
var specialCharacters = [
  '@',
  '%',
  '+',
  '/',
  '"',
  '#',
  '$',
  '^',
  '?',
  ':',
  ';',
  ',',
  '(',
  ')',
  '{',
  '}',
  '[',
  ']',
  '~',
  '_',
  '.'
];

//Array of numeric charcters
var numericCharacters = [
'0',
'1',
'2',
'3',
'4', 
'5', 
'6',
'7',
'8',
'9'
];
//Array of lowercase characters
var lowerCasedCharacters = [
'a',
'b',
'c',
'd',
'e',
'f',
'g',
'h',
'i',
'j',
'k',
'l',
'm',
'n',
'o',
'p',
'q',
'r',
's',
't',
'u',
'v',
'w',
'x',
'y',
'z'
];


//Funtion to prompt user for password options

function getPasswordOptions () {
  var pwLength = window.prompt ('How many total characters would you like your password to be?');
  if (isNaN(pwLength) === true){
    alert ("Password length must be provided as a number");
    return;
  }
  var pwLength = window.prompt ("How many total characters would like your password to be?");
  if (pwLength < 8 || pwLength>128){
    alert('Password lenght must be between 8 and 128 characters in length');
    return;
  }
  var useUppercase = window.prompt ("Include uppercase letters?");
  var useLowercase = window.prompt ("Include lowercase letters?");
  var useNumbers = window.prompt ("include numbers?");
  var useSpecial = window.prompt ("Include special characters?");
  if (!useUppercase && !useLowercase && !useNumbers && !useSpecial){
    alert ("You must select at least one character type");
    return;
  }
}
var getPasswordOptions = {
  passwordLength: length,
  hasSpecialCharacters: hasSpecialCharacters,
  hasNumericCharacters: hasNumericCharacters,
  hasLowerCasedCharacters: hasLowerCasedCharacters,
  hasUpperCasedCharacters: hasUpperCasedCharacters
};
return getpasswordOptions;


//Function to generate password with the user
function getRandomElement(arr) {
  //Pick a random spot in the array
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

//Funtion that generates the password based on the lenght provided and random elemnts pulled fro arrays
function generatePassword() {
  var options = getPasswordOptions();

  //Array to hold the final password
  var result = [];

  // Array to store types of characters included in password
  var possibleCharacters = [];

  //Array to contain one of each type of chosen character to ensure each will be used
  var guaranteedCharacters = [];

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters)
    guaranteedCharacters.push(getRandom(specialCharacters));
  }
  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }
  if (options.hasLowerCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }
  if (options.hasUpperCasedCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }
 //for loop that pulls a random character from the list of choices for the user 
for (var i = 0; i < options.length; i++) {
  result [i] = guaranteedCharacters [i];
  }

// return the password as concatenated string
 return result.join('');
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
}
