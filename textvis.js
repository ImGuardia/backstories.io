
document.addEventListener("DOMContentLoaded", function () {
    // Delay the action by 10000ms (10 seconds)
    setTimeout(function () {
        // Display the div with class "bottomdiv"
        document.getElementById("myText").style.display = "block";
        // Set initial opacity to 0
        document.getElementById("myText").style.opacity = 0;
        // Animate the opacity to 1 over 1 second
        document.getElementById("myText").style.transition = "opacity 1s";
        document.getElementById("myText").style.opacity = 1;
    }, 13000); // 10 seconds
});