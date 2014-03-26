var pageCode = function(){};

pageCode.loadScript = function() {
  if(typeof siteCode == null) {
    var elem = document.createElement('script');
    elem.src = 'scripts/site.js';
    elem.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(elem);
  };
  return false;
};
