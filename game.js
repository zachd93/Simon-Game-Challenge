let userClickedPattern = [];
let gamePattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];
let randomChosenColor = nextSequence();
gamePattern.push(randomChosenColor);


// Create random number
function nextSequence() {
    randomNumber = Math.floor(Math.random(0, 3) + 1);
}

// Fade in and out button
$(`.${buttonColors[gamePattern]}`).animate({opacity: 0}, 1000).animate({opacity: 200}, 100)

// 
function animatePress(currentColor) {
    $(`.${currentColor}`).on("click", function() {
        $(`.${currentColor}`).addClass("game-over");
    });

    // $(`.btn ${currentColor}`).click(function() {
    //     $(`.btn ${currentColor}`).addClass(".pressed");
    // });
}

// Button function handler
$(".btn").click(function getID(event) {
    let userChosenColor = event.currentTarget.id;
    userClickedPattern.push(userChosenColor); 
    animatePress(userChosenColor);
    playSound(userChosenColor);
});

// Play audio file
function playSound(name) {
    let audioFile = new Audio(`sounds/${name + ".mp3"}`)
    audioFile.play();
}



// let audioFile = new Audio(`sounds/${buttonColors[gamePattern] + ".mp3"}`)