/*
 * @description Funcion para inicializar el carrusel de imágenes
 * @returns {Object} Devuelve la instancia del carrusel de imágenes.
 */
var select_custom  = (function () {
	/*
	 * @description Funcion que inicializa el select
	 * @param {string} - element Contiene el elemento del dom sobre el que se inicializa el carrusel del imágenes.
	 */
	var init = (function (element) {

	});

	return {
		init: init
	};

})();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzZWxlY3QtY3VzdG9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAZGVzY3JpcHRpb24gRnVuY2lvbiBwYXJhIGluaWNpYWxpemFyIGVsIGNhcnJ1c2VsIGRlIGltw6FnZW5lc1xuICogQHJldHVybnMge09iamVjdH0gRGV2dWVsdmUgbGEgaW5zdGFuY2lhIGRlbCBjYXJydXNlbCBkZSBpbcOhZ2VuZXMuXG4gKi9cbnZhciBzZWxlY3RfY3VzdG9tICA9IChmdW5jdGlvbiAoKSB7XG5cdC8qXG5cdCAqIEBkZXNjcmlwdGlvbiBGdW5jaW9uIHF1ZSBpbmljaWFsaXphIGVsIHNlbGVjdFxuXHQgKiBAcGFyYW0ge3N0cmluZ30gLSBlbGVtZW50IENvbnRpZW5lIGVsIGVsZW1lbnRvIGRlbCBkb20gc29icmUgZWwgcXVlIHNlIGluaWNpYWxpemEgZWwgY2FycnVzZWwgZGVsIGltw6FnZW5lcy5cblx0ICovXG5cdHZhciBpbml0ID0gKGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cblx0fSk7XG5cblx0cmV0dXJuIHtcblx0XHRpbml0OiBpbml0XG5cdH07XG5cbn0pKCk7XG4iXSwiZmlsZSI6InNlbGVjdC1jdXN0b20uanMifQ==

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzbGlkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICAqIEBkZXNjcmlwdGlvbiBGdW5jaW9uIHBhcmEgaW5pY2lhbGl6YXIgZWwgY2FycnVzZWwgZGUgaW3DoWdlbmVzXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fSBEZXZ1ZWx2ZSBsYSBpbnN0YW5jaWEgZGVsIGNhcnJ1c2VsIGRlIGltw6FnZW5lcy5cbiovXG52YXIgc2xpZGVyICA9IChmdW5jdGlvbiAoKSB7XG4gICAgLypcbiAgICAgICAgKiBAZGVzY3JpcHRpb24gRnVuY2lvbiBxdWUgaW5pY2lhbGl6YSBlbCBzZWxlY3RcbiAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gLSBlbGVtZW50IENvbnRpZW5lIGVsIGVsZW1lbnRvIGRlbCBkb20gc29icmUgZWwgcXVlIHNlIGluaWNpYWxpemEgZWwgY2FycnVzZWwgZGVsIGltw6FnZW5lcy5cbiAgICAqL1xuICAgIHZhciBpbml0ID0gKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHZhciBlbCA9ICQoZWxlbWVudCk7XG4gICAgICAgIGVsLnNsaWNrKHtcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgYXJyb3dzOiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogaW5pdFxuICAgIH07XG5cbn0pKCk7XG4iXSwiZmlsZSI6InNsaWRlci5qcyJ9

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0YWJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgKiBAZGVzY3JpcHRpb24gRnVuY2lvbiBwYXJhIGluaWNpYWxpemFyIGVsIGNvbXBvbmVudGUgVGFiIGRlIGpRdWVyeSBVSVxuICAgICogQHJldHVybnMge09iamVjdH0gRGV2dWVsdmUgbGEgaW5zdGFuY2lhIGRlbCBjYXJydXNlbCBkZWwgVGFiIGRlIGpRdWVyeSBVSS5cbiovXG52YXIgdGFicyAgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qXG4gICAgICAgICogQGRlc2NyaXB0aW9uIEZ1bmNpb24gcXVlIGluaWNpYWxpemEgZWwgY29tcG9uZW50ZSBUYWJcbiAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gLSBlbGVtZW50IENvbnRpZW5lIGVsIGVsZW1lbnRvIGRlbCBkb20gc29icmUgZWwgcXVlIHNlIGluaWNpYWxpemEgZWwgY29tcG9uZW50ZSBUYWIuXG4gICAgKi9cbiAgICB2YXIgaW5pdCA9IChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB2YXIgZWwgPSAkKGVsZW1lbnQpO1xuICAgICAgICBlbC50YWJzKCk7XG5cbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGluaXRcbiAgICB9O1xuXG59KSgpO1xuIl0sImZpbGUiOiJ0YWJzLmpzIn0=



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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjYWxjdWxhdGUtaGVpZ2h0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgICAqIEBkZXNjcmlwdGlvbiBGdW5jaW9uIHBhcmEgcmVkaW1lbnNpb25hciBlbCBhbHRvIChoZWlnaHQpIGVxdWl0YXRpdm8gZGUgdW4gZ3J1cG8gZGUgY29tcG9uZW50ZXNcclxuICAgICogQHBhcmFtIHtPYmplY3R9IG9iaiBDb250aWVuZSBlbCBvYmpldG8gY29uIGVsIHNlbGVjdG9yIChlbGVtZW50cykgeSBzaSB0aWVuZSBoaWpvcyAoY2hpbGQpXHJcbiovXHJcblxyXG5kRnJvbnRKcy5jYWxjdWxhdGVIZWlnaHQgID0gKGZ1bmN0aW9uIChvYmopIHtcclxuICAgIHZhciBlbGVtZW50cyA9IG9iai5lbGVtZW50cztcclxuICAgIHZhciBjaGlsZCA9IG9iai5jaGlsZDtcclxuXHJcbiAgICB2YXIgaW5pdCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyICRlbGVtID0gaXNCb29sZWFuKCk7XHJcbiAgICAgICAgLypcclxuICAgICAgICAgICAgKiBAZGVzY3JpcHRpb24gUmVzZXRlYW1vcyBsb3MgaGVpZ2h0IGEgXCJhdXRvXCIgZXN0byBlcyBpbXBvcnRhbnRlIHBhcmEgZWwgcmVzaXplIGRlIHdpbmRvd1xyXG4gICAgICAgICovXHJcbiAgICAgICAgJGVsZW0uY3NzKFwiaGVpZ2h0XCIsIFwiYXV0b1wiKTtcclxuICAgICAgICB2YXIgYXV4SGVpZ2h0ID0gW107XHJcbiAgICAgICAgLypcclxuICAgICAgICAgICAgKiBAZGVzY3JpcHRpb24gUmVjb3JyZW1vcyB0b2RvcyBsb3MgZWxlbWVudG9zIHF1ZSBxdWVyZW1vcyByZWRpbWVuc2lvbmFyXHJcbiAgICAgICAgKi9cclxuICAgICAgICAkLmVhY2goJChlbGVtZW50cyksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG91dGVyID0gMDtcclxuICAgICAgICAgICAgaWYodHlwZW9mIGNoaWxkID09PSBcImJvb2xlYW5cIil7XHJcbiAgICAgICAgICAgICAgICBvdXRlciA9ICQodGhpcykub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBvdXRlciA9ICQodGhpcykuZmluZChjaGlsZCkub3V0ZXJIZWlnaHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhdXhIZWlnaHQucHVzaChvdXRlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLypcclxuICAgICAgICAgICAgKiBAZGVzY3JpcHRpb24gUmVjb2dlbW9zIGVsIHZhbG9yIG3DoXMgYWx0b1xyXG4gICAgICAgICovXHJcbiAgICAgICAgdmFyIG1heEhlaWdodCA9IE1hdGgubWF4LmFwcGx5KE1hdGgsIGF1eEhlaWdodCk7XHJcbiAgICAgICAgLypcclxuICAgICAgICAgICAgKiBAZGVzY3JpcHRpb24gTGUgYXBsaWNhbW9zIGVsIHZhbG9yIG1hcyBhbHRvIGEgbG9zIGVsZW1lbnRvc1xyXG4gICAgICAgICovXHJcbiAgICAgICAgJGVsZW0uY3NzKFwiaGVpZ2h0XCIsIG1heEhlaWdodCk7XHJcbiAgICB9KTtcclxuICAgIC8qXHJcbiAgICAgICAgKiBAZGVzY3JpcHRpb24gRnVuY2lvbiBwYXJhIHJlZGltZW5zaW9uYXIgZWwgYWx0byAoaGVpZ2h0KSBlcXVpdGF0aXZvIGRlIHVuIGdydXBvIGRlIGNvbXBvbmVudGVzXHJcbiAgICAgICAgKiBAcmV0dXJucyB7T2JqZWN0fGpxdWVyeX0gRWxlbWVudG8gc29icmUgZWwgcXVlIHNlIHZhIHJlYWxpemFyIGVsIGPDoWxjdWxvIGRlIGFsdHVyYSwgZGVwZW5kaWVuZG8gZGUgc2kgdGllbmUgaGlqb3MgbyBubyB0aWVuZS5cclxuICAgICovXHJcbiAgICB2YXIgaXNCb29sZWFuID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgJGVsZW07XHJcbiAgICAgICAgaWYodHlwZW9mIGNoaWxkID09PSBcImJvb2xlYW5cIikge1xyXG4gICAgICAgICAgICAkZWxlbSA9ICQoZWxlbWVudHMpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAkZWxlbSA9ICQoZWxlbWVudHMpLmZpbmQoY2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gJGVsZW07XHJcbiAgICB9KTtcclxuXHJcbiAgICBpbml0KCk7XHJcbn0pO1xyXG4iXSwiZmlsZSI6ImNhbGN1bGF0ZS1oZWlnaHQuanMifQ==

var dFrontJs = {};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb3JlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBkRnJvbnRKcyA9IHt9O1xuIl0sImZpbGUiOiJjb3JlLmpzIn0=

dFrontJs.responsive  = (function (elements) {
    var resolutions = {
		"xl": "1280",
		"lg": "1024",
		"md": "768",
		"sm": "480",
		"xs": "320"
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJyZXNwb25zaXZlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImRGcm9udEpzLnJlc3BvbnNpdmUgID0gKGZ1bmN0aW9uIChlbGVtZW50cykge1xyXG4gICAgdmFyIHJlc29sdXRpb25zID0ge1xyXG5cdFx0XCJ4bFwiOiBcIjEyODBcIixcclxuXHRcdFwibGdcIjogXCIxMDI0XCIsXHJcblx0XHRcIm1kXCI6IFwiNzY4XCIsXHJcblx0XHRcInNtXCI6IFwiNDgwXCIsXHJcblx0XHRcInhzXCI6IFwiMzIwXCJcclxuICAgIH07XHJcbn0pO1xyXG4iXSwiZmlsZSI6InJlc3BvbnNpdmUuanMifQ==

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0b2dnbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgICogQGRlc2NyaXB0aW9uIEZ1bmNpb24gcGFyYSBwbGVnYXIvZGVzcGxlZ2FyIHVuIGNvbnRlbmVkb3JcclxuICAgICogQHBhcmFtIHtPYmplY3R9IGVsZW1lbnRzIENvbnRpZW5lIGVsIGFjY2lvbmFkb3IgeSBlbCBjb250ZW5lZG9yIChoZXJtYW5vKSBxdWUgdmEgYSBzZXIgcGxlZ2Fkby9kZXNwbGVnYWRvXHJcbiovXHJcblxyXG5kRnJvbnRKcy50b2dnbGUgID0gKGZ1bmN0aW9uIChlbGVtZW50cykge1xyXG5cclxuICAgIHZhciAkZWxlbWVudCA9ICQoZWxlbWVudHMuY29udGFpbmVyKTtcclxuICAgIHZhciAkYWN0aW9uID0gJChlbGVtZW50cy5hY3Rpb24pO1xyXG4gICAgLypcclxuICAgICAgICAqIEBkZXNjcmlwdGlvbiBJbmljaWFsaXphIGxhIGZ1bmNpb25hbGlkYWQgdG9nZ2xlXHJcbiAgICAqL1xyXG4gICAgdmFyIGluaXQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGV2ZW50VG9nZ2xlKCRhY3Rpb24pO1xyXG4gICAgfSk7XHJcbiAgICAvKlxyXG4gICAgICAgICogQGRlc2NyaXB0aW9uIEFzZ2luYSBlbCBldmVudG8gYWwgYm90w7NuIG8gYWNjaW9uYWRvclxyXG4gICAgICAgICogQHBhcmFtIHtPYmplY3R8anF1ZXJ5fSBlbGVtZW50IGNvbnRpZW5lIGVsIGJvdMOzbiBvIGFjY2lvbmFkb3IgZGVsIHRvZ2dsZVxyXG4gICAgKi9cclxuICAgIHZhciBldmVudFRvZ2dsZSA9IChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgIGVsZW1lbnQub24oXCJjbGlja1wiLCB1cERvd24pO1xyXG4gICAgfSk7XHJcbiAgICAvKlxyXG4gICAgICAgICogQGRlc2NyaXB0aW9uIEFzZ2luYSBlbCBldmVudG8gYWwgYm90w7NuIG8gYWNjaW9uYWRvclxyXG4gICAgICAgICogQHBhcmFtIHtPYmplY3R8anF1ZXJ5fSBlbGVtZW50IGNvbnRpZW5lIGVsIGJvdMOzbiBvIGFjY2lvbmFkb3IgZGVsIHRvZ2dsZVxyXG4gICAgKi9cclxuICAgIHZhciB1cERvd24gPSAoZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgJChldmVudC50YXJnZXQpLnNpYmxpbmdzKCRlbGVtZW50KS5zbGlkZVRvZ2dsZShcInNsb3dcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpbml0KCk7XHJcbn0pOyJdLCJmaWxlIjoidG9nZ2xlLmpzIn0=

/*****************************************************************************
*    Project: Exercices Angular
*    Description: AngularJS
******************************************************************************/

var app = angular.module('dFrontApp', ['slick']);

// Usamos [[]] para 'bindear' scopes de Angular ya que si usamos {{}} da conflictos con handlebars

//app.config(function($interpolateProvider) {
//    $interpolateProvider.startSymbol('[[');
//    $interpolateProvider.endSymbol(']]');
//});

// Controlador general para todas las paginas

app.controller('appCtrl', ['$scope','$rootScope', function ($scope, $rootScope) {
    $rootScope.titlepage = "Ejercicios de AngularJS"; 
    $scope.slickConfig = {
        enabled: true,
        autoplay: true,
        draggable: false,
        autoplaySpeed: 3000,
        method: {},
        event: {
            beforeChange: function (event, slick, currentSlide, nextSlide) {
            },
            afterChange: function (event, slick, currentSlide, nextSlide) {
            }
        }
    };
}]);

app.controller('containerCtrl', ['$scope','$rootScope', function ($scope, $rootScope) {
    $scope.titleChange = function (){
        $rootScope.titlepage = "Ejercicios de AngularJS - Título cambiado";
        $rootScope.colorBody = 'red';
    }
}]);

app.controller('checkCtrl', ['$scope','$rootScope', function ($scope, $rootScope) {
    $scope.arrlist = [
        {
            "ckid": 1,
            "color": "bronw",
            "label": "Marrón"
        },
        {
            "ckid": 2,
            "color": "yellow",
            "label": "Amarillo"
        },
        {
            "ckid": 3,
            "color": "green",
            "label": "Verde"
        },
        {
            "ckid": 4,
            "color": "blue",
            "label": "Azul"
        }
    ];

    $scope.colorChange = function (position,choice) {
        angular.forEach(choice, function (value, key) {
            if (position == key){
                if (choice[key].checked) {
                    $rootScope.colorBody = choice[key].color;
                }
                else{
                    $rootScope.colorBody = "white";
                }
            }
            else{
                choice[key].checked = false;
            }
        });
    };
}]);

app.controller('tablaCtrl', ['$scope','$rootScope', function ($scope, $rootScope) {
    $scope.datatable = {
        "caption": "Tabla usuarios",
        "header": [
            {
                "name": "Nombre"
            },
            {
                "name": "Nº empleado"
            }
            ,
            {
                "name": "Categoria"
            }
        ],
        "item": [
            {
                "name": "Juan Antonio",
                "id": "12345",
                "category": "CT"
            },
            {
                "name": "Jesús",
                "id": "98745",
                "category": "CT"
            },
            {
                "name": "Lorena",
                "id": "65485",
                "category": "CT"
            },
            {
                "name": "Dario",
                "id": "35798",
                "category": "CTJ"
            },
            {
                "name": "Araceli",
                "id": "85239",
                "category": "CAL"
            },
            {
                "name": "Martina",
                "id": "95125",
                "category": "CTJ"
            },
            {
                "name": "Josan",
                "id": "75321",
                "category": "CTJ"
            }
        ]
    };

    $scope.categoryIncludes = [];

    $scope.includeCategory = function(category) {
        var i = $.inArray(category, $scope.categoryIncludes);
        if (i > -1) {
            $scope.categoryIncludes.splice(i, 1);
        } else {
            $scope.categoryIncludes.push(category);
        }
    }

    $scope.categoryKey = function(datatable) {
        if ($scope.categoryIncludes.length > 0) {
            if ($.inArray(datatable.category, $scope.categoryIncludes) < 0)
                return;
        }

        return datatable;
    }
}]);

app.directive('tableEmployer', function(){
    return {
        restrict : 'E',
        template : '<table class="df-table"><caption class="df-table__heading">{{caption}}</caption><thead><tr class="df-table__row df-table__row--head"><th class="df-table__cell" data-ng-repeat="head in header">{{head.name}}</th></tr></thead><tbody><tr class="df-table__row" data-ng-repeat="employe in employer | filter: searchKeyword | filter: searchCategory:true | filter: categoryKey | filter: selection||undefined"><td class="df-table__cell">{{employe.name}}</td><td class="df-table__cell">{{employe.id}}</td><td class="df-table__cell">{{employe.category}}</td></tr></tbody></table>',
        scope : {
            "caption":"=caption",
            "header":"=header",
            "employer":"=employer"
        }
    }
});

app.controller('formEmployerCtrl', ['$scope','$rootScope', function ($scope, $rootScope) {
    $scope.frmSend = "";
    $scope.dataform = {
        "frmName": "",
        "frmSubname" : "",
        "frmEmail" : "",
        "frmNum" : ""
    }

    $scope.send = function(){
        $scope.frmSend = "Formualrio enviado correctamente";
        console.log($scope.dataform);
    }
}]);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiogICAgUHJvamVjdDogRXhlcmNpY2VzIEFuZ3VsYXJcclxuKiAgICBEZXNjcmlwdGlvbjogQW5ndWxhckpTXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnZEZyb250QXBwJywgWydzbGljayddKTtcclxuXHJcbi8vIFVzYW1vcyBbW11dIHBhcmEgJ2JpbmRlYXInIHNjb3BlcyBkZSBBbmd1bGFyIHlhIHF1ZSBzaSB1c2Ftb3Mge3t9fSBkYSBjb25mbGljdG9zIGNvbiBoYW5kbGViYXJzXHJcblxyXG4vL2FwcC5jb25maWcoZnVuY3Rpb24oJGludGVycG9sYXRlUHJvdmlkZXIpIHtcclxuLy8gICAgJGludGVycG9sYXRlUHJvdmlkZXIuc3RhcnRTeW1ib2woJ1tbJyk7XHJcbi8vICAgICRpbnRlcnBvbGF0ZVByb3ZpZGVyLmVuZFN5bWJvbCgnXV0nKTtcclxuLy99KTtcclxuXHJcbi8vIENvbnRyb2xhZG9yIGdlbmVyYWwgcGFyYSB0b2RhcyBsYXMgcGFnaW5hc1xyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ2FwcEN0cmwnLCBbJyRzY29wZScsJyRyb290U2NvcGUnLCBmdW5jdGlvbiAoJHNjb3BlLCAkcm9vdFNjb3BlKSB7XHJcbiAgICAkcm9vdFNjb3BlLnRpdGxlcGFnZSA9IFwiRWplcmNpY2lvcyBkZSBBbmd1bGFySlNcIjsgXHJcbiAgICAkc2NvcGUuc2xpY2tDb25maWcgPSB7XHJcbiAgICAgICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxyXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICAgICAgbWV0aG9kOiB7fSxcclxuICAgICAgICBldmVudDoge1xyXG4gICAgICAgICAgICBiZWZvcmVDaGFuZ2U6IGZ1bmN0aW9uIChldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKSB7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFmdGVyQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSkge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufV0pO1xyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ2NvbnRhaW5lckN0cmwnLCBbJyRzY29wZScsJyRyb290U2NvcGUnLCBmdW5jdGlvbiAoJHNjb3BlLCAkcm9vdFNjb3BlKSB7XHJcbiAgICAkc2NvcGUudGl0bGVDaGFuZ2UgPSBmdW5jdGlvbiAoKXtcclxuICAgICAgICAkcm9vdFNjb3BlLnRpdGxlcGFnZSA9IFwiRWplcmNpY2lvcyBkZSBBbmd1bGFySlMgLSBUw610dWxvIGNhbWJpYWRvXCI7XHJcbiAgICAgICAgJHJvb3RTY29wZS5jb2xvckJvZHkgPSAncmVkJztcclxuICAgIH1cclxufV0pO1xyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ2NoZWNrQ3RybCcsIFsnJHNjb3BlJywnJHJvb3RTY29wZScsIGZ1bmN0aW9uICgkc2NvcGUsICRyb290U2NvcGUpIHtcclxuICAgICRzY29wZS5hcnJsaXN0ID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJja2lkXCI6IDEsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCJicm9ud1wiLFxyXG4gICAgICAgICAgICBcImxhYmVsXCI6IFwiTWFycsOzblwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiY2tpZFwiOiAyLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwieWVsbG93XCIsXHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJBbWFyaWxsb1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiY2tpZFwiOiAzLFxyXG4gICAgICAgICAgICBcImNvbG9yXCI6IFwiZ3JlZW5cIixcclxuICAgICAgICAgICAgXCJsYWJlbFwiOiBcIlZlcmRlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJja2lkXCI6IDQsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCJibHVlXCIsXHJcbiAgICAgICAgICAgIFwibGFiZWxcIjogXCJBenVsXCJcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgICRzY29wZS5jb2xvckNoYW5nZSA9IGZ1bmN0aW9uIChwb3NpdGlvbixjaG9pY2UpIHtcclxuICAgICAgICBhbmd1bGFyLmZvckVhY2goY2hvaWNlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICBpZiAocG9zaXRpb24gPT0ga2V5KXtcclxuICAgICAgICAgICAgICAgIGlmIChjaG9pY2Vba2V5XS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS5jb2xvckJvZHkgPSBjaG9pY2Vba2V5XS5jb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgJHJvb3RTY29wZS5jb2xvckJvZHkgPSBcIndoaXRlXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIGNob2ljZVtrZXldLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufV0pO1xyXG5cclxuYXBwLmNvbnRyb2xsZXIoJ3RhYmxhQ3RybCcsIFsnJHNjb3BlJywnJHJvb3RTY29wZScsIGZ1bmN0aW9uICgkc2NvcGUsICRyb290U2NvcGUpIHtcclxuICAgICRzY29wZS5kYXRhdGFibGUgPSB7XHJcbiAgICAgICAgXCJjYXB0aW9uXCI6IFwiVGFibGEgdXN1YXJpb3NcIixcclxuICAgICAgICBcImhlYWRlclwiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk5vbWJyZVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk7CuiBlbXBsZWFkb1wiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDYXRlZ29yaWFcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcIml0ZW1cIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJKdWFuIEFudG9uaW9cIixcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCIxMjM0NVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiBcIkNUXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSmVzw7pzXCIsXHJcbiAgICAgICAgICAgICAgICBcImlkXCI6IFwiOTg3NDVcIixcclxuICAgICAgICAgICAgICAgIFwiY2F0ZWdvcnlcIjogXCJDVFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkxvcmVuYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIjY1NDg1XCIsXHJcbiAgICAgICAgICAgICAgICBcImNhdGVnb3J5XCI6IFwiQ1RcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJEYXJpb1wiLFxyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIjM1Nzk4XCIsXHJcbiAgICAgICAgICAgICAgICBcImNhdGVnb3J5XCI6IFwiQ1RKXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQXJhY2VsaVwiLFxyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIjg1MjM5XCIsXHJcbiAgICAgICAgICAgICAgICBcImNhdGVnb3J5XCI6IFwiQ0FMXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWFydGluYVwiLFxyXG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcIjk1MTI1XCIsXHJcbiAgICAgICAgICAgICAgICBcImNhdGVnb3J5XCI6IFwiQ1RKXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSm9zYW5cIixcclxuICAgICAgICAgICAgICAgIFwiaWRcIjogXCI3NTMyMVwiLFxyXG4gICAgICAgICAgICAgICAgXCJjYXRlZ29yeVwiOiBcIkNUSlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jYXRlZ29yeUluY2x1ZGVzID0gW107XHJcblxyXG4gICAgJHNjb3BlLmluY2x1ZGVDYXRlZ29yeSA9IGZ1bmN0aW9uKGNhdGVnb3J5KSB7XHJcbiAgICAgICAgdmFyIGkgPSAkLmluQXJyYXkoY2F0ZWdvcnksICRzY29wZS5jYXRlZ29yeUluY2x1ZGVzKTtcclxuICAgICAgICBpZiAoaSA+IC0xKSB7XHJcbiAgICAgICAgICAgICRzY29wZS5jYXRlZ29yeUluY2x1ZGVzLnNwbGljZShpLCAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkc2NvcGUuY2F0ZWdvcnlJbmNsdWRlcy5wdXNoKGNhdGVnb3J5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJHNjb3BlLmNhdGVnb3J5S2V5ID0gZnVuY3Rpb24oZGF0YXRhYmxlKSB7XHJcbiAgICAgICAgaWYgKCRzY29wZS5jYXRlZ29yeUluY2x1ZGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKCQuaW5BcnJheShkYXRhdGFibGUuY2F0ZWdvcnksICRzY29wZS5jYXRlZ29yeUluY2x1ZGVzKSA8IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGF0YXRhYmxlO1xyXG4gICAgfVxyXG59XSk7XHJcblxyXG5hcHAuZGlyZWN0aXZlKCd0YWJsZUVtcGxveWVyJywgZnVuY3Rpb24oKXtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmVzdHJpY3QgOiAnRScsXHJcbiAgICAgICAgdGVtcGxhdGUgOiAnPHRhYmxlIGNsYXNzPVwiZGYtdGFibGVcIj48Y2FwdGlvbiBjbGFzcz1cImRmLXRhYmxlX19oZWFkaW5nXCI+e3tjYXB0aW9ufX08L2NhcHRpb24+PHRoZWFkPjx0ciBjbGFzcz1cImRmLXRhYmxlX19yb3cgZGYtdGFibGVfX3Jvdy0taGVhZFwiPjx0aCBjbGFzcz1cImRmLXRhYmxlX19jZWxsXCIgZGF0YS1uZy1yZXBlYXQ9XCJoZWFkIGluIGhlYWRlclwiPnt7aGVhZC5uYW1lfX08L3RoPjwvdHI+PC90aGVhZD48dGJvZHk+PHRyIGNsYXNzPVwiZGYtdGFibGVfX3Jvd1wiIGRhdGEtbmctcmVwZWF0PVwiZW1wbG95ZSBpbiBlbXBsb3llciB8IGZpbHRlcjogc2VhcmNoS2V5d29yZCB8IGZpbHRlcjogc2VhcmNoQ2F0ZWdvcnk6dHJ1ZSB8IGZpbHRlcjogY2F0ZWdvcnlLZXkgfCBmaWx0ZXI6IHNlbGVjdGlvbnx8dW5kZWZpbmVkXCI+PHRkIGNsYXNzPVwiZGYtdGFibGVfX2NlbGxcIj57e2VtcGxveWUubmFtZX19PC90ZD48dGQgY2xhc3M9XCJkZi10YWJsZV9fY2VsbFwiPnt7ZW1wbG95ZS5pZH19PC90ZD48dGQgY2xhc3M9XCJkZi10YWJsZV9fY2VsbFwiPnt7ZW1wbG95ZS5jYXRlZ29yeX19PC90ZD48L3RyPjwvdGJvZHk+PC90YWJsZT4nLFxyXG4gICAgICAgIHNjb3BlIDoge1xyXG4gICAgICAgICAgICBcImNhcHRpb25cIjpcIj1jYXB0aW9uXCIsXHJcbiAgICAgICAgICAgIFwiaGVhZGVyXCI6XCI9aGVhZGVyXCIsXHJcbiAgICAgICAgICAgIFwiZW1wbG95ZXJcIjpcIj1lbXBsb3llclwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbmFwcC5jb250cm9sbGVyKCdmb3JtRW1wbG95ZXJDdHJsJywgWyckc2NvcGUnLCckcm9vdFNjb3BlJywgZnVuY3Rpb24gKCRzY29wZSwgJHJvb3RTY29wZSkge1xyXG4gICAgJHNjb3BlLmZybVNlbmQgPSBcIlwiO1xyXG4gICAgJHNjb3BlLmRhdGFmb3JtID0ge1xyXG4gICAgICAgIFwiZnJtTmFtZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiZnJtU3VibmFtZVwiIDogXCJcIixcclxuICAgICAgICBcImZybUVtYWlsXCIgOiBcIlwiLFxyXG4gICAgICAgIFwiZnJtTnVtXCIgOiBcIlwiXHJcbiAgICB9XHJcblxyXG4gICAgJHNjb3BlLnNlbmQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICRzY29wZS5mcm1TZW5kID0gXCJGb3JtdWFscmlvIGVudmlhZG8gY29ycmVjdGFtZW50ZVwiO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRzY29wZS5kYXRhZm9ybSk7XHJcbiAgICB9XHJcbn1dKTsiXSwiZmlsZSI6ImFwcC5qcyJ9

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJkZXYtc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuICAgIC8qXG4gICAgICAgICogQGRlc2NyaXB0aW9uIEluY2lhbGl6YW1vcyBzZWxlY3QgY3V0b21cbiAgICAqL1xuICAgIGlmICgkKCdbZGF0YS1qcz1cInNlbGVjdC1jdXN0b21cIl0nKS5sZW5ndGggPiAwKXtcbiAgICAgICAgc2VsZWN0Q3VzdG9tLmluaXQoJ1tkYXRhLWpzPVwic2VsZWN0LWN1c3RvbVwiXScpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICogQGRlc2NyaXB0aW9uIEluY2lhbGl6YW1vcyBzbGlkZXIgKENhcnJ1c2VsIGRlIGltw6FnZW5lcylcbiAgICAqL1xuICAgIGlmICgkKCdbZGF0YS1qcz1cInNsaWRlclwiXScpLmxlbmd0aCA+IDApe1xuICAgICAgICBzbGlkZXIuaW5pdCgnW2RhdGEtanM9XCJzbGlkZXJcIl0nKTtcbiAgICB9XG5cbiAgICAvKlxuICAgICAgICAqIEBkZXNjcmlwdGlvbiBJbmNpYWxpemFtb3MgY29tcG9uZW50ZSBUYWJzIGpRdWVyeSBVSVxuICAgICovXG4gICAgaWYgKCQoJ1tkYXRhLWpzPVwidGFic1wiXScpLmxlbmd0aCA+IDApe1xuICAgICAgICB0YWJzLmluaXQoJ1tkYXRhLWpzPVwidGFic1wiXScpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICAgICogQGRlc2NyaXB0aW9uIElndWFsYW1vcyBlbCBhbHRvIGEgdG9kb3MgbG9zIGl0ZW1zIGRlIGNvbnRhaW5lciBpdGVtc1xuICAgICovXG4gICAgZEZyb250SnMuY2FsY3VsYXRlSGVpZ2h0KHtcbiAgICAgICAgXCJlbGVtZW50c1wiOlwiW2RhdGEtanM9J2l0ZW1zLWhlaWdodCddXCIsXG4gICAgICAgIFwiY2hpbGRcIjp0cnVlXG4gICAgfSk7XG5cbn0pO1xuIl0sImZpbGUiOiJkZXYtc2NyaXB0LmpzIn0=


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiJdLCJmaWxlIjoibWFpbi5qcyJ9

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pSWl3aWMyOTFjbU5sY3lJNld5SnRZV2x1TG1weklsMHNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaUpkTENKbWFXeGxJam9pYldGcGJpNXFjeUo5XG4iXSwiZmlsZSI6Im1haW4uanMifQ==
