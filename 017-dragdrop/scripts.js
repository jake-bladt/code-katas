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
      var val = $dropped.attr('data-numeric-value');
      alert('Value is ' + val);
    }
  });
});
