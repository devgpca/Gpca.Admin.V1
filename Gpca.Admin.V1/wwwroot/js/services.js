angular.module('gpca')
    .service('AuthService', function ($http, constants, toaster, $timeout, $localStorage) {
        this.logar = function (obj) {
            $http.post(constants.UrlAuthApi + '/Login', obj)
                .then(function (response) {
                    if (response.data.authenticated) {

                        toaster.pop({
                            type: 'success',
                            title: 'Sucesso',
                            body: response.data.message,
                            showCloseButton: true,
                            timeout: 5000
                        });
                        $localStorage.user = response.data;

                        $timeout(function () {
                            window.location = "#/inicio/blank";
                        }, 2000);
                    }

                    else {
                        toaster.pop({
                            type: 'error',
                            title: 'Error',
                            body: response.data.message,
                            showCloseButton: true,
                            timeout: 5000
                        });
                    }
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        toaster.pop({
                            type: 'error',
                            title: value.propertyName,
                            body: value.errorMessage,
                            showCloseButton: true,
                            timeout: 5000
                        });
                    });
                });
        }
        this.cadastrar = function (obj) {
            $http.post(constants.UrlAuthApi + '/CreateUser', obj)
                .then(function (response) {
                    toaster.pop({
                        type: 'success',
                        title: 'Sucesso',
                        body: response.data.message,
                        showCloseButton: true,
                        timeout: 5000
                    });
                    $localStorage.user = response.data;
                    $timeout(function () {
                        window.location = "#/login";
                    }, 2000);
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        toaster.pop({
                            type: 'error',
                            title: value.propertyName,
                            body: value.errorMessage,
                            showCloseButton: true,
                            timeout: 5000
                        });
                    });
                });
        }
    });

//function AuthService($http, $scope, constants) {

//    $scope.logar = function (obj) {

//        $http.post(constants.UrlApi + '/Login', obj)
//            .then(function (response) {
//                console.log(response);
//            }, function (error) {
//                console.log(error);
//            });
//    }
//}