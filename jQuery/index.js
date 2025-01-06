$(document).keypress(function(event){
    $("h1").text(event.key);
    console.log(event.key);
});