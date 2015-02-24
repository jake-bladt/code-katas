$(document).ready(function() {
  $('.number-card').draggable({
    cursor: 'move',
    helper: function() {
      var $clone = $(this).clone();
      $clone.addClass('card-dragging');
      return $clone;
    },
    start: function() {
      $(this).addClass('card-drained');
    },
    stop: function() {
      $(this).removeClass('card-drained');
    }
  });
});
