$(document).ready(function(){

    //console.log("Testing if the script file is running");
    $(".start").click(function(){
        $(".start").hide("fast");
        start();
        //console.log("button hidden");
        $("#cage").css("display","block");
    })
});
function userInput(){
    $(document).keydown(function(event) {
        if ( event.which === 13 ) {
            if (check() === true){
                console.log("you win")
            }
            else{
                lose();
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
function start(){
    console.log("started: All ready to go");
    $("#in-game_title").hide("fast");
    $(".canvas").css({
        "animation": "bkg_move linear 5s infinite"
    });
    $("#bird").css({
        "animation": "bird_move linear 5s infinite"
    });
    userInput()
}
function lose(){
    console.log("you lost!")
}