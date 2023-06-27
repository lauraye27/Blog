
document.querySelector('.menu-icon').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('show');
});

$(document).ready(function () {
    $('.slider').bxSlider({
        minSlides: 1, // Mínimo de slides a mostrar
        maxSlides: 1, // Máximo de slides a mostrar
        slideMargin: 0, // Margen entre los slides
        auto: true, // Activar reproducción automática
        pause: 4000, // Tiempo de pausa entre cada slide (en milisegundos)
        speed: 500, // Velocidad de transición entre slides (en milisegundos)
        controls: false, // Sin flechas para pasar las imagenes
    });
});