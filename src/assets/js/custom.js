
//mobile menu
function openNav() {
    document.getElementById("mobile-menu").style.width = "250px";
}
function closeNav() {
    document.getElementById("mobile-menu").style.width = "0";
}



//background gray
$(".navbar-toggler").click(function(){
    $(".background-gray").addClass("open-gray");
});
$(".closebtn").click(function(){
    $(".background-gray").removeClass("open-gray");
});
$(".search .btn").click(function(){
    $(".search").toggleClass("open-search");
});

//swiper slider
var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    speed: 600,
    loop: true,
    parallax: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
});


//play video
$('#video1').on('shown.bs.modal', function () {
    $('#video11')[0].play();
});
$('#video1').on('hidden.bs.modal', function () {
    $('#video11' +
        '')[0].pause();
});
$('#video2').on('shown.bs.modal', function () {
    $('#video12')[0].play();
});
$('#video2').on('hidden.bs.modal', function () {
    $('#video12')[0].pause();
});

$(function () {
    $('[data-toggle="popover"]').popover()
})