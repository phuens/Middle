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
        "animation": "bird_move ease-in 5s"
    });
    $(document).keydown(function(event) {
        if ( event.which === 13 ) {
          check();
        }
    });
}

function check(){
    $("#bird").css("animation-play-state","paused");
    $(".canvas").css("animation-play-state","paused");
    let position = $("#cage").offset();
    console.log("Cage left: " + position.left + " top: " + position.top);
    let bird_position = $("#bird").offset();
    console.log("Bird left: " + bird_position.left + " top: " + bird_position.top)
}
