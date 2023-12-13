console.log('We are in buddy')

const passwordDisplay = $('#password-display');
const passwordbtn = $('#password-btn');

function generatePassword() {
    return String.fromCharCode(Math.floor(Math.random()*77 + 34))
}
console.log(generatePassword())

function passwordGenerator(num) {
    var password = "";
    for (var i = 0; i < num; i++){
        password += generatePassword();
    }
    return password
}

passwordbtn.on('click', function () {
    var newpassword = passwordGenerator(15);
    passwordDisplay.text(newpassword)
})