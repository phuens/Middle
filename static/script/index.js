$(document).ready(function(){
    $(".btn").click(function(){
        $(".btn").hide("fast");             // Hides all the buttons when it is clicked.
        $("#cage").css("display","block");  // Display the cage once the user is ready.
        $("#in-game_title").hide("fast");   // Hide the title "Birdie" when user is ready.
        run($(this).attr('id'));            // Execute the run function. Passing the ID of the clicked button.
    });
});
function userInput(){
    $(document).keydown(function(event) {
        if ( event.which === 13 ) {         // Check if the user pressed enter.
            if (check() === true){          // Return true if the bird is caught.
                console.log("you win")
            }
            else{                           // If the bird is not caught.
                lose();                     // Execute the lose function.
            }
        }
    });
}
function check(){
    let bird = $("#bird");
    bird.css("animation-play-state","paused");
    $(".canvas").css("animation-play-state","paused");

    //position of the cage
    let cage_position = $("#cage").offset();
    console.log("Cage left: " + cage_position.left + " top: " + cage_position.top);

    //position of the bird when stopped.
    let bird_position = bird.offset();
    console.log("Bird left: " + bird_position.left + " top: " + bird_position.top)

    return bird_position.left > cage_position.left - 20 && bird_position.left < cage_position.left + 150;
}

function run(id_value){
    if (id_value ==="easy"){
        console.log("started: All ready to go");
        $(".canvas").css({
            "animation": "bkg_move linear 4s infinite"
        });
        $("#bird").css({
            "animation": "bird_move linear 4s infinite"
        });
    }
    else if (id_value ==="medium"){
        console.log("started: All ready to go");
        $(".canvas").css({
            "animation": "bkg_move linear 2s infinite"
        });
        $("#bird").css({
            "animation": "bird_move linear 2s infinite"
        });
    }
    else if (id_value ==="hard"){
        console.log("started: All ready to go");
        $(".canvas").css({
            "animation": "bkg_move linear 1s infinite"
        });
        $("#bird").css({
            "animation": "bird_move linear 1s infinite"
        });
    }
    else {
        console.log("started: All ready to go");
        $(".canvas").css({
            "animation": "bkg_move linear 300ms infinite"
        });
        $("#bird").css({
            "animation": "bird_move linear 300ms infinite"
        });
    }
    userInput()
}
function lose(){
    console.log("you lost!")
}