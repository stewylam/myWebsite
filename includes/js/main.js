// button for the top
// (sorry niet zelf geschreven)
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}


function myFunction() {
    alert("Coming Soon!");
}




/*portfolio button
$(document).ready(function() {
function portfolioClick() {
    $(".btn-portfolio").click(function() {
       alert("Coming Soon!");
       */



/*//gallery photo hover

function galleryOpacity() {
    $(".photo").mouseover(function() {
        $(this).animate({
            opacity: 0.2}, 100);
        });
}
*/
// portfolio button
/*
function buttonClick () {

}*/



/*function buttonClick () {
    $(".btn-portfolio").mouseover( function(event) {
        $(this)
    });

};

*/
/*/*/