$(document).ready(function() {
  $('.number-card').draggable({
    cursor: 'move',
    helper: function() {
      var $clone = $(this).clone();
      $clone.addClass('card-dragging');
      return $clone;
    },
    start: function(event, ui) {
      $(this).addClass('card-drained');
    },
    stop: function(event, ui) {
      $(this).removeClass('card-drained');
    }
  });
});
