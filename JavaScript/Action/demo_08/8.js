function $(id) {
    return typeof id === 'string' ? document.getElementById(id) : null;
}
$('score').onblur = function (){
    var value =parseFloat(this.value)
    if(isNaN(value)){
        $('prompt').innerHTML = '输入的分数不正确'
    }
}