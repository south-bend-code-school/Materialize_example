// surrounding function; always starts jQuery
(function(){
// my first event written in jQuery ($); kicks off all of my code
  $(document).ready(initialize);

  function initialize(){
    // clean side nav for when you collapse your navbar on mobile devices
    $(".button-collapse").sideNav();
    // drop down for side nav bar
    $(".dropdown-button").dropdown();
    // slider or automated carousel
    $('.slider').slider({
      // speeds up the timing of my slider aka carousel
      interval: 1500,
    });
    // makes my modal or pop up work
    $('.modal').modal();
  }

})();
