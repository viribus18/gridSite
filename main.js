$(document).ready(function() {
 
   $(".navLink a").click(function() {
       $("html, body").animate({
           scrollTop: $($(this).attr("href")).offset().top + "px"
       }, {
           duration: 800,
           easing: "swing"
       });
       return false;
   });
 
 });