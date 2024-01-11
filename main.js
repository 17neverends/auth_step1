const form = document.querySelector('form');
const input_password = document.getElementById("password");
const tg = window.Telegram.WebApp;
const input_key = document.getElementById("key");
const status_key = document.getElementById("status_key");
// Password input swapped view/hide on mouse click 
function view_password() {
    const path1 = document.getElementById("path1");
    const path2 = document.getElementById("path2");
    const path3 = document.getElementById("path3");
    const path4 = document.getElementById("path4");
    const path5 = document.getElementById("path5");
    if (input_password.type === "text") {
        input_password.type = "password";
        path1.style.display = "block";
        path2.style.display = "block";
        path3.style.display = "none";
        path4.style.display = "none";
        path5.style.display = "none";
    } else {
        input_password.type = "text";
        path1.style.display = "none";
        path2.style.display = "none";
        path3.style.display = "block";
        path4.style.display = "block";
        path5.style.display = "block";
    }
}


// Checking empty input userkey
function validate_key() {
    const input_key = document.getElementById("key");
    const status_key = document.getElementById("status_key");
    if (input_key.value.trim() === "") {
        status_key.innerText = "Введите ключ";
        return false;
    }else{
        status_key.innerText = "";

    }
    return true;
}



// Checking empty password userkey
function validate_password() {
    const input_password = document.getElementById("password");
    const status_pass = document.getElementById("status_pass");
    if (input_password.value.trim() === "") {
        status_pass.innerText = "Введите пароль";
        return false;
    } else{
        status_pass.innerText = "";
    }
    return true;
}


//try request
function request() {
    const key = validate_key();
    const pass = validate_password();
    if (key && pass) {
        let data = {
            key: input_key,
            password: input_password
        }
    } 
    tg.sendData(JSON.stringify(data));
}


