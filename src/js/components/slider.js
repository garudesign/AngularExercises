/*
    * @description Funcion para inicializar el carrusel de imágenes
    * @returns {Object} Devuelve la instancia del carrusel de imágenes.
*/
var slider  = (function () {
    /*
        * @description Funcion que inicializa el select
        * @param {string} - element Contiene el elemento del dom sobre el que se inicializa el carrusel del imágenes.
    */
    var init = (function (element) {
        var el = $(element);
        el.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        });

    });

    return {
        init: init
    };

})();
