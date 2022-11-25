var USER_NAME = 'Admin'
var PASSWORD = 'Password'

function check_detail(){

    var Username = document.getElementById("Username").value
    var password = document.getElementById("password").value

    if(Username === USER_NAME && password === PASSWORD){
        console.log("IT WORKED");
        window.location.href = 'Visitors.html';

    }

    return false;
}