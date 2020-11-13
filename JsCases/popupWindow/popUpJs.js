$('.openBtn').click(function () {
    $('.modal').show();
})
$('.closeBtn').click(function () {
    $('.modal').hide();
})

let modal=document.querySelector('.modal');
window.onclick=function (event) {
    if(event.target == modal){
        $('.modal').hide();
    }
}
