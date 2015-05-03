/* Controls based on user's session
 * NOTE: Do not use this to hide sensitive elements - this is client side only
 *       and designed for display of navigation options */
bowtie.user.info(function(user){
  if(user){
    $('.signed-in').show();
  }else{
    $('.signed-out').show();
  }

  $('.plan-' + user.plan_id.replace(' ', '-').toLowerCase()).show();
});
