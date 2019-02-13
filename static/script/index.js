$(document).ready(function(){
    $(".btn-primary").click(function(){
        $(".btn-primary").hide("fast");                         // Hides all the buttons when it is clicked.
        $("#bird").css("display", "block");
        $("#cage").css("display","block");              // Display the cage once the user is ready.
        $("#in-game_title").hide("fast");               // Hide the title "Birdie" when user is ready.
        run($(this).attr('id'));                        // Execute the run function. Passing the ID of the clicked button.
    });
});

//----------------------------------------------------------------------
/**
 * Checks if the user pressed the enter button.
 */
function userInput(){
    $(document).keydown(function(event) {
        if ( event.which === 13 ) {                     // Check if the user pressed enter.
            if (check() === true){                      // Return true if the bird is caught.
                celebrate();
            }
            else{                                       // If the bird is not caught.
                lose();                                 // Execute the lose function.
            }
        }
    });
}

//----------------------------------------------------------------------
/**
 * Checks if the bird's position in within the cage's position.
 * @return {boolean} bool - true if bird is caught.
 * */
function check(){
    let bird = $("#bird");
    bird.css("animation-play-state","paused");           // Pause the bird from moving.
    $(".canvas").css("animation-play-state","paused");   // Pause the background from moving.

    //position of the cage
    let cage_position = $("#cage").offset();             // Stores the top and left position of the cage.

    //position of the bird when stopped.
    let bird_position = bird.offset();                   // Stores the top and left position of the bird where it is.

    // return true if the bird is caught and vice versa.
    return bird_position.left > cage_position.left - 20 && bird_position.left < cage_position.left + 150;
}

//----------------------------------------------------------------------
/**
 * starts the game when the user presses one of the level.
 * @param id_value - ID of the button the user pressed.
 */
function run(id_value){
    if (id_value ==="easy"){                             // Easy Level.
        $(".canvas").css({
            "animation": "bkg_move linear 4s infinite"   // Animate the background.
        });
        $("#bird").css({                                 //Animate the bird.
            "animation": "bird_move linear 4s infinite"
        });
    }
    else if (id_value ==="medium"){                      // Medium Level.
        console.log("started: All ready to go");
        $(".canvas").css({
            "animation": "bkg_move linear 2s infinite"
        });
        $("#bird").css({
            "animation": "bird_move linear 2s infinite"
        });
    }
    else if (id_value ==="hard"){                        // Hard Level.
        console.log("started: All ready to go");
        $(".canvas").css({
            "animation": "bkg_move linear 800ms infinite"
        });
        $("#bird").css({
            "animation": "bird_move linear 800ms infinite"
        });
    }
    else {                                               // Impossible Level.
        console.log("started: All ready to go");
        $(".canvas").css({
            "animation": "bkg_move linear 300ms infinite"
        });
        $("#bird").css({
            "animation": "bird_move linear 300ms infinite"
        });
    }
    userInput() // Check if the user pressed enter. Execute the user Input func.
}


//----------------------------------------------------------------------
/**
 * Celebrate: user wins.
 */
function celebrate(){
    let picts = new Array(10);
    let width = $( window ).width()-200;
    let height = $( window ).height()-300;

    for(let i=0; i < 19; i++){                                  // display all the fireworks pictures.
        picts[i] = new Image();
        picts[i].src = "../static/images/firework"+i+".gif";
        console.log(picts[i].src);
        let new_img = $( "<img id='"+i+"' src="+picts[i].src+">" );
        $(".fireworks" ).append(new_img);
        let left_pos = Math.floor((Math.random()*width)+1);
        let top_pos = Math.floor((Math.random()*height)+1);
        $("#"+i).css({                                          // randomize the position of the fireworks;
            "position": "absolute",
            "top": top_pos,
            "left": left_pos
        });
    }
    let value = "<br><h1> You Won!</h1><i class=\"far fa-smile\"></i><br>Congratulation<br>";
    writeWinLose(value);
    //add the win audio.
    let audioUrl = "<audio controls autoplay><source src='../static/images/firework.mp3' type='audio/mpeg'><source src='../static/images/firework.ogg' type='audio/ogg'></audio>";
    $("audio").replaceWith(audioUrl)
}

//----------------------------------------------------------------------

/**
 * This function prints the message of win or lose.
 * @param value - message needed to be displayed ccording to win or lose.
 */
function writeWinLose(value){
    $("#win").css({
        "display" : "block",
    });
    $("#message").html(value);
}

//----------------------------------------------------------------------

/**
 * Displays a message saying you lost and plays the lose audio.
 */
function lose(){
    $(".banner").css("filter","saturate(0)");
    $(".canvas").css("filter","saturate(0)");
    $("body").css("background-color","#b1a9a9");

    let value = "<br><h1>You Lost! :(</h1><i class=\"far fa-frown\"></i><br>Please Try Agian.<br>";
    writeWinLose(value);
    let audioUrl = "<audio controls autoplay><source src='../static/images/lose.mp3' type='audio/mpeg'><source src='../static/images/lose.ogg' type='audio/ogg'></audio>";
    $("audio").replaceWith(audioUrl);

}
