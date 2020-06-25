var flower = document.getElementById('flower')
var nextBtn = document.getElementById('next')
var prevBtn = document.getElementById('prev')
var minnumber = 1, maxnumber = 5, number = minnumber;
nextBtn.onclick = function(){
    if(number === maxnumber){
        number = minnumber
    }else{
        number++;
    }
    flower.setAttribute('src',`images/0${number}.jpg`)
}
prevBtn.onclick = function(){
    if(number === minnumber){
        number = maxnumber
    }else{
        number--;
    }
    flower.setAttribute('src',`images/0${number}.jpg`)
}