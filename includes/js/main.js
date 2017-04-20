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

// smooth scrolling
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});



// jumbotron slide down
$(document).ready(function() {
    $('.jumbotron').hide();
    $('.jumbotron').slideDown('slow');
});

// name + buttons will fade in after page loads
$(document).ready(function() {
    $("h2").hide();
    $("h2").fadeIn(1300, function() {
        
    });
})

$(document).ready(function() {
    $(".btn-toolbar").hide();
    $(".btn-toolbar").fadeIn(1300, function() {
        
    });
})


//profile pic
$(document).ready(function() {
    $("#profile").hide();
    $("#profile").fadeIn(1300, function() {  
    });
    $(".col-md-6").hide();
    $(".col-md-6").fadeIn(1000, function() {  
    });
})


// fadeIn click menu
$(document).ready(function() {
    $(".btn.btn-outline-primary").click( function() {
        $(".col-md-4, .col-md-12, .photo, .portfolio").hide();
        $(".col-md-4, .col-md-12, .photo, .portfolio").fadeIn(1800, function() { 
        });
});
});

// alertbox button
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