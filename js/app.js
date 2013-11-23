// function onResize() {
//   var winHeight = $(window).height();
//   $("#sec-one").height(winHeight + 20);
//   $(".logo-wrapper").css('margin-top', (winHeight - 270)/2);
// }

// $(function() {
//   onResize();
//   $(window).resize(function() {
//     if($(window).scrollTop() == 0) {
//       onResize();
//     }
//   });
//   $(window).scroll(function(){
//     if($(window).scrollTop() <= 0) {
//       $("header").removeClass("scroll");
//     }
//     else {
//       $("header").addClass("scroll");
//     }

//     if($(window).scrollTop() > $(window).height()) {
//       $("#sec-one .wrapper").addClass('inactive');
//       $("#logo").addClass('active');
//     }
//     else {
//       $("#sec-one .wrapper").removeClass('inactive');
//       $("#logo").removeClass('active');
//     }
//   });
// });


// $(function() {

//   $(".home-container").click(function() {
//     $(this).addClass("inactive-section");
//   });
// });