var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var sequence = [];

function nextSequence() {
    var randomNumber = (Math.floor(Math.random() * 4));

    var randomChosenColour = buttonColors[randomNumber];

    gamePattern.push(randomChosenColour);
}

// Adding Animation and Sounds to Buttons

for (let i = 0; i < 4; i++) {
    $("." + buttonColours[i]).click(function() {
        $("." + buttonColours[i]).fadeOut(100).fadeIn(100);
        const audio = new Audio("sounds/" + buttonColours[i] + ".mp3");
        audio.play();

    });
}

$(".btn").click(function() {

});

document.addEventListener("keypress", function() {
    if (e === "a") {
        alert("working");
    }
})