var sunset = document.getElementById("sunset");
var oceanwaves = document.getElementById("oceanwaves");
var display = document.getElementById("display");

sunset.addEventListener("click", function (){
    display.innerHTML = "this is a cotton candy sky"
});

oceanwaves.addEventListener("click", function (){
    display.innerHTML = "this is what the inside of a wave looks like"
});