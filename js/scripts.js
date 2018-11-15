var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

/*$(document).ready(function(){
$(".ico").addClass("fa-minus blink rotate");
  $("input").focus(function () {
    $(".ico").addClass("fa-search search");
    $(".ico").removeClass("fa-minus blink");
  });
  $("input").focusout(function () {
    $(".ico").addClass("fa-minus blink");
    $(".ico").removeClass("search");
  });
});
