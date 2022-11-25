if (navigator.geolocation){
    console.log("there is a visitor");
}

window.onload = function (){
    var senetence = "you have had" + localStorage.clickCountLocal + "visits"


    if (navigator.geolocation){
        console.log("there is a visitor");
        if (typeof(Storage) !== "undefined") {
            if (localStorage.clickCountLocal) {
                localStorage.clickCountLocal = Number(localStorage.clickCountLocal) + 1;
            } else {
                localStorage.clickCountLocal = 1;
            }

    }
        $('.visitors').append('<p>You have ' + localStorage.clickCountLocal +' visitors </p>')

}}

