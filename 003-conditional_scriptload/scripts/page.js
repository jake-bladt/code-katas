var pageCode = function(){};

pageCode.loadEasy = function() {
  var resultElem = document.getElementById('loadResult');
  resultElem.innerText = 'Script loaded.';
  return false;
};

pageCode.loadScript = function() {
  if(typeof siteCode == 'undefined') {
    var elem = document.createElement('script');
    elem.src = 'scripts/site.js';
    elem.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(elem);
  };
  return false;
};
