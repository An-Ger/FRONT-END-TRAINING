var skin = document.getElementById('skin')
var allItems = document.getElementsByTagName('li')
for (var i = 0; i < allItems.length; i++){
    allItems[i].index = i + 1;
    allItems[i].onclick = function(){
        skin.style.backgroundImage = `url('images/${this.index}.jpg')`
        console.log(this.index);
        
    }
}