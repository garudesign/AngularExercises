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