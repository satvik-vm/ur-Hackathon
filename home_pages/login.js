var preloader = document.getElementById('loading');
function Loaded() {

    preloader.style.display = 'none';
}
function pageRedirect() {
    let username = document.getElementById('Account Id').value;
    window.location = "http://127.0.0.1:8000/?canisterId=r7inp-6aaaa-aaaaa-aaabq-cai&id=rrkah-fqaaa-aaaaa-aaaaq-cai"
}
setTimeout('pageRedirect()', 5000);
