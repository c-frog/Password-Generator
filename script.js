
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
        if (pwdType === "letters" || pwdType === 'Letters') {
            pwd += letterSet.charAt(Math.floor(Math.random() * letterSet.length));
        } else if (pwdType === "numbers" || pwdType === "Numbers") {
            pwd += numSet.charAt(Math.floor(Math.random() * numSet.length));
        }   else if (pwdType === "special" || pwdType === "Special") {
            pwd += specSet.charAt(Math.floor(Math.random() * specSet.length));
            } else if (pwdType === "a mix" || pwdType === "mixed" || pwdType === 'mix'){
                pwd += mixSet.charAt(Math.floor(Math.random() * mixSet.length));
            } else confirm ('Not a valide option!')
                
    }
    document.getElementById("displaybox").value = pwd;
}

function copy () {
    var copyText = document.querySelector("#displaybox");
    copyText.select();
    document.execCommand("copy")
}

    document.querySelector('#copy').addEventListener('click', copy);