$(document).ready(function(){
    console.log("Testing if the script file is running");
    $(".start").click(function(){
        $(".start").hide("fast");
        start();
        console.log("button hidden");
        $("#cage").css("display","block");
    })
});
function start(){
    console.log("started: All ready to go");
    $("#in-game_title").hide("fast");
    $(".canvas").css({
        "animation": "bkg_move ease-in 5s"
    });
    $("#bird").css({
        "animation": "bird_move ease-in 10s"
    });
    userInput();

}

function userInput(){
    $(document).keydown(function(event) {
        if ( event.which === 13 ) {
            check();
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

    if (bird_position.left > cage_position.left-20 && bird_position.left < cage_position.left+150 ){
        console.log("right")
    }
    else{
        console.log("Failed")
    }
}
