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
      var newVal = $dropped.attr('data-numeric-value');

      var $chyron = $dropped.siblings('.score-chyron');
      var $scoreElement = $chyron.find('score-number');
      var score = $scoreElement.innerHtml();

      alert('Value is ' + score);
    }
  });
});
