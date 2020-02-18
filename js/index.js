function check() {
    var pass = document.getElementById("pass");
    var cPass = document.getElementById("cPass");
    if (pass.value.length >= 8 && cPass.value.length >= 8 && pass.value == cPass.value) {
        pass.style.backgroundColor = "#90EE90";
        cPass.style.backgroundColor = "#90EE90";
        document.getElementById("checks").innerHTML = "Strong";
    }
    else if (pass.value.length >= 4 && cPass.value.length >= 4) {
        pass.style.backgroundColor = "yellow";
        cPass.style.backgroundColor = "yellow";
        document.getElementById("checks").innerHTML = "Fair";
        document.getElementById("result").innerHTML = "Password should be more than 8 characters.";
    }
    else if (pass.value != cPass.value) {
        pass.style.backgroundColor = "#F08080";
        cPass.style.backgroundColor = "#F08080";
        document.getElementById("checks").innerHTML = "Weak";
        document.getElementById("result").innerHTML = "Password are not the same.";
    }
    else {
        pass.style.backgroundColor = "#F08080";
        cPass.style.backgroundColor = "#F08080";
        document.getElementById("checks").innerHTML = "Weak";
    }
}
function validForm() {
    var login = document.getElementById("log");
    var pass = document.getElementById("pass");
    var cPass = document.getElementById("cPass");
    var selGen = document.getElementById("selGender");
    var email = document.getElementById("textEmail");
    if (login.value == "") {
        login.style.backgroundColor = "#F08080";
        document.getElementById("result").innerHTML = "Please enter a username.";
    }
    else if (pass.value == "") {
        pass.style.backgroundColor = "#F08080";
        document.getElementById("result").innerHTML = "Please enter a password.";
        return false;
    }
    else if (cPass.value == "") {
        cPass.style.backgroundColor = "#F08080";
        document.getElementById("result").innerHTML = "Please re-enter a password.";
        return false;
    }
    else if (selGen.value == "Choose") {
        document.getElementById("result").innerHTML = "Please select a gender.";
        return false;
    }
    else if (email.value == "") {
        email.style.backgroundColor = "#F08080";
        document.getElementById("result").innerHTML = "Please put an email.";
        return false;
    }
    else if (pass.value != cPass.value) {
        pass.style.backgroundColor = "#F08080";
        cPass.style.backgroundColor = "#F08080";
        document.getElementById("result").innerHTML = "Password are not the same.";
        return false;
    }
    else {
        login.style.backgroundColor = "#90EE90";
        email.style.backgroundColor = "#90EE90";
        document.getElementById("result").innerHTML = "";
        document.getElementById("Submited").innerHTML = "Registered Successfully!";
        return true;
    }
    check();
}
validForm();