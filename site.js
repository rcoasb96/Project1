$.noConflict();

jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  
  $('form').submit(function(e){
    alert('Puppies are going your way!');
  });
});
