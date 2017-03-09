/*
    * @description Funcion para plegar/desplegar un contenedor
    * @param {Object} elements Contiene el accionador y el contenedor (hermano) que va a ser plegado/desplegado
*/

dFrontJs.toggle  = (function (elements) {

    var $element = $(elements.container);
    var $action = $(elements.action);
    /*
        * @description Inicializa la funcionalidad toggle
    */
    var init = (function () {
        eventToggle($action);
    });
    /*
        * @description Asgina el evento al botón o accionador
        * @param {Object|jquery} element contiene el botón o accionador del toggle
    */
    var eventToggle = (function (element) {
        element.on("click", upDown);
    });
    /*
        * @description Asgina el evento al botón o accionador
        * @param {Object|jquery} element contiene el botón o accionador del toggle
    */
    var upDown = (function (event) {
        $(event.target).siblings($element).slideToggle("slow");
    });

    init();
});