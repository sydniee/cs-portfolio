// Creates Variables and saves DOM ELements to each
var newBGColor = document.getElementById("newBGColor");
var colorChangeButton = document.getElementById("colorChangeButton");

// EventListener for button: sets background color 
colorChangeButton.addEventListener("click", function() {
    document.body.style.backgroundColor = newBGColor.value;
    
});

