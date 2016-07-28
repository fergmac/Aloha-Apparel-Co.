


$(document).ready(function(){
  
$(function() {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});	


$('#subscribe').submit(function(event){
   event.preventDefault();
   var input = $('.input-box')

   if(input.val().length>0){
     alert('Thanks for subscribing!');
    
   } else{
     alert('Please enter a valid email address.');
   }
 });
  $(function() {
     $("a[href^='#']").not("a[href='#']").click(function() {
        $("#"+$(this).attr("href").slice(1)+"").focus();
     });
  });
});


