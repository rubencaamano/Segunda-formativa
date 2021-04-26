$(document).ready(function(){

    $('seccion#galeria-imagenes article nav a').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000,'easeOutExpo');
        event.preventDefault();
    });


    
    $('#abrir').click(function(){
        $('aside#menu-moviles').animate({
            left: 0
        },300,'easeOutExpo');

        $('#abrir').hide();
        $('#cerrar').show();

        event.preventDefault();
    });

    $('#cerrar, aside#menu-moviles nav a').click(function(){
        $('aside#menu-moviles').animate({
            left: -290
        },300,'easeOutExpo');

        $('#abrir').show();
        $('#cerrar').hide();

        event.preventDefault();
    });


    $('seccion#galeria-imagenes').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000, 
        speed: 300,
        arrows: true,
        pauseOnHover: false,        
    });
});