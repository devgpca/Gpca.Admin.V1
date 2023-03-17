angular.module('gpca')
    .controller('MainCtrl', function ($scope, constants, $localStorage) {

        this.countries = [
            { name: 'Amsterdam' },
            { name: 'Washington' },
            { name: 'Sydney' },
            { name: 'Cairo' },
            { name: 'Beijing' }];

        this.getLocation = function (val) {
            return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
                params: {
                    address: val,
                    sensor: false
                }
            }).then(function (response) {
                return response.data.results.map(function (item) {
                    return item.formatted_address;
                });
            });
        };

        /**
         * daterange - Used as initial model for data range picker in Advanced form view
         */
        this.daterange = { startDate: null, endDate: null };

        /**
         * slideInterval - Interval for bootstrap Carousel, in milliseconds:
         */
        this.slideInterval = 5000;

        /**
         * tags - Used as advanced forms view in input tag control
         */

        this.tags = [
            { text: 'Amsterdam' },
            { text: 'Washington' },
            { text: 'Sydney' },
            { text: 'Cairo' },
            { text: 'Beijing' }
        ];

        /**
         * states - Data used in Advanced Form view for Chosen plugin
         */
        this.states = [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ];

        /**
         * check's - Few variables for checkbox input used in iCheck plugin. Only for demo purpose
         */
        this.checkOne = true;
        this.checkTwo = true;
        this.checkThree = true;
        this.checkFour = true;

        /**
         * knobs - Few variables for knob plugin used in Advanced Plugins view
         */
        this.knobOne = 75;
        this.knobTwo = 25;
        this.knobThree = 50;

        /**
         * Variables used for Ui Elements view
         */
        this.bigTotalItems = 175;
        this.bigCurrentPage = 1;
        this.maxSize = 5;
        this.singleModel = false;
        this.radioModel = 'Middle';
        this.checkModel = {
            left: false,
            middle: true,
            right: false
        };

        /**
         * groups - used for Collapse panels in Tabs and Panels view
         */
        this.groups = [
            {
                title: 'Dynamic Group Header - 1',
                content: 'Dynamic Group Body - 1'
            },
            {
                title: 'Dynamic Group Header - 2',
                content: 'Dynamic Group Body - 2'
            }
        ];

        /**
         * alerts - used for dynamic alerts in Notifications and Tooltips view
         */
        this.alerts = [
            { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
            { type: 'success', msg: 'Well done! You successfully read this important alert message.' },
            { type: 'info', msg: 'OK, You are done a great job man.' }
        ];

        /**
         * addAlert, closeAlert  - used to manage alerts in Notifications and Tooltips view
         */
        this.addAlert = function () {
            this.alerts.push({ msg: 'Another alert!' });
        };

        this.closeAlert = function (index) {
            this.alerts.splice(index, 1);
        };

        /**
         * randomStacked - used for progress bar (stacked type) in Badges adn Labels view
         */
        this.randomStacked = function () {
            this.stacked = [];
            var types = ['success', 'info', 'warning', 'danger'];

            for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
                var index = Math.floor((Math.random() * 4));
                this.stacked.push({
                    value: Math.floor((Math.random() * 30) + 1),
                    type: types[index]
                });
            }
        };
        /**
         * initial run for random stacked value
         */
        this.randomStacked();

        /**
         * summernoteText - used for Summernote plugin
         */
        this.summernoteText = ['<h3>Hello Jonathan! </h3>',
            '<p>dummy text of the printing and typesetting industry. <strong>Lorem Ipsum has been the dustrys</strong> standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more',
            'recently with</p>'].join('');

        /**
         * General variables for Peity Charts
         * used in many view so this is in Main controller
         */
        this.BarChart = {
            data: [5, 3, 9, 6, 5, 9, 7, 3, 5, 2, 4, 7, 3, 2, 7, 9, 6, 4, 5, 7, 3, 2, 1, 0, 9, 5, 6, 8, 3, 2, 1],
            options: {
                fill: ["#1ab394", "#d7d7d7"],
                width: 100
            }
        };

        this.BarChart2 = {
            data: [5, 3, 9, 6, 5, 9, 7, 3, 5, 2],
            options: {
                fill: ["#1ab394", "#d7d7d7"]
            }
        };

        this.BarChart3 = {
            data: [5, 3, 2, -1, -3, -2, 2, 3, 5, 2],
            options: {
                fill: ["#1ab394", "#d7d7d7"]
            }
        };

        this.LineChart = {
            data: [5, 9, 7, 3, 5, 2, 5, 3, 9, 6, 5, 9, 4, 7, 3, 2, 9, 8, 7, 4, 5, 1, 2, 9, 5, 4, 7],
            options: {
                fill: '#1ab394',
                stroke: '#169c81',
                width: 64
            }
        };

        this.LineChart2 = {
            data: [3, 2, 9, 8, 47, 4, 5, 1, 2, 9, 5, 4, 7],
            options: {
                fill: '#1ab394',
                stroke: '#169c81',
                width: 64
            }
        };

        this.LineChart3 = {
            data: [5, 3, 2, -1, -3, -2, 2, 3, 5, 2],
            options: {
                fill: '#1ab394',
                stroke: '#169c81',
                width: 64
            }
        };

        this.LineChart4 = {
            data: [5, 3, 9, 6, 5, 9, 7, 3, 5, 2],
            options: {
                fill: '#1ab394',
                stroke: '#169c81',
                width: 64
            }
        };

        this.PieChart = {
            data: [1, 5],
            options: {
                fill: ["#1ab394", "#d7d7d7"]
            }
        };

        this.PieChart2 = {
            data: [226, 360],
            options: {
                fill: ["#1ab394", "#d7d7d7"]
            }
        };
        this.PieChart3 = {
            data: [0.52, 1.561],
            options: {
                fill: ["#1ab394", "#d7d7d7"]
            }
        };
        this.PieChart4 = {
            data: [1, 4],
            options: {
                fill: ["#1ab394", "#d7d7d7"]
            }
        };
        this.PieChart5 = {
            data: [226, 134],
            options: {
                fill: ["#1ab394", "#d7d7d7"]
            }
        };
        this.PieChart6 = {
            data: [0.52, 1.041],
            options: {
                fill: ["#1ab394", "#d7d7d7"]
            }
        };
    })
    .controller('LoginCtrl', function ($scope, toaster, AuthService) {
        $onInit = function () {
            $scope.tipo = "PF";
        };
        
        $scope.tipos = [
            { tipo: "PF", nome: "Pessoa Fisica" },
            { tipo: "PJ", nome: "Pessoa Juridica" }
        ]
        $scope.autenticar = function (user) {
            if ($scope.loginForm.$error.cpf != undefined && $scope.tipo == "PF") {
                toaster.pop({
                    type: 'error',
                    title: 'CPF',
                    body: "Preencha um CPF válido",
                    showCloseButton: true,
                    timeout: 5000
                });
            }
            else if ($scope.loginForm.$error.cnpj != undefined && $scope.tipo == "PJ") {
                toaster.pop({
                    type: 'error',
                    title: 'CNPJ',
                    body: "Preencha um CNPJ válido",
                    showCloseButton: true,
                    timeout: 5000
                });
            }
            else {
                AuthService.logar(user);
            }
        }
    })
    .controller('RegisterCtrl', function ($scope, toaster, AuthService) {
        $onInit = function () {
            $scope.tipo = "PF";
        };
        $scope.tipos = [
            { tipo: "PF", nome: "Pessoa Fisica" },
            { tipo: "PJ", nome: "Pessoa Juridica" }
        ]
        $scope.cadastrar = function (user) {
            if ($scope.registerForm.$error.cpf != undefined && $scope.tipo == "PF") {
                toaster.pop({
                    type: 'error',
                    title: 'CPF',
                    body: "Preencha um CPF válido",
                    showCloseButton: true,
                    timeout: 5000
                });
            }
            else if ($scope.registerForm.$error.cnpj != undefined && $scope.tipo == "PJ") {
                toaster.pop({
                    type: 'error',
                    title: 'CNPJ',
                    body: "Preencha um CNPJ válido",
                    showCloseButton: true,
                    timeout: 5000
                });
            }
            else {
                AuthService.cadastrar(user);
            }
        }
    })
    .controller('topNavCtrl', function ($scope, $localStorage, $http, $uibModal, SweetAlert) {

        //if ($localStorage.user == undefined) {
        //    window.location = "#/login";
        //}

        $scope.user = "Leonardo Damascena"
        console.log($localStorage.user)

        $scope.logout = function () {
            $localStorage.$reset();
        }

        $scope.changepassword = function () {
            var modalInstance = $uibModal.open({
                templateUrl: 'Views/modal/change_password.html',
                controller: 'changePasswordInstanceCtrl',
                windowClass: "animated fadeIn",
                resolve: {
                    UserLogin: function () {
                        return $localStorage.user;
                    }
                }
            }).result.then(function () {
                SweetAlert.swal({
                    title: "Sucesso!",
                    text: "A senha foi alterada com sucesso",
                    type: "success",
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "OK",
                })
            });
        };
    })
    .controller('consorcioCtrl', function ($scope, DTOptionsBuilder, $uibModal, SweetAlert, $localStorage, ConsortiumService, $q) {

        var GetList = ConsortiumService.GetConsorcio();

        $q.all([GetList]).then(function (response) {
            $scope.getData = response[0].data;
            console.log($scope.getData);
        });

        $scope.consorcio = {
            id: 0,
            descricao: "",
            ativo: false
        };

        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withButtons([
                { extend: 'copy' },
                { extend: 'csv' },
                { extend: 'excel', title: 'ExampleFile' },
                { extend: 'pdf', title: 'ExampleFile' },

                {
                    extend: 'print',
                    customize: function (win) {
                        $(win.document.body).addClass('white-bg');
                        $(win.document.body).css('font-size', '10px');

                        $(win.document.body).find('table')
                            .addClass('compact')
                            .css('font-size', 'inherit');
                    }
                }
            ]);


        $scope.btnAdd = function () {
            $uibModal.open({
                templateUrl: 'views/modal/consorcio/incluir_editar_consorcio.html',
                controller: function ($scope, $uibModalInstance) {
                    $scope.Incluir = function () {
                        ConsortiumService.CadConsorcio($scope.consorcio);
                        $uibModalInstance.close();;
                    }
                },
                windowClass: "animated fadeIn",
                resolve: {
                    fatorSelected: function () {
                        return null;
                    }
                }
            });
        }

        $scope.editar = function (data) {
            $uibModal.open({
                templateUrl: 'views/modal/consorcio/incluir_editar_consorcio.html',
                controller: 'fatoresModalCtrl',
                windowClass: "animated fadeIn",
                resolve: {
                    fatorSelected: function () {
                        return data;
                    }
                }
            });
        }

        $scope.ativarDesativarConsorcio = function (data) {
            $scope.title = data.ativo == false ? "ativar" : "desativar";
            $scope.result = data.ativo == false ? "ativado" : "desativado";

            SweetAlert.swal({
                title: "Deseja " + $scope.title + " ?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Sim, " + $scope.title + " !",
                cancelButtonText: "Não, cancelar!",
                closeOnConfirm: false,
                closeOnCancel: false
            },
                function (isConfirm) {
                    if (isConfirm) {
                        $http.post(constants.UrlApi + "Fator/AtivarDesativar", fator.fa_Id, {
                            headers: { 'Authorization': 'Bearer ' + $localStorage.token }
                        }).then(function (response) {
                            SweetAlert.swal({
                                title: "Alterado!",
                                text: "O fator foi " + $scope.result + " com sucesso.",
                                type: "success"
                            });

                            $scope.obterFatores();

                        }, function (response) {
                            return alert("Erro: " + response.status);
                        });
                    } else {
                        SweetAlert.swal({
                            title: "Cancelado!",
                            text: "Você cancelou a alteração do registro",
                            type: "error"
                        });
                    }
                });
        }

        $scope.Incluir = function () {
            ConsortiumService.CadConsorcio($scope.consorcio);
            
        }
    })
    .controller('JVCtrl', function ($scope, DTOptionsBuilder, $uibModal, SweetAlert, $localStorage, $rootScope, ConsorcioJvService) {


        $scope.objJv = {
            item: "",
            consorioId: 1,
            jv: "",
            situacao: "",
            cutback: "",
            planilha: 1
        }

        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withButtons([
                { extend: 'copy' },
                { extend: 'csv' },
                { extend: 'excel', title: 'ExampleFile' },
                { extend: 'pdf', title: 'ExampleFile' },

                {
                    extend: 'print',
                    customize: function (win) {
                        $(win.document.body).addClass('white-bg');
                        $(win.document.body).css('font-size', '10px');

                        $(win.document.body).find('table')
                            .addClass('compact')
                            .css('font-size', 'inherit');
                    }
                }
            ]);


        $scope.incluir = function () {
            $uibModal.open({
                templateUrl: 'views/modal/fatores/incluir_editar_fator.html',
                controller: 'fatoresModalCtrl',
                windowClass: "animated fadeIn",
                resolve: {
                    fatorSelected: function () {
                        return null;
                    }
                }
            }).result.then(function () {
                $scope.obterFatores();
            });
        }

        $scope.editar = function (fator) {
            $uibModal.open({
                templateUrl: 'views/modal/fatores/incluir_editar_fator.html',
                controller: 'fatoresModalCtrl',
                windowClass: "animated fadeIn",
                resolve: {
                    fatorSelected: function () {
                        return fator;
                    }
                }
            }).result.then(function () {
                $scope.obterFatores();
            });
        }

        $scope.ativarDesativar = function (fator) {
            $scope.title = fator.fa_Ativo == "1" ? "ativar" : "desativar";
            $scope.result = fator.fa_Ativo == "1" ? "ativado" : "desativado";

            SweetAlert.swal({
                title: "Deseja " + $scope.title + " ?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Sim, " + $scope.title + " !",
                cancelButtonText: "Não, cancelar!",
                closeOnConfirm: false,
                closeOnCancel: false
            },
                function (isConfirm) {
                    if (isConfirm) {
                        $http.post(constants.UrlApi + "Fator/AtivarDesativar", fator.fa_Id, {
                            headers: { 'Authorization': 'Bearer ' + $localStorage.token }
                        }).then(function (response) {
                            SweetAlert.swal({
                                title: "Alterado!",
                                text: "O fator foi " + $scope.result + " com sucesso.",
                                type: "success"
                            });

                            $scope.obterFatores();

                        }, function (response) {
                            return alert("Erro: " + response.status);
                        });
                    } else {
                        SweetAlert.swal({
                            title: "Cancelado!",
                            text: "Você cancelou a alteração do registro",
                            type: "error"
                        });
                    }
                });
        }

        $scope.IncluirJv = function () {
            ConsorcioJvService.CreayeJv($scope.objJv);
        }
    })
    .controller('TIPICtrl', function ($scope, DTOptionsBuilder, $uibModal, SweetAlert, $localStorage, $rootScope) {
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withButtons([
                { extend: 'copy' },
                { extend: 'csv' },
                { extend: 'excel', title: 'ExampleFile' },
                { extend: 'pdf', title: 'ExampleFile' },

                {
                    extend: 'print',
                    customize: function (win) {
                        $(win.document.body).addClass('white-bg');
                        $(win.document.body).css('font-size', '10px');

                        $(win.document.body).find('table')
                            .addClass('compact')
                            .css('font-size', 'inherit');
                    }
                }
            ]);


        $scope.incluir = function () {
            $uibModal.open({
                templateUrl: 'views/modal/fatores/incluir_editar_fator.html',
                controller: 'fatoresModalCtrl',
                windowClass: "animated fadeIn",
                resolve: {
                    fatorSelected: function () {
                        return null;
                    }
                }
            }).result.then(function () {
                $scope.obterFatores();
            });
        }

        $scope.editar = function (fator) {
            $uibModal.open({
                templateUrl: 'views/modal/fatores/incluir_editar_fator.html',
                controller: 'fatoresModalCtrl',
                windowClass: "animated fadeIn",
                resolve: {
                    fatorSelected: function () {
                        return fator;
                    }
                }
            }).result.then(function () {
                $scope.obterFatores();
            });
        }

        $scope.ativarDesativar = function (fator) {
            $scope.title = fator.fa_Ativo == "1" ? "ativar" : "desativar";
            $scope.result = fator.fa_Ativo == "1" ? "ativado" : "desativado";

            SweetAlert.swal({
                title: "Deseja " + $scope.title + " ?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Sim, " + $scope.title + " !",
                cancelButtonText: "Não, cancelar!",
                closeOnConfirm: false,
                closeOnCancel: false
            },
                function (isConfirm) {
                    if (isConfirm) {
                        $http.post(constants.UrlApi + "Fator/AtivarDesativar", fator.fa_Id, {
                            headers: { 'Authorization': 'Bearer ' + $localStorage.token }
                        }).then(function (response) {
                            SweetAlert.swal({
                                title: "Alterado!",
                                text: "O fator foi " + $scope.result + " com sucesso.",
                                type: "success"
                            });

                            $scope.obterFatores();

                        }, function (response) {
                            return alert("Erro: " + response.status);
                        });
                    } else {
                        SweetAlert.swal({
                            title: "Cancelado!",
                            text: "Você cancelou a alteração do registro",
                            type: "error"
                        });
                    }
                });
        }
    })
    .controller('metaobjCtrl', function ($scope, DTOptionsBuilder, $uibModal, SweetAlert, $localStorage, $rootScope) {
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withButtons([
                { extend: 'copy' },
                { extend: 'csv' },
                { extend: 'excel', title: 'ExampleFile' },
                { extend: 'pdf', title: 'ExampleFile' },

                {
                    extend: 'print',
                    customize: function (win) {
                        $(win.document.body).addClass('white-bg');
                        $(win.document.body).css('font-size', '10px');

                        $(win.document.body).find('table')
                            .addClass('compact')
                            .css('font-size', 'inherit');
                    }
                }
            ]);


        $scope.incluir = function () {
            $uibModal.open({
                templateUrl: 'views/modal/fatores/incluir_editar_fator.html',
                controller: 'fatoresModalCtrl',
                windowClass: "animated fadeIn",
                resolve: {
                    fatorSelected: function () {
                        return null;
                    }
                }
            }).result.then(function () {
                $scope.obterFatores();
            });
        }

        $scope.editar = function (fator) {
            $uibModal.open({
                templateUrl: 'views/modal/fatores/incluir_editar_fator.html',
                controller: 'fatoresModalCtrl',
                windowClass: "animated fadeIn",
                resolve: {
                    fatorSelected: function () {
                        return fator;
                    }
                }
            }).result.then(function () {
                $scope.obterFatores();
            });
        }

        $scope.ativarDesativar = function (fator) {
            $scope.title = fator.fa_Ativo == "1" ? "ativar" : "desativar";
            $scope.result = fator.fa_Ativo == "1" ? "ativado" : "desativado";

            SweetAlert.swal({
                title: "Deseja " + $scope.title + " ?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Sim, " + $scope.title + " !",
                cancelButtonText: "Não, cancelar!",
                closeOnConfirm: false,
                closeOnCancel: false
            },
                function (isConfirm) {
                    if (isConfirm) {
                        $http.post(constants.UrlApi + "Fator/AtivarDesativar", fator.fa_Id, {
                            headers: { 'Authorization': 'Bearer ' + $localStorage.token }
                        }).then(function (response) {
                            SweetAlert.swal({
                                title: "Alterado!",
                                text: "O fator foi " + $scope.result + " com sucesso.",
                                type: "success"
                            });

                            $scope.obterFatores();

                        }, function (response) {
                            return alert("Erro: " + response.status);
                        });
                    } else {
                        SweetAlert.swal({
                            title: "Cancelado!",
                            text: "Você cancelou a alteração do registro",
                            type: "error"
                        });
                    }
                });
        }
    })
    .controller('textoCtrl', function ($scope, DTOptionsBuilder, $uibModal, SweetAlert, $localStorage, $rootScope) {
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withButtons([
                { extend: 'copy' },
                { extend: 'csv' },
                { extend: 'excel', title: 'ExampleFile' },
                { extend: 'pdf', title: 'ExampleFile' },

                {
                    extend: 'print',
                    customize: function (win) {
                        $(win.document.body).addClass('white-bg');
                        $(win.document.body).css('font-size', '10px');

                        $(win.document.body).find('table')
                            .addClass('compact')
                            .css('font-size', 'inherit');
                    }
                }
            ]);


        $scope.incluir = function () {
            $uibModal.open({
                templateUrl: 'views/modal/fatores/incluir_editar_fator.html',
                controller: 'fatoresModalCtrl',
                windowClass: "animated fadeIn",
                resolve: {
                    fatorSelected: function () {
                        return null;
                    }
                }
            }).result.then(function () {
                $scope.obterFatores();
            });
        }

        $scope.editar = function (fator) {
            $uibModal.open({
                templateUrl: 'views/modal/fatores/incluir_editar_fator.html',
                controller: 'fatoresModalCtrl',
                windowClass: "animated fadeIn",
                resolve: {
                    fatorSelected: function () {
                        return fator;
                    }
                }
            }).result.then(function () {
                $scope.obterFatores();
            });
        }

        $scope.ativarDesativar = function (fator) {
            $scope.title = fator.fa_Ativo == "1" ? "ativar" : "desativar";
            $scope.result = fator.fa_Ativo == "1" ? "ativado" : "desativado";

            SweetAlert.swal({
                title: "Deseja " + $scope.title + " ?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Sim, " + $scope.title + " !",
                cancelButtonText: "Não, cancelar!",
                closeOnConfirm: false,
                closeOnCancel: false
            },
                function (isConfirm) {
                    if (isConfirm) {
                        $http.post(constants.UrlApi + "Fator/AtivarDesativar", fator.fa_Id, {
                            headers: { 'Authorization': 'Bearer ' + $localStorage.token }
                        }).then(function (response) {
                            SweetAlert.swal({
                                title: "Alterado!",
                                text: "O fator foi " + $scope.result + " com sucesso.",
                                type: "success"
                            });

                            $scope.obterFatores();

                        }, function (response) {
                            return alert("Erro: " + response.status);
                        });
                    } else {
                        SweetAlert.swal({
                            title: "Cancelado!",
                            text: "Você cancelou a alteração do registro",
                            type: "error"
                        });
                    }
                });
        }
    })
    ;