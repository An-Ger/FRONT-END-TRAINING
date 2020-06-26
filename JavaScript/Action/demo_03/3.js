var bigImg = document.getElementById('bigImg')
var smallImgs = document.getElementsByClassName('smallImg')
for(var i = 0; i < smallImgs.length; i++){
    smallImgs[i].onmouseover = function (){
        for( let j = 0; j < smallImgs.length; j++){
            smallImgs[j].parentNode.parentNode.setAttribute('class', '');
        }
        var smallImgSrc = this.getAttribute('src')
        bigImg.setAttribute('src', smallImgSrc)
        this.parentNode.parentNode.setAttribute('class', 'active');
    }
}