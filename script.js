
function generate(num, type) {
    // var's for user criteria and password perameters
    var length = prompt ("Choose a password length between 8 and 120.");
    var pwdType = prompt ("Would you like letters, numbers, special characters, or a mix?");
    var letterSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numSet = "1234567890";
    var specSet = "!@#$%^&*()_";
    var mixSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_"
    var pwd = "";
    
    // 
    for (var i = 0; i < length; ++i) {
        if (pwdType === "letters" || "Letters") {
            pwd += letterSet.charAt(Math.floor(Math.random() * letterSet.length));
        } else if (pwdType === "numbers" || "numbers") {
            pwd += numSet.charAt(Math.floor(Math.random() * numSet.length));
        }   else if (pwdType === "special"  || "special characters" || "Special characters") {
            pwd += specSet.charAt(Math.floor(Math.random() * specSet.length));
        } else {
            pwd += mixSet.charAt(Math.floor(Math.random() * mixSet.length));
        }
    }
    document.getElementById("displaybox").value = pwd;
}


