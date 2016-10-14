$(document).ready(function() {
    // This WILL work because we are listening on the 'document', 
    // for a click on an element with an ID of #test-element
    $(document).on("click", ".close-composer",function() {
      $(".composer-textarea").slideUp('fast');
      $(".tools").slideUp('fast');
    });
    $(document).on("click", "#pin-post-btn",function() {
      $(".composer-textarea").slideDown();
      $(".tools").slideDown();
    });
});