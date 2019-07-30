$(document).ready(function(){
  $('.carousel').each(function(){
    var $this = $(this),
        autoScroll=1,
        play;
//slideshow function
function changeSlide(direct){
  var currImg = $this.find('.item.active'),
      nextImg = currImg.next('.item'),
      prevImg = currImg.prev('.item');
  currImg.fadeOut().removeClass('active');
  if (direct == 'next') 
  {
    if (nextImg.length)
      currImg = currImg.next('.item');
    else
      currImg = $this.find('.item').first();
  } 
  else  
  {
    if (prevImg.length) 
      currImg = currImg.prev('.item');
    else
      currImg = $this.find('.item').last();
  }
  currImg.fadeIn().addClass('active');
};
//next button
$this.find('.right').click(function(){
  changeSlide('next');
});
//prev button
$this.find('.left').click(function(){
  changeSlide('prev');
});
//auto scroll
function autoPlay(){
 play = setInterval(function (){
          changeSlide('next');
          }, 1000);
 };
if(autoScroll == 1)
{
  autoPlay(); 
}
//hover image & 2button -> auto scroll off
$this.find('.item, .left, .right').hover(function(){
  clearInterval(play);
  },function(){
    autoPlay();
    });

 });

});