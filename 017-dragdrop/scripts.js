$(document).ready(function() {
  $('.number-card').draggable({
    cursor: 'move',
    helper: function() {
      var $clone = $(this).clone();
      $clone.addClass('card-dragging');
      return $clone;
    }
  });
});
