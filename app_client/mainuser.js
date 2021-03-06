(function () {

    angular.module('userApp', ['ngRoute','angularUtils.directives.dirPagination','ngFileUpload','ngStorage']);
    function config($routeProvider, $locationProvider) {
        $routeProvider


            .when('/', {
                templateUrl:'/booking/stepOne/index.view.html',
                controller: 'userCtrl',
                controllerAs: 'vm'
            })
            .when('/rdvlistsalons/:ville', {
                templateUrl:'/booking/stepTow/salons.view.html',
                controller: 'rdvsalonCtrl',
                controllerAs: 'vm'
            })
            .when('/rdvlistservice/:idsalon', {
                templateUrl:'/booking/stepThree/services.view.html',
                controller: 'rdvserviceCtrl',
                controllerAs: 'vm'
            })
            .when('/rdvlistservices/:idsalon', {
                templateUrl:'/booking/stepThree/listservices.view.html',
                controller: 'rdvservicesCtrl',
                controllerAs: 'vm'
            })
            .when('/rdvconfirmer', {
                templateUrl:'/booking/stepFour/confermrdv.view.html',
                controller: 'rdvconfirmCtrl',
                controllerAs: 'vm'
            })
 ////////here for profile salon
            .when('/profilesalon/:idsalon', {
                templateUrl:'/booking/profilesalon/profilesalon.view.html',
                controller: 'salonprofileCtrl',
                controllerAs: 'vm'
            })


            .otherwise({redirectTo: '/'});

        // use the HTML5 History API
        $locationProvider.html5Mode(true);
    }


    function run($rootScope, $location) {
        $rootScope.$on('$routeChangeStart', function (event, nextRoute, currentRoute) {
          /*  if ($location.path() == '/') {

                $location.path('/');
            }*/
        });
    }

    angular
        .module('userApp')
        .config(['$routeProvider', '$locationProvider', config])
        .run(['$rootScope', '$location', run]);

})();