var sliderTimer = null;
var curPic = 1;
var marLeft= [0,-1200,-2400];
var sliderSpeed = 3500;
var move = function(direction) {
  if(direction=="in"){
    curPic = curPic==3?1:curPic+1;
  }else if(direction=="back"){
    curPic = curPic==1?3:curPic-1;
  }
  $(".pic-wrapper").css("marginLeft", marLeft[curPic-1]+"px");
}

sliderTimer = setInterval(function(){
  move("in");
},sliderSpeed);
$(".icon-left").click(function(){
  clearInterval(sliderTimer);
  move("back");
  sliderTimer = setInterval(function(){move("in");},sliderSpeed);
});
$(".icon-right").click(function(){
  clearInterval(sliderTimer);
  move("in");
  sliderTimer = setInterval(function(){move("in");},sliderSpeed);
});
