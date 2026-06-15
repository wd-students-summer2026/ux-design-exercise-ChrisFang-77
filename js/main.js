$(document).ready(function() {

    $("#insight-button").click(function() {
        $("#insight-text").text(
            "Basketball was invented by Dr. James Naismith in 1891."
        );
    });

    $("#basketball-image").mouseover(function() {
        $(this).attr("src", "images/basketball2.jpg");
    });

    $("#basketball-image").mouseout(function() {
        $(this).attr("src", "images/basketball1.jpg");
    });

    $("#move-button").click(function() {
        $("#basketball-card").animate({
            marginLeft: "150px"
        }, 800);
    });

});