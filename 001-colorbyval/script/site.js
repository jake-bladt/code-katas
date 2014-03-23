window.onload = function() {
	// alert('window loaded.');
	var parent = document.getElementById('year2014');
	for(var i = 0; i < 364; i++) {
		var id = 'data' + i;
		var newDiv = document.createElement('div');
		newDiv.setAttribute('id', id);
		newDiv.setAttribute('class', 'dailyReading readingNoData');
		parent.appendChild(newDiv);
	}
};
