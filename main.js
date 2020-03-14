$(document).ready(function() {


    $('.nav__link').on('click' , function(e) {
        e.preventDefault();
        $('body, html').animate( {
            scrollTop: $(this.hash).offset().top
        }, 500);
    });

    
    $('#menu').on('click', function() {

        $('.droppingMenu').toggleClass('drop');
    });



});