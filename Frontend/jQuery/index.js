// Adding class
$("h1").addClass("big-title margin-50");

// $("h1").text("Bye");     ##text

// Adding innerHTML
$("button").html("<em>Hey!</em>");

// Manipulate Attributes
$("a").attr("href");
$("a").attr("href", "https://www.yahoo.com");

// Event Listener
$("h1").click(function (e) { 
    $("h1").css("color", "purple");
});

$("button").on("click", function(){
    $("h1").css("color", "green");
})

$("input").keypress(function (e){   
    $("h1").text(e.key)
})

// $("h1").mouseover(function () { 
//    $("h1").addClass("big-title");
//     setTimeout(function () {
//         $("h1").removeClass("big-title");
//     }, 500); 
// });

// Adding and removing elements in jQuery

// $("h1").before("<button>New</button>");     ## Adding before the html (eg. <button>New</button><h1>Hello</h1>)
// $("h1").after("<button>New</button>");      ## Adding after the html (eg. <h1>Hello</h1><button>New</button>)

$("h1").prepend("<button>New</button>");       // It will add Element before the starting of tag (eg. <h1><button>New</button>Hello</h1>)
$("h1").append("<button>New</button>");        // It will add Element after the ending of tag (eg. <h1>Hello<button>New</button></h1>)

//$("button").remove();   //It will remove all buttons in the html



// Animation
/* 
    hide and show

$("h1").on("click", function (){
    $("h1").hide();                         // It will hide the selected button.
    setTimeout(function(){
        $("h1").show()                      // It will unhide the selected button.
    }, 500)
}) 
*/


// Toggle

/* $("button").on("click", function() {
    $("h1").toggle();
})
 */

// fadeout - It will hide the element slowly
/* 
$("button").on("click", function() {
    $("h1").fadeOut();
})
 */

// fadein - It will show the element slowly
/* 
$("button").on("click", function() {
    $("h1").fadeIn();
}) 
*/

// fadeToggle - It will hide and show element simultaneously
/* 
$("button").on("click", function() {
    $("h1").fadeToggle();
})
 */

// slideUp - It will hide the element from bottom to up
/* 
$("button").on("click", function() {
    $("h1").slideUp();
})
 */

// slideDown = It will show the element from top to bottom
/* 
$("button").on("click", function() {
    $("h1").slideDown();
})
 */

// slideToggle - It will hide/show elements simultaneously
/* 
$("button").on("click", function() {
    $("h1").slideToggle();
})
 */

// Animate - It will allow us to use the css property

$("button").on("click", function() {
    $("h1").animate({opacity: 0.5});            // The {method: number} it always should be number 20 or "20%"
})