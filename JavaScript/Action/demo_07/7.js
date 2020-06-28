function $(id) {
    return typeof id === 'string' ? document.getElementById(id) : null;
}
var inputs = document.getElementsByTagName('input')
$('allSelect').onclick = function(){
    for(var i = 0; i < inputs.length; i++){
        inputs[i].checked = true;
    }
}
$('cancelSelect').onclick = function(){
    for(var i = 0; i < inputs.length; i++){
        inputs[i].checked = false;
    }
}
$('reverseSelect').onclick = function(){
    for(var i = 0; i < inputs.length; i++){
        // if(inputs[i].checked){
        //     inputs[i].checked = false;
        // }
        // else{
        //     inputs[i].checked = true;
        // }
        inputs[i].checked = !inputs[i].checked;
    }
}