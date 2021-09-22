var START_TIME = 1632268800;
var END_TIME = 1633262400;
var CIRC = 377;

function init(){
  var now = Date.now()/1000;
  progress = (now - START_TIME)/(END_TIME - START_TIME)*CIRC;
  document.documentElement.style.setProperty('--progress', progress);
  document.documentElement.classlist.remove("container");
  document.documentElement.classlist.add("container");
}

