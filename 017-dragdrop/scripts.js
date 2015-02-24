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

  $('.letter-card').droppable({
    drop: function(event, ui) {
      var $dropped = ui.draggable;
      var newVal = Number($dropped.attr('data-numeric-value'));

      var $scoreElement = $(this).siblings('.score-chyron').find('.score-number');
      var oldScore = Number($scoreElement.text());
      var newScore = newVal + oldScore;
      $scoreElement.text(newScore);
    }
  });
});
