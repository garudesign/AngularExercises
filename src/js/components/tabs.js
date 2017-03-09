/*
    * @description Funcion para inicializar el componente Tab de jQuery UI
    * @returns {Object} Devuelve la instancia del carrusel del Tab de jQuery UI.
*/
var tabs  = (function () {
    /*
        * @description Funcion que inicializa el componente Tab
        * @param {string} - element Contiene el elemento del dom sobre el que se inicializa el componente Tab.
    */
    var init = (function (element) {
        var el = $(element);
        el.tabs();

    });

    return {
        init: init
    };

})();
