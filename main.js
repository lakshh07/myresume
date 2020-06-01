$(function() {
   $(".navigation__icon").click(function() {
     $(".navigation").toggleClass('navigation-open');
  });
});


AOS.init();

var s = skrollr.init();

VanillaTilt.init(document.querySelector(".bye"), {
  max: 25,
  speed: 200
});

$('.top span').click(function(){
  $('.site-banner').animate({
    scrollTop:0
  },1000);
})

//function toggle(){
  //var contact = document.getElementById('contact');
  //contact.classList.toggle('active') //

  //var popup = document.getElementById('popup');
  ///popup.classList.toggle('active')


