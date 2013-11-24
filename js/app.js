$(function() {

  var hashLocation = "",
      $mainContainer = $("#main-container");

  winHeight = $(window).height();
  winWidth = $(window).width();

  loadLocation = window.location.hash.substring(1);

  $(".logo-image").hover(function() {
    $(".logo-text").toggleClass("active");
  });

  if(loadLocation === "") {
    window.location.replace("#/");
  }
  else {
    console.log(loadLocation);
    $('a[href="' + loadLocation + '"]').parent().addClass("active");
  }


  // $(".loading-indicator").css("top", (winHeight - 16)/2);
  $(".loading-indicator").css("left", (winWidth - 16)/2);
  $(".loading-indicator").addClass("is-loading");


  pageTitleContainer = $(".page-title-container");
  pageTitleContainer.removeClass("inactive");

  $("header").delegate("a", "click", function() {
    window.location.hash = $(this).attr("href");
    $(".nav-list li").removeClass("active");
    $(this).parent().addClass("active");
    return false;
  });

  $(window).bind("hashchange", function() {
    pageTitleContainer.addClass("inactive");

    hashLocation = window.location.hash.substring(1);


    setTimeout(function() {
      if(hashLocation) {
        $mainContainer.find("#cont").fadeOut(200, function() {
          $(".loading-indicator").addClass("is-loading");
          $mainContainer.hide().load(hashLocation + " #cont", function() {
            $(".loading-indicator").removeClass("is-loading");
            $mainContainer.fadeIn(200, function() {
              pageTitleContainer = $(".page-title-container");
              pageTitleContainer.removeClass("inactive");
            });
          });
        });
      }
    }, 250);
  });

  $(window).trigger('hashchange');

});




