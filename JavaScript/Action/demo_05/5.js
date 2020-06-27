// var item1 = document.getElementById("item1");
// var item1 = document.getElementById("item2");
// var item1 = document.getElementById("item3");
// var item1 = document.getElementById("item4");
// var item1 = document.getElementById("item5");
// var oBox = document.getElementById("box");
// item1.onmouseover = function () {
//   oBox.style.background = `url('images/01.jpg') no-repeat`;
// };
function $(id) {
    return typeof id === 'string' ? document.getElementById(id) : null;
}
function changebgcImg(liId, imgSrc){
    $(liId).onmouseover = function (){
        $('box').style.background = imgSrc;
    }
}
// changebgcImg('item1',"url('images/01.jpg') no-repeat")
// changebgcImg('item2',"url('images/02.jpg') no-repeat")
// changebgcImg('item3',"url('images/03.jpg') no-repeat")
// changebgcImg('item4',"url('images/04.jpg') no-repeat")
// changebgcImg('item5',"url('images/05.jpg') no-repeat")
var items = document.getElementsByClassName('item')
for (var i = 0; i < items.length; i++){
    var item = items[i];
    item.id = i + 1;
    items[i].onmouseover = function(){
        $('box').style.background = `url('images/0${this.id}.jpg') no-repeat`
    }
}
