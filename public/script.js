$(document).ready(function(){
    function toggleMenu(){
        $('.menu-button .fa-times').toggleClass('hide');
        $('.menu-button .fa-bars').toggleClass('hide');
        $('.mobile-links').toggleClass('flex');
    }
    // toggle mobile menu
    $('.menu-button .fa-bars').click(toggleMenu);

    $('.menu-button .fa-times').click(toggleMenu);

    $('.mobile-links .fa-times').click(toggleMenu);
    
});