var blendAmount = 70
var delay = -10

var windowWidth = window.innerWidth

var bg = document.getElementById("header");

document.onmousemove = function(e) {

  mouseX = Math.round(e.pageX / windowWidth * 100 - delay);

  col1 = mouseX - blendAmount
  col2 = mouseX + blendAmount
  
  bg.style.background = "linear-gradient(to right, #0297f4 " + col1 + "%,#f11713 " + col2 + "%)";
  
};