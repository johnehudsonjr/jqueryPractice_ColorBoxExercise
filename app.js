// When user clicks first button. The second white box will become blue.
$(".firstBtn").click(function(){

 $(".whiteBox2").css("background", "blue")
});

// When user clicks second button. The second white box will become blue.
$(".secondBtn").click(function () {

    $(".whiteBox1").css("background", "yellow")
    $(".whiteBox3").css("background", "orange")
    });


$(".secondBtn").click(function () {

    $(".whiteBox1").css("background", "yellow")
});


$(".hideBtn").click(function () {

    $(".whiteBox1").css("background", "white")
    $(".whiteBox2").css("background", "white")
    $(".whiteBox3").css("background", "white")
});
