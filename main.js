let input_password = document.getElementById("password");
let input_key = document.getElementById("key");


// Checking empty input userkey
function validate_key() {
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
    const status_pass = document.getElementById("status_pass");
    if (input_password.value.trim() === "") {
        status_pass.innerText = "Введите пароль";
        return false;
    } else{
        status_pass.innerText = "";
    }
    return true;
}


//transfer inputs data to bot
function request() {
    const key = validate_key();
    const pass = validate_password();
    if (key && pass) {
        let data = {
            key: input_key.value,
            password: input_password.value
        };
        let tg = window.Telegram.WebApp;
        tg.sendData(JSON.stringify(data));
    } 
}



