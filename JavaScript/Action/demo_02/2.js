var obtn = document.getElementById('btn')
var newImg = document.getElementsByTagName("img")[0]
obtn.onclick = function(){
    if(obtn.innerHTML === '隐藏'){
    newImg.style.display = 'none';
    obtn.innerHTML = '显示'
    }else{
        newImg.style.display = 'block';
        obtn.innerHTML = '隐藏'
    }
}