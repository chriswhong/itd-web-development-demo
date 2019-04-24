// jQuery Syntax
// $(selector).method()

$(document).foundation();

$('button.color-changer').on('click', function() {
  console.log('YOU CLICKED ME!');

  var colorToChangeTo = $(this).data('color');
  console.log(colorToChangeTo);

  $('.mary').css('background-color', colorToChangeTo);
});

$('.hide-mary-pane').on('click', function() {
  $('.mary').hide();
});

$('.show-mary-pane').on('click', function() {
  $('.mary').show();
});
