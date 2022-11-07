var preloader = document.getElementById('loading');
function Loaded() {

    preloader.style.display = 'none';
}
function Send() {
    let username = document.getElementById('User Name').value ;
    let password = document.getElementById('Password').value ;
    alert(username + " " + password ) ;

}