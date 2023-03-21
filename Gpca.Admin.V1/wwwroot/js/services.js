angular.module('gpca')
    .service('AuthService', function ($http, constants, toaster, $timeout, $localStorage) {
        this.logar = function (obj) {
            $http.post(constants.UrlAuthApi + 'Auth/Login', obj)
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
    })
    .service('ConsortiumService', function ($http, constants, $timeout, $localStorage) {
        var params = {
            headers: {
                'RefreshToken': $localStorage.user.refreshToken
            }
        };

        this.CadConsorcio = function (obj) {
            $http.post(constants.UrlRelatorioApi + 'Consorcio/Create', obj, params)
                .then(function (response) {
                    return response;
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        return value;
                    });
                });
        }

        this.GetConsorcio = function () {
            var obj = {};
            return $http.post(constants.UrlRelatorioApi + 'Consorcio/GetList', obj, params)
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        return value;
                    });
                });
        }
    })
    .service('ConsortiumJvService', function ($http, constants, $localStorage) {
        var params = {
            headers: {
                'RefreshToken': $localStorage.user.refreshToken
            }
        };

        this.CreateJv = function (obj) {
            obj.planilha = parseInt(obj.planilha);
            return $http.post(constants.UrlRelatorioApi + 'ConsorcioJv/Create', obj, params)
                .then(function (response) {
                    return response;
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        return value;
                    });
                });
        }

        this.EditJv = function (obj) {
            return $http.post(constants.UrlRelatorioApi + 'ConsorcioJv/Edit', obj, params)
                .then(function (response) {
                    return response;
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        return value;
                    });
                });
        }

        this.GetConsorcioJVs = function () {
            var obj = {};
            return $http.post(constants.UrlRelatorioApi + 'ConsorcioJv/GetList', obj, params)
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        return value;
                    });
                });
        }
    })
    .service('TIPIService', function ($http, constants, $localStorage) {
        var params = {
            headers: {
                'RefreshToken': $localStorage.user.refreshToken
            }
        };

        this.CreateTipi = function (obj) {
            obj.planilha = parseInt(obj.planilha);
            return $http.post(constants.UrlRelatorioApi + 'Tipi/Create', obj, params)
                .then(function (response) {
                    return response;
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        return value;
                    });
                });
        }

        this.EditTipi = function (obj) {
            return $http.post(constants.UrlRelatorioApi + 'Tipi/Edit', obj, params)
                .then(function (response) {
                    return response;
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        return value;
                    });
                });
        }

        this.GetTIPIs = function () {
            var obj = {};
            return $http.post(constants.UrlRelatorioApi + 'Tipi/GetList', obj, params)
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        return value;
                    });
                });
        }
    })
    .service('MetaObjetoService', function ($http, constants, $localStorage) {
        var params = {
            headers: {
                'RefreshToken': $localStorage.user.refreshToken
            }
        };

        this.CreateMeta = function (obj) {
            obj.planilha = parseInt(obj.planilha);
            return $http.post(constants.UrlRelatorioApi + 'MetaObjeto/Create', obj, params)
                .then(function (response) {
                    return response;
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        return value;
                    });
                });
        }

        this.EditMeta = function (obj) {
            return $http.post(constants.UrlRelatorioApi + 'MetaObjeto/Edit', obj, params)
                .then(function (response) {
                    return response;
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        return value;
                    });
                });
        }

        this.GetMetaObjs = function () {
            var obj = {};
            return $http.post(constants.UrlRelatorioApi + 'MetaObjeto/GetList', obj, params)
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        return value;
                    });
                });
        }
    })
    .service('TextoService', function ($http, constants, $localStorage) {
        var params = {
            headers: {
                'RefreshToken': $localStorage.user.refreshToken
            }
        };

        this.Create = function (obj) {
            obj.planilha = parseInt(obj.planilha);
            return $http.post(constants.UrlRelatorioApi + 'Texto/Create', obj, params)
                .then(function (response) {
                    return response;
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        return value;
                    });
                });
        }

        this.Edit = function (obj) {
            return $http.post(constants.UrlRelatorioApi + 'Texto/Edit', obj, params)
                .then(function (response) {
                    return response;
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        return value;
                    });
                });
        }

        this.GetList = function () {
            var obj = {};
            return $http.post(constants.UrlRelatorioApi + 'Texto/GetList', obj, params)
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        return value;
                    });
                });
        }
    })
    .service('RelatoriosService', function ($http, constants, $localStorage) {

        var params = {
            headers: {
                'RefreshToken': $localStorage.user.refreshToken
            }
        };

        this.CreateExcel = function () {
            return $http.get(constants.UrlRelatorioApi + 'ArquivoConsolidado/Download', params)
                .then(function (response) {
                    return response;
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        return value;
                    });
                });
        }

        this.GetFiles = function () {
            return $http.get(constants.UrlRelatorioApi + 'ArquivoConsolidado/GetFilesToImport', params)
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        return value;
                    });
                });
        }

        this.Importar = function (obj) {
            return $http.post(constants.UrlRelatorioApi + 'Relatorio/ImportFile', obj, params)
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        return value;
                    });
                });
        }
    })