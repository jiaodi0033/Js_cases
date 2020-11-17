function myFunction() {
    var input=document.getElementById('myInput');
    var li=document.querySelector('#myUL').children

    for (var i=0;i<li.length;i++){
        if ((li[i].innerText.toUpperCase().indexOf(input.value.toUpperCase()))>-1){
            li[i].style.display='';
        }else {
            li[i].style.display='none';
        }
    }
}