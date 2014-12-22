  var agents = [
    'Runt', 
    'Aslan', 
    'Sneaky Furfoot', 
    'Caboodle', 
    'Seamus', 
    'Angus', 
    'Blemange', 
    'Princess'
  ];

  exports.getAgent = function() {
    var idx = Math.floor(Math.random() * agents.length);
    return agents[idx];
  };
