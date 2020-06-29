window.onload = function() {
    var file = document.getElementById('file')
    file.onchange = function (){
        var path = this.value;
        var location = path.lastIndexOf('.')
        var suffix = path.substr(location);
        var lower_suffix = suffix.toLowerCase();
        if(lower_suffix === '.jpg' || lower_suffix === '.png'
    || lower_suffix === '.jpeg' || lower_suffix ==='.gif')
    alert('right')
    else{
        alert('error')
    }
    }
}