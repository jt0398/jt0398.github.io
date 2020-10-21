//Scroll animation for the top navigation
$(document).ready(function() {
  //Get all nav with #
  $('a[href^="#"]').on("click", function() {
    var target = $(this).attr("href");

    //Animate scroll to the target section
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top
      },
      800,
      function() {
        window.location.hash = target;
      }
    );
    return false;
  });

  AdjustNavStyle();

  $(window).on("scroll", function() {
    AdjustNavStyle();
  });
});

//Updates the Bootstrap style of the NavBar depending on the vertical location
function AdjustNavStyle() {
/*   var pageWidth = $(document).width();
  console.log(pageWidth); */

  var ww = $(window).scrollTop();

  // || pageWidth < 587
  if (ww > 0) {
    $(".navbar").removeClass("navbar-dark");
    $(".navbar").addClass("navbar-light");
    $(".navbar").addClass("bg-light");

   /*  if(pageWidth < 587)
    {
      console.log($(".collapse"));
      $(".collapse").addClass("bg-light"); 
    }    */ 
  } else {
    $(".navbar").addClass("navbar-dark");
    $(".navbar").removeClass("navbar-light");
    $(".navbar").removeClass("bg-light");
  }
}

