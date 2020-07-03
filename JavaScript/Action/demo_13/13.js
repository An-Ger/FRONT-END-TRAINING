var box = document.getElementById('box')
var pic = document.getElementsByName('img')[0]
var divTop = document.getElementById('top')
var divBottom = document.getElementById('bottom')
var num = 0, timer = null;
divTop.onmouseover = function(){
    timer = setInterval(function(){
        num -= 10;
        if(num >= -3666){
            pic.style.top = num + 'px' 
        }
        else{
            clearInterval(timer)
        }
       
    }, 0)
}
divBottom.onmouseover = function(){
    timer = setInterval(function(){
        num += 10;
        if(num <= 0){
            pic.style.top = num + 'px' 
        }
        else{
            clearInterval(timer)
        }
       
    }, 0)
}