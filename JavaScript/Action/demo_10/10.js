window.onload = function(){
    var code;
    var codeObj = document.getElementById('code')
    var newCodeInput = document.getElementById('newCode')
    var validate = document.getElementById('validate')
    creatCode();
    function random(max, min){
        return Math.floor(Math.random()*(max-min)+min)
    }
    function creatCode(){
        code = ''
        var codeLength = 4;
        var randomCode = [0,1,2,3,4,5,6,7,8,9,'A','B','C']
        for(var i = 0;i < codeLength; i++){
            var index = random(0, 11)
            code += randomCode[index]
        }
        codeObj.innerHTML = code;
    }
    validate.onclick = function(){
        var newCodes = newCodeInput.value.toUpperCase();
        if(newCodes === code){
            window.location.href = 'http://www.baidu.com'
        }
        else {alert("ERROR")
        newCodeInput.value = ' ';
        creatCode();
    }
    }
}