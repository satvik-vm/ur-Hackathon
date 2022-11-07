var currentUrl = window.location.href;
currentUrl = currentUrl.substring(0, currentUrl.length - 10);
console.log(currentUrl);

function profile_page(){
    window.location = currentUrl + "/userinfo.html";
}

function saving_page(){
    window.location = currentUrl + "/Savings.html";
}

function fd_page(){
    window.location = currentUrl + "/FixedDeposit.html";
}

// function home_page(){
//     window.location = "http://localhost:5500/" + ""
// }