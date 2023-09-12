
var menu=document.getElementById("menu-icon");
menu.addEventListener("click",slider);

var disappear=document.getElementById("carouselExampleInterval");
disappear.addEventListener("mouseover",disappeared);

var disappear2=document.getElementById("funn");
disappear2.addEventListener("mouseover",disappeared);



function disappeared(){
  document.getElementById("for-table").style.transform="translate(-100%)";
}


function slider(){
  document.getElementById("for-table").style.transform="translate(0%)";
  document.getElementById("for-table").style.transition="transform 1s";
}