var btns = document.getElementsByTagName('button')
var items = document.getElementsByTagName('item')
btns[0].onclick = function () {
    var itemW = 248;
    for(var i = 0; i < items.length; i++) {
        items[i].style.float = 'left'
        items[i].parentNode.style.width = (3 * items[i].offsetWidth) + 'px'
    }
}
btns[1].onclick = function () {
    var itemW = 248;
    for(var i = 0; i < items.length; i++) {
        items[i].style.float = 'left'
        items[i].parentNode.style.width = (4 * items[i].offsetWidth) + 'px'
    }
}
btns[2].onclick = function () {
    var itemW = 248;
    for(var i = 0; i < items.length; i++) {
        items[i].style.float = 'left'
        items[i].parentNode.style.width = (5 * items[i].offsetWidth) + 'px'
    }
}
function Mj(colNum){
    for(var i = 0; i < items.length; i++) {
        items[i].style.float = 'left'
        items[i].parentNode.style.width = (colNum * items[i].offsetWidth) + 'px'
    }
}