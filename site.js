$.noConflict();

jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  
  $('#form').submit(function(e) {
    if($.trim($('#email').val()) === '' || $.trim($('#name').val()) === '') {
      alert('Oops! Make sure you filled everything!');
      return false;
    }
    event.preventDefault();
  });
});
