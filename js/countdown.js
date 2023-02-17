var START_TIME = 1676617200;
var END_TIME = 1677225600;
var CIRC = 377;

function init(){
  var now = Date.now()/1000;
  if (now <= END_TIME){
    progress = (now - START_TIME)/(END_TIME - START_TIME)*CIRC;
    document.documentElement.style.setProperty('--progress', progress);
    document.documentElement.classlist.remove("container");
    document.documentElement.classlist.add("container");
  }
}
