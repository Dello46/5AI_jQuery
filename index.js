
var btn = document.createElement("button");
btn.innerHTML = "Clicca";

var body = document.getElementsByTagName("body")[0];
body.append(btn);

btn.addEventListener("click", function(){
    document.getElementById("h1").innerHTML = "ciao come stai?";
});