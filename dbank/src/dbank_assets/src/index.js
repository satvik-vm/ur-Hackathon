import {dbank} from '../../declarations';

var currentUrl = window.location.href;
currentUrl = currentUrl.substring(0, currentUrl.length - 10);

document.getElementById("form").addEventListener("submit", async function(){
    const pass = document.getElementById("password").innerText;
    const pass_true = dbank.getPassword();
    if(pass_true == pass){
        window.location = currentUrl + "./after-login.html";
    }
    else{
        document.getElementById("response").innerText = "Wrong password";
    }
})