$(document).ready(function() {
  $('.number-card').draggable({
    cursor: 'move',
    helper: function() {
      return $(this).clone();
    }
  });
});
