/*
    * @description Funcion para redimensionar el alto (height) equitativo de un grupo de componentes
    * @param {Object} obj Contiene el objeto con el selector (elements) y si tiene hijos (child)
*/

dFrontJs.calculateHeight  = (function (obj) {
    var elements = obj.elements;
    var child = obj.child;

    var init = (function () {
        var $elem = isBoolean();
        /*
            * @description Reseteamos los height a "auto" esto es importante para el resize de window
        */
        $elem.css("height", "auto");
        var auxHeight = [];
        /*
            * @description Recorremos todos los elementos que queremos redimensionar
        */
        $.each($(elements), function () {
            var outer = 0;
            if(typeof child === "boolean"){
                outer = $(this).outerHeight();
            }else{
                outer = $(this).find(child).outerHeight();
            }
            auxHeight.push(outer);
        });
        /*
            * @description Recogemos el valor más alto
        */
        var maxHeight = Math.max.apply(Math, auxHeight);
        /*
            * @description Le aplicamos el valor mas alto a los elementos
        */
        $elem.css("height", maxHeight);
    });
    /*
        * @description Funcion para redimensionar el alto (height) equitativo de un grupo de componentes
        * @returns {Object|jquery} Elemento sobre el que se va realizar el cálculo de altura, dependiendo de si tiene hijos o no tiene.
    */
    var isBoolean = (function () {
        var $elem;
        if(typeof child === "boolean") {
            $elem = $(elements);
        }else{
            $elem = $(elements).find(child);
        }
        return $elem;
    });

    init();
});
