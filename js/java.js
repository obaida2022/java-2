// variable
var inputel = document.getElementById("input")
var but =  document.getElementById("add")
var ulel =  document.getElementById("ul")
var error =  document.getElementById("err")


// events
but.onclick = function () {
    shams()
};


// function
function shams() {
    var y = inputel.value;

    if (y != ""){
        ulel.innerHTML += "<li>" + y + "</li>";

        inputel.value = "";

        error.innerHTML = "";
    }

    else{
        error.innerHTML = "You Fhould Fill Data";
    }

}