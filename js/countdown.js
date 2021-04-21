var START_TIME = 1618718400;
var END_TIME = 1619206200;
var CIRC = 377

function init(){
  var now = Date.now()/1000;
  progress = (now - START_TIME)/(END_TIME - START_TIME)*CIRC;
  document.documentElement.style.setProperty('--progress', progress);
}


