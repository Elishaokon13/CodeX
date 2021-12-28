document.addEventListener('DOMContentLoaded', function() {
    $(document).ready(function() {
        $('.selectbox').niceSelect();
    });
    $('.prog__item__switcher').click(function(e) {
        $(this).toggleClass('active');
        $(this).next('.prog__item__expandable').slideToggle();
    });
});