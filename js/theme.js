$(function(){
  // Set height of navfix
  $('#myAffix').affix({
    offset: {
      top: 250,
      bottom: function () {
        return (this.bottom = $('.bs-footer').outerHeight(true))
      }
    }
  })

  // Close collapse navbar
  $('.navbar-collapse a').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
});
