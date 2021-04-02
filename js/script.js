

$(document).ready(function () {
    $('.icon-menu, .nav__item').click(function (event) {
        $('.icon-menu,.nav__wrap').toggleClass('_active');
        $('body').toggleClass('lock');
    });
});






