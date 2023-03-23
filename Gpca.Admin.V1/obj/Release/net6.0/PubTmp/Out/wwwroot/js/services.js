angular.module('gpca')
    .service('AuthService', function ($http, constants, toaster, $timeout, $localStorage) {
        this.logar = function (obj) {
            return $http.post(constants.UrlAuthApi + 'Auth/Login', obj)
                .then(function (response) {
                    if (response.data.authenticated) {

                        toaster.pop({
                            type: 'success',
                            title: 'Sucesso',
                            body: response.data.message,
                            showCloseButton: true,
                            timeout: 5000
                        });

                        $localStorage.$reset();
                        $localStorage.user = response.data;

                        $timeout(function () {
                            window.location = "#/inicio/blank";
                        }, 2000);
                    }

                    else {
                        $localStorage.user = response.data;

                        toaster.pop({
                            type: 'error',
                            title: 'Error',
                            body: response.data.message,
                            showCloseButton: true,
                            timeout: 5000
                        });

                        $timeout(function () {
                            window.location.reload(true);
                        }, 2000);
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
            $http.post(constants.UrlAuthApi + 'Auth/CreateUser', obj)
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

        this.RedefinirSenha = function (obj) {
            $http.post(constants.UrlAuthApi + 'Auth/RedefintionPassword', obj)
                .then(function (response) {
                    if (response.data.success) {

                        toaster.pop({
                            type: 'success',
                            title: 'Sucesso',
                            body: response.data.message,
                            showCloseButton: true,
                            timeout: 5000
                        });

                        $localStorage.$reset();
                        $localStorage.user = response.data;

                        $timeout(function () {
                            window.location = "#/login";
                        }, 5000);
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
    .service('NCMService', function ($http, constants, $localStorage) {
        var params = {
            headers: {
                'RefreshToken': $localStorage.user.refreshToken
            }
        };

        this.Create = function (obj) {
            obj.planilha = parseInt(obj.planilha);
            return $http.post(constants.UrlRelatorioApi + 'NCM/Create', obj, params)
                .then(function (response) {
                    return response;
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        return value;
                    });
                });
        }

        this.Edit = function (obj) {
            return $http.post(constants.UrlRelatorioApi + 'NCM/Update', obj, params)
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
            return $http.post(constants.UrlRelatorioApi + 'NCM/GetList', obj, params)
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

        this.Create = function (obj) {
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

        this.Edit = function (obj) {
            return $http.post(constants.UrlRelatorioApi + 'MetaObjeto/Update', obj, params)
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
            return $http.post(constants.UrlRelatorioApi + 'Texto/Update', obj, params)
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
    .service('CfopService', function ($http, constants, $localStorage) {
        var params = {
            headers: {
                'RefreshToken': $localStorage.user.refreshToken
            }
        };

        this.Create = function (obj) {
            return $http.post(constants.UrlRelatorioApi + 'CFOP/Create', obj, params)
                .then(function (response) {
                    return response;
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        return value;
                    });
                });
        }

        this.Edit = function (obj) {
            return $http.post(constants.UrlRelatorioApi + 'CFOP/Update', obj, params)
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
            return $http.post(constants.UrlRelatorioApi + 'CFOP/GetList', obj, params)
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

        this.DownloadDuplicados = function (params) {
            $http({
                url: constants.UrlRelatorioApi + 'ArquivoConsolidado/DownloadDuplicados',
                method: 'POST',
                responseType: 'arraybuffer',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: params
            }).then(function (response) {
                var blob = new Blob([response.data], { type: 'application/octet-stream' });
                var url = window.URL.createObjectURL(blob);
                var link = document.createElement('a');
                link.href = url;
                link.download = 'Consolidacao Relatorios de Gastos Duplicados.xlsx';
                link.click();
            });
        }
    })
    .service('ManualService', function ($http, constants, $localStorage) {

        var params = {
            headers: {
                'RefreshToken': $localStorage.user.refreshToken
            }
        };


        this.GetH01 = function (obj) {
            return $http.post(constants.UrlRelatorioApi + 'ArquivoConsolidado/GetH01PaginateAsync', obj)
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        return value;
                    });
                });
        }

        this.GetH02 = function (obj) {
            return $http.post(constants.UrlRelatorioApi + 'ArquivoConsolidado/GetH02PaginateAsync', obj)
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        return value;
                    });
                });
        }

        this.GetH03 = function (obj) {
            return $http.post(constants.UrlRelatorioApi + 'ArquivoConsolidado/GetH03PaginateAsync', obj)
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        return value;
                    });
                });
        }

        this.GetH04 = function (obj) {
            return $http.post(constants.UrlRelatorioApi + 'ArquivoConsolidado/GetH04PaginateAsync', obj)
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        return value;
                    });
                });
        }

        this.GetH05 = function (obj) {
            return $http.post(constants.UrlRelatorioApi + 'ArquivoConsolidado/GetH05PaginateAsync', obj)
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        return value;
                    });
                });
        }

        this.EditH01 = function (obj) {
            return $http.post(constants.UrlRelatorioApi + 'ArquivoConsolidado/EditH01Async', obj)
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        return value;
                    });
                });
        }

        this.EditH02 = function (obj) {
            return $http.post(constants.UrlRelatorioApi + 'ArquivoConsolidado/EditH02Async', obj)
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        return value;
                    });
                });
        }

        this.EditH03 = function (obj) {
            return $http.post(constants.UrlRelatorioApi + 'ArquivoConsolidado/EditH03Async', obj)
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        return value;
                    });
                });
        }

        this.EditH04 = function (obj) {
            return $http.post(constants.UrlRelatorioApi + 'ArquivoConsolidado/EditH04Async', obj)
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        return value;
                    });
                });
        }

        this.EditH05 = function (obj) {
            return $http.post(constants.UrlRelatorioApi + 'ArquivoConsolidado/EditH05Async', obj)
                .then(function (response) {
                    return response.data;
                }, function (error) {
                    angular.forEach(error.data, function (value, index) {
                        return value;
                    });
                });
        }

    })
