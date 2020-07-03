window.onload = function () {
    $('btn').onclick = function setsss() {
        var content = $('comment').value;
        if(content.length === 0){
            alert('请输入内容')
            return;
        }
        var newLi = document.getElementById('li');
        newLi.innerHTML = `${content}<a href = 'javascript:void(0)'>删除</a>`;
        $('comment_content').appendChild(newLi)
    }

}
function $(id){
    return typeof id === 'string' ? document.getElementById('id'):null;
}