$(document).ready(function(){
  var autoScroll=1;
//slideshow function
function changeSlide(direct) 
{
  var currImg = $('img.active');
  var nextImg = currImg.next('img');
  var prevImg = currImg.prev('img');

  if (direct == 'next') 
  {
    if (nextImg.length!=0) nextImg.fadeIn().addClass('active');
    else
      $('img').first().fadeIn().addClass('active');
  } 
  else 
  {
    if (prevImg.length!=0) prevImg.fadeIn().addClass('active');
    else
      $('img').last().fadeIn().addClass('active');
  }
  
  currImg.fadeOut().removeClass('active');
};
//next button
$('.btn-next').click(function(){changeSlide('next');});
//prev button
$('.btn-prev').click(function(){changeSlide('prev');});
//auto scroll
function autoPlay(){
 play = setInterval(function (){changeSlide('next');} , 5000);
}
if(autoScroll == 1){
    autoPlay(); 
  }
//hover image & 2button -> auto scroll off
$('img, .btn-prev, .btn-next').hover(function() {
  clearInterval(play);
}, function(){
  autoPlay();
});

})