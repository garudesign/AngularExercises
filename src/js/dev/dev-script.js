$(document).ready(function () {

    /*
        * @description Incializamos select cutom
    */
    if ($('[data-js="select-custom"]').length > 0){
        selectCustom.init('[data-js="select-custom"]');
    }

    /*
        * @description Incializamos slider (Carrusel de imágenes)
    */
    if ($('[data-js="slider"]').length > 0){
        slider.init('[data-js="slider"]');
    }

    /*
        * @description Incializamos componente Tabs jQuery UI
    */
    if ($('[data-js="tabs"]').length > 0){
        tabs.init('[data-js="tabs"]');
    }

    /*
        * @description Igualamos el alto a todos los items de container items
    */
    dFrontJs.calculateHeight({
        "elements":"[data-js='items-height']",
        "child":true
    });

});
