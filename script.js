
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
var password = '';


// function to generate password.
function generate(passwordLength, userChar){
    var pwdLength = prompt ('Choose a length between 8 and 120');
    var userChar = prompt ("Would you like letters, numbers, special characters, or a mix?");
    for (var i = 0; i < pwdLength; i++) {
        password += characters[Math.floor(Math.random() * characters.length)]
    }
        return password;
}


