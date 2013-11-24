$(function() {

  var hashLocation = "",
      $mainContainer = $("#main-container");

  pageTitleContainer = $(".page-title-container");
  pageTitleContainer.removeClass("inactive");



  $("header").delegate("a", "click", function() {
    window.location.hash = $(this).attr("href");
    return false;
  });

  $(window).bind("hashchange", function() {
    pageTitleContainer.addClass("inactive");

    hashLocation = window.location.hash.substring(1);

    setTimeout(function() {
      if(hashLocation) {
        $mainContainer.find("#cont").fadeOut(200, function() {
          $mainContainer.hide().load(hashLocation + " #cont", function() {
            $mainContainer.fadeIn(200, function() {
              pageTitleContainer = $(".page-title-container");
              pageTitleContainer.removeClass("inactive");
            });
          });
        });
      }
    }, 250);
  });
});




