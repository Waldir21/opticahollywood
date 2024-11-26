$(document).ready(function() {
    // Inicializar el carrusel de marcas
    $('.brand-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }
        
]
    });

    // Funcionalidad para mostrar/ocultar el mapa
    $('#showMap').click(function() {
        $('#map').toggle();
        $(this).text(function(i, text) {
            return text === "Ver ubicación" ? "Ocultar ubicación" : "Ver ubicación";
        });
    });

    // Efecto hover para los enlaces del navbar
    $('.navbar-nav .nav-link').hover(
        function() {
            $(this).css('color', '#007bff');
        },
        function() {
            $(this).css('color', '');
        }
    );
});
