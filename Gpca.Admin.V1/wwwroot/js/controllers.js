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
    .controller('LoginCtrl', function ($scope, toaster, AuthService, $loading, $localStorage) {
        $onInit = function () {
            $scope.tipo = "PF";
        };

        $scope.verificaCpfCnpj = function () {
            $loading.start('load');

            if ($localStorage.user != undefined) {
                var cpfCnpj = $scope.user.CpfCnpj.replace('.', '').replace('.', '').replace('-', '');
                if ($localStorage.user.userName == cpfCnpj) {
                    if ($localStorage.user.message.includes('primeiro acesso')) {
                        $scope.isCodeAccess = true;
                    } else {
                        $scope.isCodeAccess = false;
                    }
                } else {
                    $scope.isCodeAccess = false;
                }
            } else {
                $scope.isCodeAccess = false;
            }

            $loading.finish('load');
        }

        $scope.tipos = [
            { tipo: "PF", nome: "Pessoa Fisica" },
            { tipo: "PJ", nome: "Pessoa Juridica" }
        ]
        $scope.autenticar = function (user) {
            $loading.start('load');

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

            $loading.finish('load');
        }
    })
    .controller('RegisterCtrl', function ($scope, toaster, $loading, AuthService, $q, $timeout) {

        $scope.user = {
            CpfCnpj: "",
            Email: "",
            Senha: "",
            SenhaConfirmacao: ""
        };

        $onInit = function () {
            $scope.tipo = "PF";
        };
        $scope.tipos = [
            { tipo: "PF", nome: "Pessoa Fisica" },
            { tipo: "PJ", nome: "Pessoa Juridica" }
        ]

        $scope.RedefinirUsuario = function (user) {
            $loading.start('load');
            AuthService.RedefinirSenha(user);
        }

        $scope.CriarUsuario = function (user) {
            AuthService.cadastrar(user);
        }
    })
    .controller('topNavCtrl', function ($scope, $localStorage, $http, $uibModal, SweetAlert) {

        //if ($localStorage.user == undefined) {
        //    window.location = "#/login";
        //}

        $scope.user = $localStorage.user.userName.split('-')[1];


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
    .controller('consorcioCtrl', function ($scope, DTOptionsBuilder, $uibModal, $localStorage, ConsortiumService, $q, SweetAlert) {

        $scope.GetAll = function () {
            var GetList = ConsortiumService.GetConsorcio();

            $q.all([GetList]).then(function (response) {
                $scope.getData = response[0].data;

            });
        }

        $scope.GetAll();

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
                scope: $scope,
                templateUrl: 'views/modal/consorcio/incluir_editar_consorcio.html',
                controller: function ($scope, $uibModalInstance, SweetAlert, consorcioSelected, ConsortiumService) {
                    $scope.Incluir = function () {
                        $scope.value = consorcioSelected;
                        ConsortiumService.Create($scope.obj)
                        SweetAlert.swal({
                            title: "Sucesso!",
                            text: "valores alterados com sucesso",
                            type: "success"
                        });
                        $uibModalInstance.close();

                    }

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                },
                windowClass: "animated fadeIn",
                resolve: {
                    consorcioSelected: function () {
                        return null;
                    }
                }
            }).result.then(function (result) {
                $scope.GetAll();
            })
        }

        $scope.editar = function (data) {
            $uibModal.open({
                scope: $scope,
                templateUrl: 'views/modal/consorcio/incluir_editar_consorcio.html',
                controller: function ($scope, $uibModalInstance, consorcioSelected, SweetAlert, ConsortiumService) {
                    $scope.obj = {};
                    $scope.value = consorcioSelected;
                    $scope.obj.Descricao = consorcioSelected.descricao;


                    $scope.Alterar = function () {
                        consorcioSelected.descricao = $scope.obj.Descricao;
                        ConsortiumService.Edit(consorcioSelected).then(function (data) {
                            SweetAlert.swal({
                                title: "Sucesso!",
                                text: "valores alterados com sucesso",
                                type: "success"
                            });
                            $uibModalInstance.dismiss('dimiss');
                        })

                    }

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                },
                windowClass: "animated fadeIn",
                resolve: {
                    consorcioSelected: function () {
                        return data;
                    }
                }
            })
                .result.then(function (result) {
                    $scope.GetAll();
                });
        }

        $scope.ativarDesativar = function (data) {
            $scope.title = !data.ativo ? "ativar" : "desativar";
            $scope.result = !data.ativo ? "ativada" : "desativada";

            SweetAlert.swal({
                title: "Deseja " + $scope.title + " " + data.descricao + " ?",
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
                        ConsortiumService.EnableDisable(data).then(function (data) {
                            SweetAlert.swal({
                                title: "Alterado!",
                                text: "valores alterados com sucesso",
                                type: "success"
                            });
                            $scope.GetAll();
                        })
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
    .controller('JVCtrl', function ($scope, DTOptionsBuilder, $uibModal, SweetAlert, $localStorage, ConsortiumJvService, ConsortiumService, $q) {

        $scope.GetAll = function () {
            ConsortiumJvService.GetAll().then(function (data) {
                $scope.lst = data
            });
        }

        $scope.GetListConsorcio = function () {
            ConsortiumService.GetConsorcio().then(function (data) {
                $scope.lstConsorcio = data.data
            })
        }

        $scope.GetAll();
        $scope.GetListConsorcio();


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


        $scope.btnAddJv = function () {
            $uibModal.open({
                scope: $scope,
                templateUrl: 'views/modal/consorcio/incluir_editar_consorcioJV.html',
                controller: function ($scope, $uibModalInstance, jvSelected) {
                    $scope.Incluir = function () {
                        $scope.obj.Planilha = parseInt($scope.obj.Planilha);
                        ConsortiumJvService.CreateJv($scope.obj).then(function (data) {
                            SweetAlert.swal({
                                title: "Sucesso!",
                                text: "valores alterados com sucesso",
                                type: "success"
                            });
                            $uibModalInstance.close();
                        })
                    }

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                },
                windowClass: "animated fadeIn",
                resolve: {
                    jvSelected: function () {
                        return null;
                    }
                }
            })
                .result.then(function (result) {
                    $scope.GetAll();
                });
        }

        $scope.editar = function (data) {
            $uibModal.open({
                scope: $scope,
                templateUrl: 'views/modal/consorcio/incluir_editar_consorcioJV.html',
                controller: function ($scope, $uibModalInstance, jvSelected) {
                    $scope.obj = {};
                    $scope.value = jvSelected;

                    $scope.obj.ConsorcioId = jvSelected.consorcioId;
                    $scope.obj.JV = jvSelected.jv;
                    $scope.obj.SituacaoJV = jvSelected.situacaoJV;
                    $scope.obj.Cutback = jvSelected.cutback;
                    $scope.obj.Planilha = jvSelected.planilha.toString();

                    $scope.Alterar = function () {
                        jvSelected.consorcioId = $scope.obj.ConsorcioId
                        jvSelected.jv = $scope.obj.JV;
                        jvSelected.situacaoJV = $scope.obj.SituacaoJV;
                        jvSelected.cutback = $scope.obj.Cutback;
                        jvSelected.planilha = $scope.obj.Planilha;

                        ConsortiumJvService.EditJv(jvSelected).then(function (data) {
                            SweetAlert.swal({
                                title: "Sucesso!",
                                text: "valores alterados com sucesso",
                                type: "success"
                            });
                            $uibModalInstance.close();
                        })
                        $uibModalInstance.close();
                    }

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };

                },
                windowClass: "animated fadeIn",
                resolve: {
                    jvSelected: function () {
                        return data;
                    }
                }
            })
                .result.then(function (result) {
                    $scope.GetAll();
                });
        }

        $scope.ativarDesativar = function (data) {
            $scope.title = !data.ativo ? "ativar" : "desativar";
            $scope.result = !data.ativo ? "ativada" : "desativada";

            SweetAlert.swal({
                title: "Deseja " + $scope.title + " " + data.jv + " ?",
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
                        ConsortiumJvService.EnableDisable(data).then(function (data) {
                            SweetAlert.swal({
                                title: "Alterado!",
                                text: "valores alterados com sucesso",
                                type: "success"
                            });
                            $scope.GetAll();
                        })
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
    .controller('cfopCtrl', function ($scope, DTOptionsBuilder, $uibModal, SweetAlert, $localStorage, CfopService, $q) {

        $scope.GetAllCfops = function () {
            var GetList = CfopService.GetList();

            $q.all([GetList]).then(function (response) {
                $scope.cfops = response[0].data;
            });
        }

        $scope.GetAllCfops();

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

        $scope.novo = function () {
            $uibModal.open({
                scope: $scope,
                templateUrl: 'views/modal/Cfop/incluir_editar_cfop.html',
                controller: function ($scope, $uibModalInstance, SweetAlert) {
                    $scope.Incluir = function () {
                        CfopService.Create($scope.obj).then(function (data) {
                            SweetAlert.swal({
                                title: "Sucesso!",
                                text: "valores alterados com sucesso",
                                type: "success"
                            });
                            $uibModalInstance.close();
                        })

                    }

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                },
                windowClass: "animated fadeIn",
                resolve: {
                    CfopService: function () {
                        return null;
                    }
                }
            }).result.then(function (result) {
                $scope.GetAllCfops();
            });

        }

        $scope.editar = function (data) {
            $uibModal.open({
                scope: $scope,
                templateUrl: 'views/modal/Cfop/incluir_editar_cfop.html',
                controller: function ($scope, $uibModalInstance, CfopSelected, SweetAlert) {
                    $scope.obj = {};
                    $scope.value = CfopSelected;
                    $scope.obj.numeracao = CfopSelected.numeracao;
                    $scope.obj.descricao = CfopSelected.descricao;
                    $scope.obj.entradaSaida = CfopSelected.entradaSaida;
                    $scope.obj.credito = CfopSelected.credito

                    $scope.Alterar = function () {
                        CfopSelected.numeracao = $scope.obj.numeracao
                        CfopSelected.descricao = $scope.obj.descricao;
                        CfopSelected.entradaSaida = $scope.obj.entradaSaida;
                        CfopSelected.credito = $scope.obj.credito;

                        CfopService.Edit(CfopSelected).then(function (data) {
                            SweetAlert.swal({
                                title: "Sucesso!",
                                text: "valores alterados com sucesso",
                                type: "success"
                            });
                            $uibModalInstance.dismiss('dimiss');
                        })

                    }

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                },
                windowClass: "animated fadeIn",
                resolve: {
                    CfopSelected: function () {
                        return data;
                    }
                }
            })
                .result.then(function (result) {
                    $scope.GetAllCfops();
                });
        }

        // Função só esta sendo chamada, mas não a correta, criar a função de desativar no backend

        $scope.ativarDesativar = function (data) {
            $scope.title = !data.ativo ? "ativar" : "desativar";
            $scope.result = !data.ativo ? "ativada" : "desativada";

            SweetAlert.swal({
                title: "Deseja " + $scope.title + " " + data.descricao + " ?",
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
                        CfopService.EnableDisable(data).then(function (data) {
                            SweetAlert.swal({
                                title: "Alterado!",
                                text: "valores alterados com sucesso",
                                type: "success"
                            });
                            $scope.GetAllCfops();
                        })
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
    .controller('NCMCtrl', function ($scope, DTOptionsBuilder, $uibModal, SweetAlert, $localStorage, NCMService, $q) {

        $scope.GetAll = function () {
            var GetList = NCMService.GetList();

            $q.all([GetList]).then(function (response) {
                $scope.ncms = response[0].data;
                //$scope.consorcioList = response[1].data;

            });
        }

        $scope.GetAll();

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


        $scope.novo = function () {
            $uibModal.open({
                scope: $scope,
                templateUrl: 'views/modal/NCM/incluir_editar_ncm.html',
                controller: function ($scope, $uibModalInstance, ncmSelected, NCMService) {

                    $scope.dateOptions = {
                        formatYear: 'yy',
                        startingDay: 1
                    };

                    $scope.inlineOptions = {
                        customClass: getDayClass,
                        minDate: new Date(),
                        showWeeks: true
                    };

                    $scope.format = 'dd/MM/yyyy'

                    $scope.toggleMin = function () {
                        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
                        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
                    };

                    $scope.toggleMin();

                    $scope.open1 = function () {
                        $scope.popup1.opened = true;
                    };

                    $scope.open2 = function () {
                        $scope.popup2.opened = true;
                    };

                    $scope.setDate = function (year, month, day) {
                        $scope.dt = new Date(year, month, day);
                    };

                    $scope.popup1 = {
                        opened: false
                    };

                    $scope.popup2 = {
                        opened: false
                    };

                    function getDayClass(data) {
                        var date = data.date,
                            mode = data.mode;
                        if (mode === 'day') {
                            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                            for (var i = 0; i < $scope.events.length; i++) {
                                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                                if (dayToCheck === currentDay) {
                                    return $scope.events[i].status;
                                }
                            }
                        }

                        return '';
                    }

                    $scope.Incluir = function () {
                        $scope.value = ncmSelected;
                        NCMService.Create($scope.obj).then(function (data) {
                            SweetAlert.swal({
                                title: "Sucesso!",
                                text: "valores alterados com sucesso",
                                type: "success"
                            });
                            $uibModalInstance.close();
                        });
                    }

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                },
                windowClass: "animated fadeIn",
                resolve: {
                    ncmSelected: function () {
                        return null;
                    }
                }
            }).result.then(function (result) {
                $scope.GetAll();
            });
        }

        $scope.editar = function (data) {
            $uibModal.open({
                scope: $scope,
                templateUrl: 'views/modal/NCM/incluir_editar_ncm.html',
                controller: function ($scope, $uibModalInstance, ncmSelected, NCMService) {

                    $scope.parseISOString = function (d) {
                        var b = d.split(/\D+/);
                        return new Date(Date.UTC(b[0], --b[1], ++b[2], b[3], b[4], b[5]));
                    }

                    $scope.dateOptions = {
                        formatYear: 'yy',
                        startingDay: 1
                    };

                    $scope.inlineOptions = {
                        customClass: getDayClass,
                        minDate: new Date(),
                        showWeeks: true
                    };

                    $scope.format = 'dd/MM/yyyy'

                    $scope.toggleMin = function () {
                        $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
                        $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
                    };

                    $scope.toggleMin();

                    $scope.open1 = function () {
                        $scope.popup1.opened = true;
                    };

                    $scope.open2 = function () {
                        $scope.popup2.opened = true;
                    };

                    $scope.setDate = function (year, month, day) {
                        $scope.dt = new Date(year, month, day);
                    };

                    $scope.popup1 = {
                        opened: false
                    };

                    $scope.popup2 = {
                        opened: false
                    };

                    function getDayClass(data) {
                        var date = data.date,
                            mode = data.mode;
                        if (mode === 'day') {
                            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                            for (var i = 0; i < $scope.events.length; i++) {
                                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                                if (dayToCheck === currentDay) {
                                    return $scope.events[i].status;
                                }
                            }
                        }

                        return '';
                    }

                    $scope.obj = {};

                    $scope.value = ncmSelected;

                    $scope.obj.codigo = ncmSelected.codigo;
                    $scope.obj.descricao = ncmSelected.descricao
                    $scope.obj.credito = ncmSelected.credito;
                    $scope.obj.dataInicio = $scope.parseISOString(ncmSelected.dataInicio);
                    $scope.obj.dataFim = $scope.parseISOString(ncmSelected.dataFim);
                    $scope.obj.ano = ncmSelected.ano

                    $scope.Alterar = function () {
                        ncmSelected.codigo = $scope.obj.codigo;
                        ncmSelected.descricao = $scope.obj.descricao;
                        ncmSelected.credito = $scope.obj.credito;
                        ncmSelected.dataInicio = $scope.obj.dataInicio;
                        ncmSelected.dataFim = $scope.obj.dataFim;
                        ncmSelected.ano = $scope.obj.ano;

                        NCMService.Edit(ncmSelected).then(function () {
                            SweetAlert.swal({
                                title: "Sucesso!",
                                text: "valores alterados com sucesso",
                                type: "success"
                            });
                            $uibModalInstance.close();
                        })
                    }

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                },
                windowClass: "animated fadeIn",
                resolve: {
                    ncmSelected: function () {
                        return data;
                    }
                }
            }).result.then(function (result) {
                $scope.GetAll();
            });
        }

        $scope.ativarDesativar = function (data) {
            $scope.title = !data.ativo ? "ativar" : "desativar";
            $scope.result = !data.ativo ? "ativada" : "desativada";

            SweetAlert.swal({
                title: "Deseja " + $scope.title + " " + data.descricao + " ?",
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
                        NCMService.EnableDisable(data).then(function (data) {
                            SweetAlert.swal({
                                title: "Alterado!",
                                text: "valores alterados com sucesso",
                                type: "success"
                            });
                            $scope.GetAll();
                        })
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
    .controller('metaobjCtrl', function ($scope, DTOptionsBuilder, $uibModal, SweetAlert, $localStorage, MetaObjetoService, $q) {

        $scope.GetAll = function () {
            var GetList = MetaObjetoService.GetMetaObjs();

            $q.all([GetList]).then(function (response) {
                $scope.metaObj = response[0].data;
            });
        }

        $scope.GetAll();

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


        $scope.novo = function () {
            $uibModal.open({
                scope: $scope,
                templateUrl: 'views/modal/Meta/incluir_editar_metaobj.html',
                controller: function ($scope, $uibModalInstance, MetaObjetoService, metaSelected) {

                    $scope.Incluir = function () {
                        $scope.value = metaSelected;


                        MetaObjetoService.Create($scope.obj).then(function (data) {
                            SweetAlert.swal({
                                title: "Sucesso!",
                                text: "valores alterados com sucesso",
                                type: "success"
                            });
                            $uibModalInstance.close();
                        })
                    }

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                },
                windowClass: "animated fadeIn",
                resolve: {
                    metaSelected: function () {
                        return null;
                    }
                }
            }).result.then(function (result) {
                $scope.GetAll();
            });
        }

        $scope.editar = function (data) {
            $uibModal.open({
                scope: $scope,
                templateUrl: 'views/modal/Meta/incluir_editar_metaobj.html',
                controller: function ($scope, $uibModalInstance, metaSelected, MetaObjetoService) {
                    $scope.value = metaSelected;
                    $scope.obj = {};
                    $scope.obj.descricao = metaSelected.descricao;
                    $scope.obj.credito = metaSelected.credito

                    $scope.Alterar = function () {
                        metaSelected.descricao = $scope.obj.descricao;
                        metaSelected.credito = $scope.obj.credito;

                        MetaObjetoService.Edit(metaSelected).then(function () {
                            SweetAlert.swal({
                                title: "Sucesso!",
                                text: "valores alterados com sucesso",
                                type: "success"
                            });
                            $uibModalInstance.close();
                        })
                    }

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                },
                windowClass: "animated fadeIn",
                resolve: {
                    metaSelected: function () {
                        return data;
                    }
                }
            }).result.then(function (result) {
                $scope.GetAll();
            });
        }

        $scope.ativarDesativar = function (data) {
            $scope.title = !data.ativo ? "ativar" : "desativar";
            $scope.result = !data.ativo ? "ativada" : "desativada";

            SweetAlert.swal({
                title: "Deseja " + $scope.title + " " + data.descricao + " ?",
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
                        MetaObjetoService.EnableDisable(data).then(function (data) {
                            SweetAlert.swal({
                                title: "Alterado!",
                                text: "valores alterados com sucesso",
                                type: "success"
                            });
                            $scope.GetAll();
                        })
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
    .controller('textoCtrl', function ($scope, DTOptionsBuilder, $uibModal, SweetAlert, $localStorage, TextoService, $q, $loading) {

        $scope.obj = { pageNumber: 1, pageSize: 10, "filtroTextoBreve": { Texto: "" } }
        $scope.maxSize = 10;
        $scope.currentPage = 1;
        $scope.numPerPage = $scope.obj.pageSize;
        $scope.totalRecords = 0;

        $scope.GetAll = function (d) {
            $loading.start('load');
            TextoService.GetAllPaginate(d).then(function (data) {
                $scope.textos = data.data;
                $scope.totalRecords = data.totalRecords;
                $loading.finish('load');
            })
        }

        $scope.GetAll($scope.obj);

        $scope.pageChanged = function () {
            $scope.obj.pageNumber = $scope.currentPage;
            $scope.GetAll($scope.obj);
        }

        $scope.incluir = function () {
            $uibModal.open({
                scope: $scope,
                templateUrl: 'views/modal/Texto/incluir_editar_texto.html',
                controller: function ($scope, $uibModalInstance, TextoService) {
                    $scope.IncluirJv = function () {
                        $scope.value = textoSelected;
                        TextoService.Create($scope.obj);
                        $uibModalInstance.close();
                    }

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                },
                windowClass: "animated fadeIn",
                resolve: {
                    textoSelected: function () {
                        return null;
                    }
                }
            });
        }

        $scope.editar = function (data) {
            $uibModal.open({
                scope: $scope,
                templateUrl: 'views/modal/Texto/incluir_editar_texto.html',
                controller: function ($scope, $uibModalInstance, textoSelected, TextoService) {
                    $scope.obj = {};
                    $scope.value = textoSelected;
                    $scope.obj.descricao = textoSelected.descricao;
                    $scope.obj.creditavel = textoSelected.creditavel.toString();

                    $scope.editar = function () {
                        textoSelected.descricao = $scope.obj.descricao;
                        textoSelected.creditavel = $scope.obj.creditavel;

                        TextoService.Edit(textoSelected);
                        $uibModalInstance.dismiss('dimiss');
                    }

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                },
                windowClass: "animated fadeIn",
                resolve: {
                    textoSelected: function () {
                        return data;
                    }
                }
            });
        }

        $scope.ativarDesativar = function (data) {
            $scope.title = !data.ativo ? "ativar" : "desativar";
            $scope.result = !data.ativo ? "ativada" : "desativada";

            SweetAlert.swal({
                title: "Deseja " + $scope.title + " " + data.descricao + " ?",
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
                        TextoService.EnableDisable(data).then(function (data) {
                            SweetAlert.swal({
                                title: "Alterado!",
                                text: "valores alterados com sucesso",
                                type: "success"
                            });
                            $scope.GetAll();
                        })
                    } else {
                        SweetAlert.swal({
                            title: "Cancelado!",
                            text: "Você cancelou a alteração do registro",
                            type: "error"
                        });
                    }
                });
        }

        $scope.limparFiltro = function () {
            $scope.obj.filtroTextoBreve.Texto = "";
            $scope.GetAll($scope.obj);
        }
        $scope.filtrar = function () {
            $scope.GetAll($scope.obj);
        }

    })
    .controller('ConsolidadoCtrl', function ($scope, RelatoriosService, DTOptionsBuilder, $q, SweetAlert, $loading, $timeout) {

        $loading.start('load');
        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withButtons([
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

        var list = RelatoriosService.GetProcessedReports();
        $scope.dtProcessamento = '';

        $q.all([list]).then(function (response) {
            $scope.GetFiles = response[0].data;
            $loading.finish('load');
        });

        $scope.btnGerar = function (date, flagReproc, action) {
            $loading.start('load');

            if (date != '' || date != undefined) {

                if (action == 'gerar') {
                    if ($scope.GetFiles.filter(a => a.mesCompetencia == date.substr(3, 7)).length > 0) {
                        $loading.finish('load');
                        SweetAlert.swal({
                            title: 'O período selecionado "' + date + '" já foi processado. Procure-o no grid para "Reprocessar" ou "Baixar" novamente.',
                            type: "error",
                            showCancelButton: false,
                            confirmButtonColor: "#DD6B55",
                            confirmButtonText: "OK",
                            closeOnConfirm: false,
                            closeOnCancel: false
                        });

                        return;
                    }
                }

                var reproc = flagReproc == 1 ? true : false;
                var getExcel = RelatoriosService.CreateExcel(date, reproc);

                $q.all([getExcel]).then(function (response) {

                    if (response[0] == undefined) {
                        $timeout(function () {
                            window.location.reload();
                        }, 2000);

                    } else {

                        const blob = response[0].data
                        var url = window.URL.createObjectURL(blob);
                        var a = document.createElement("a");
                        document.body.appendChild(a);
                        a.href = url;
                        a.download = "Consolidação Relatórios de Gastos.xlsx";
                        a.click();

                        $loading.finish('load');
                    }
                }, function (error) {
                    console.log(error);
                    $loading.finish('load');
                });

            }
        }



    })
    .controller('ResumoCtrl', function ($scope, DTOptionsBuilder, $loading, SweetAlert, $q, RelatoriosService) {

        $scope.dtProcessamento = '';
        $scope.isFiltered = false;

        $scope.GerarResumo = function (data) {
            $loading.start('load');

            if (data != '' && data != undefined) {

                var getResumo = RelatoriosService.GetResumo(data);

                $q.all([getResumo]).then(function (response) {
                    $scope.isFiltered = true;
                    $scope.GetResumo = response[0].data;

                    $loading.finish('load');
                });
            } else {
                $loading.finish('load');
                SweetAlert.swal("Atenção!", "Data de competência não pode ser vazio.", "warning");
            }
        };


        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withButtons([
                { extend: 'copy' },
                { extend: 'csv' },
                { extend: 'excel', title: 'Resumo_Creditos_' + $scope.dtProcessamento },

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
    })
    .controller('RelDuplicidadeCtrl', function ($scope, $uibModal, SweetAlert, $localStorage, RelatoriosService) {
        $scope.dateOptions = {
            formatYear: 'yy',
            maxDate: new Date(),
            minDate: new Date(),
            startingDay: 1
        };

        $scope.inlineOptions = {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        };

        $scope.format = 'MMMM'

        $scope.toggleMin = function () {
            $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
            $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
            $scope.dateOptions.datepickerMode = "month";
            $scope.dateOptions.minMode = "month";
        };

        $scope.toggleMin();

        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };

        $scope.popup1 = {
            opened: false
        };

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        }

        $scope.download = function () {
            var requestData = $scope.data;
            RelatoriosService.DownloadDuplicados(requestData);
        }
    })
    .controller('ImportacaoCtrl', function ($scope, DTOptionsBuilder, $loading, SweetAlert, $localStorage, RelatoriosService, $q) {

        $loading.start('load');
        var GetList = RelatoriosService.GetFiles();
        $scope.dataProcessamento = "";

        $q.all([GetList]).then(function (response) {
            $scope.GetFiles = response[0].data;
            $loading.finish('load');
        });

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

        $scope.importarArquivo = function (file) {
            if ($scope.dataProcessamento == "") {
                SweetAlert.swal("Atenção!", "Data de processamento não pode ser vazio.", "warning");
            } else {

                $loading.start('load');
                var json = {
                    fileName: file.nomeArquivo,
                    yearsMonthProccess: $scope.dataProcessamento
                }

                var result = RelatoriosService.Importar(json);

                $q.all([result]).then(function (response) {
                    $loading.finish('load');
                    SweetAlert.swal("Boa!", response[0].message, "success");
                });
            }
        }
    })
    .controller('ManualH01Ctrl', function ($scope, $uibModal, SweetAlert, DTOptionsBuilder, ManualService, $q, $http, $loading, SweetAlert) {
        $scope.obj = { pageNumber: 1, pageSize: 10, "filtroManual": { MesCompetencia: new Date(), Credito: "", TipoItem: "" } }
        $scope.maxSize = 10;
        $scope.currentPage = 1;
        $scope.numPerPage = $scope.obj.pageSize;
        $scope.totalRecords = 0;

        $scope.creditos = ["Creditável", "Não Creditável"];
        $scope.tiposCredito = ["01 - Imobilizado", "02 - Bens", "03 - Serviços", "06 - aluguel", "08 - aluguel", "01 - imobilizado importação", "02 - bens importação"];

        $scope.dateOptions = {
            formatYear: 'yy',
            maxDate: new Date(),
            minDate: new Date(),
            startingDay: 1
        };

        $scope.inlineOptions = {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        };

        $scope.format = 'MM/yyyy'

        $scope.toggleMin = function () {
            $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
            $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
            $scope.dateOptions.datepickerMode = "month";
            $scope.dateOptions.minMode = "month";
        };

        $scope.toggleMin();

        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };

        $scope.popup1 = {
            opened: false
        };

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        }

        $scope.ObterPlanilha = function (d) {
            $loading.start('load');
            ManualService.GetH01(d).then(function (data) {
                $scope.listH01 = data.data;
                $scope.totalRecords = data.totalRecords;
                $loading.finish('load');
            })
        }

        $scope.ObterPlanilha($scope.obj);

        $scope.pageChanged = function () {
            $scope.obj.pageNumber = $scope.currentPage;
            $scope.ObterPlanilha($scope.obj);
        }

        $scope.editar = function (obj) {
            $uibModal.open({
                scope: $scope,
                templateUrl: 'views/modal/Manual/editar_manuais.html',
                controller: function ($scope, $uibModalInstance, manualSelected) {

                    $scope.obj = {};
                    $scope.obj.Creditos = manualSelected.creditos;
                    $scope.obj.TipoItem = manualSelected.tipoItem

                    $scope.alterar = function () {
                        manualSelected.creditos = $scope.obj.Creditos
                        manualSelected.tipoItem = $scope.obj.TipoItem

                        ManualService.EditH01(manualSelected).then(function () {
                            $uibModalInstance.dismiss('dimiss');
                            SweetAlert.swal({
                                title: "Sucesso!",
                                text: "valores alterados com sucesso",
                                type: "success"
                            });
                        })

                    }

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                },
                windowClass: "animated fadeIn",
                resolve: {
                    manualSelected: function () {
                        return obj;
                    }
                }
            });
        }

        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withButtons([
                { extend: 'copy' },
                { extend: 'csv' },
                { extend: 'excel', title: 'Resumo_Creditos_' + $scope.dtProcessamento },

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

        $scope.limparFiltro = function () {
            $scope.obj.filtroManual.MesCompetencia = new Date();
            $scope.obj.filtroManual.Credito = ""
            $scope.obj.filtroManual.TipoItem = ""
            $scope.GetAll($scope.obj);
        }
        $scope.filtrar = function () {

            $scope.ObterPlanilha($scope.obj);
        }
    })
    .controller('ManualH02Ctrl', function ($scope, $uibModal, SweetAlert, DTOptionsBuilder, ManualService, $q, $http, $loading) {
        $scope.obj = { pageNumber: 1, pageSize: 10, "filtroManual": { MesCompetencia: new Date(), Credito: "", TipoItem: "" } }
        $scope.maxSize = 10;
        $scope.currentPage = 1;
        $scope.numPerPage = $scope.obj.pageSize;
        $scope.totalRecords = 0;

        $scope.creditos = ["Creditável", "Não Creditável"];
        $scope.tiposCredito = ["01 - Imobilizado", "02 - Bens", "03 - Serviços", "06 - aluguel", "08 - aluguel", "01 - imobilizado importação", "02 - bens importação"];

        $scope.dateOptions = {
            formatYear: 'yy',
            maxDate: new Date(),
            minDate: new Date(),
            startingDay: 1
        };

        $scope.inlineOptions = {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        };

        $scope.format = 'MM/yyyy'

        $scope.toggleMin = function () {
            $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
            $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
            $scope.dateOptions.datepickerMode = "month";
            $scope.dateOptions.minMode = "month";
        };

        $scope.toggleMin();

        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };

        $scope.popup1 = {
            opened: false
        };

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        }

        $scope.ObterPlanilha = function (d) {
            $loading.start('load');
            ManualService.GetH02(d).then(function (data) {
                $scope.listH02 = data.data;
                $scope.totalRecords = data.totalRecords;
                $loading.finish('load');
            })
        }

        $scope.ObterPlanilha($scope.obj);

        $scope.pageChanged = function () {
            $scope.obj.pageNumber = $scope.currentPage;
            $scope.ObterPlanilha($scope.obj);
        }

        $scope.editar = function (obj) {
            $uibModal.open({
                scope: $scope,
                templateUrl: 'views/modal/Manual/editar_manuais.html',
                controller: function ($scope, $uibModalInstance, manualSelected) {

                    $scope.creditos = ["Creditável", "Não Creditável"];
                    $scope.tiposCredito = ["01 - Imobilizado", "02 - Bens", "03 - Serviços", "06 - aluguel", "08 - aluguel", "01 - imobilizado importação", "02 - bens importação"];
                    $scope.obj = {};
                    $scope.obj.Creditos = manualSelected.creditos;
                    $scope.obj.TipoItem = manualSelected.tipoItem

                    $scope.alterar = function () {
                        manualSelected.creditos = $scope.obj.Creditos
                        manualSelected.tipoItem = $scope.obj.TipoItem

                        ManualService.EditH02(manualSelected).then(function () {
                            $uibModalInstance.dismiss('dimiss');
                            SweetAlert.swal({
                                title: "Sucesso!",
                                text: "valores alterados com sucesso",
                                type: "success"
                            });
                        })

                    }

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                },
                windowClass: "animated fadeIn",
                resolve: {
                    manualSelected: function () {
                        return obj;
                    }
                }
            });
        }

        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withButtons([
                { extend: 'copy' },
                { extend: 'csv' },
                { extend: 'excel', title: 'Resumo_Creditos_' + $scope.dtProcessamento },

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

        $scope.limparFiltro = function () {
            $scope.obj.filtroManual.MesCompetencia = new Date();
            $scope.obj.filtroManual.Credito = ""
            $scope.obj.filtroManual.TipoItem = ""
            $scope.GetAll($scope.obj);
        }
        $scope.filtrar = function () {

            $scope.ObterPlanilha($scope.obj);
        }
    })
    .controller('ManualH03Ctrl', function ($scope, $uibModal, SweetAlert, DTOptionsBuilder, ManualService, $q, $http, $loading) {
        $scope.obj = { pageNumber: 1, pageSize: 10, "filtroManual": { MesCompetencia: new Date(), Credito: "", TipoItem: "" } }
        $scope.maxSize = 10;
        $scope.currentPage = 1;
        $scope.numPerPage = $scope.obj.pageSize;
        $scope.totalRecords = 0;

        $scope.creditos = ["Creditável", "Não Creditável"];
        $scope.tiposCredito = ["01 - Imobilizado", "02 - Bens", "03 - Serviços", "06 - aluguel", "08 - aluguel", "01 - imobilizado importação", "02 - bens importação"];

        $scope.dateOptions = {
            formatYear: 'yy',
            maxDate: new Date(),
            minDate: new Date(),
            startingDay: 1
        };

        $scope.inlineOptions = {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        };

        $scope.format = 'MM/yyyy'

        $scope.toggleMin = function () {
            $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
            $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
            $scope.dateOptions.datepickerMode = "month";
            $scope.dateOptions.minMode = "month";
        };

        $scope.toggleMin();

        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };

        $scope.popup1 = {
            opened: false
        };

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        }

        $scope.ObterPlanilha = function (d) {
            $loading.start('load');
            ManualService.GetH03(d).then(function (data) {
                $scope.listH03 = data.data;
                $scope.totalRecords = data.totalRecords;
                $loading.finish('load');
            })
        }

        $scope.ObterPlanilha($scope.obj);

        $scope.pageChanged = function () {
            $scope.obj.pageNumber = $scope.currentPage;
            $scope.ObterPlanilha($scope.obj);
        }

        $scope.editar = function (obj) {
            $uibModal.open({
                scope: $scope,
                templateUrl: 'views/modal/Manual/editar_manuais.html',
                controller: function ($scope, $uibModalInstance, manualSelected) {

                    $scope.creditos = ["Creditável", "Não Creditável"];
                    $scope.tiposCredito = ["01 - Imobilizado", "02 - Bens", "03 - Serviços", "06 - aluguel", "08 - aluguel", "01 - imobilizado importação", "02 - bens importação"];
                    $scope.obj = {};
                    $scope.obj.Creditos = manualSelected.creditos;
                    $scope.obj.TipoItem = manualSelected.tipoItem

                    $scope.alterar = function () {
                        manualSelected.creditos = $scope.obj.Creditos
                        manualSelected.tipoItem = $scope.obj.TipoItem

                        ManualService.EditH03(manualSelected).then(function () {
                            $uibModalInstance.dismiss('dimiss');
                            SweetAlert.swal({
                                title: "Sucesso!",
                                text: "valores alterados com sucesso",
                                type: "success"
                            });
                        })

                    }

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                },
                windowClass: "animated fadeIn",
                resolve: {
                    manualSelected: function () {
                        return obj;
                    }
                }
            });
        }

        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withButtons([
                { extend: 'copy' },
                { extend: 'csv' },
                { extend: 'excel', title: 'Resumo_Creditos_' + $scope.dtProcessamento },

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

        $scope.limparFiltro = function () {
            $scope.obj.filtroManual.MesCompetencia = new Date();
            $scope.obj.filtroManual.Credito = ""
            $scope.obj.filtroManual.TipoItem = ""
            $scope.GetAll($scope.obj);
        }
        $scope.filtrar = function () {

            $scope.ObterPlanilha($scope.obj);
        }
    })
    .controller('ManualH04Ctrl', function ($scope, $uibModal, SweetAlert, DTOptionsBuilder, ManualService, $q, $http, $loading) {
        $scope.obj = { pageNumber: 1, pageSize: 10, "filtroManual": { MesCompetencia: new Date(), Credito: "", TipoItem: "" } }
        $scope.maxSize = 10;
        $scope.currentPage = 1;
        $scope.numPerPage = $scope.obj.pageSize;
        $scope.totalRecords = 0;

        $scope.creditos = ["Creditável", "Não Creditável"];
        $scope.tiposCredito = ["01 - Imobilizado", "02 - Bens", "03 - Serviços", "06 - aluguel", "08 - aluguel", "01 - imobilizado importação", "02 - bens importação"];

        $scope.dateOptions = {
            formatYear: 'yy',
            maxDate: new Date(),
            minDate: new Date(),
            startingDay: 1
        };

        $scope.inlineOptions = {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        };

        $scope.format = 'MM/yyyy'

        $scope.toggleMin = function () {
            $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
            $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
            $scope.dateOptions.datepickerMode = "month";
            $scope.dateOptions.minMode = "month";
        };

        $scope.toggleMin();

        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };

        $scope.popup1 = {
            opened: false
        };

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        }

        $scope.ObterPlanilha = function (d) {
            $loading.start('load');
            ManualService.GetH04(d).then(function (data) {
                $scope.listH04 = data.data;
                $scope.totalRecords = data.totalRecords;
                $loading.finish('load');
            })
        }

        $scope.ObterPlanilha($scope.obj);

        $scope.pageChanged = function () {
            $scope.obj.pageNumber = $scope.currentPage;
            $scope.ObterPlanilha($scope.obj);
        }

        $scope.editar = function (obj) {
            $uibModal.open({
                scope: $scope,
                templateUrl: 'views/modal/Manual/editar_manuais.html',
                controller: function ($scope, $uibModalInstance, manualSelected) {

                    $scope.creditos = ["Creditável", "Não Creditável"];
                    $scope.tiposCredito = ["01 - Imobilizado", "02 - Bens", "03 - Serviços", "06 - aluguel", "08 - aluguel", "01 - imobilizado importação", "02 - bens importação"];
                    $scope.obj = {};
                    $scope.obj.Creditos = manualSelected.creditos;
                    $scope.obj.TipoItem = manualSelected.tipoItem

                    $scope.alterar = function () {
                        manualSelected.creditos = $scope.obj.Creditos
                        manualSelected.tipoItem = $scope.obj.TipoItem

                        ManualService.EditH04(manualSelected).then(function () {
                            $uibModalInstance.dismiss('dimiss');
                            SweetAlert.swal({
                                title: "Sucesso!",
                                text: "valores alterados com sucesso",
                                type: "success"
                            });
                        })

                    }

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                },
                windowClass: "animated fadeIn",
                resolve: {
                    manualSelected: function () {
                        return obj;
                    }
                }
            });
        }

        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withButtons([
                { extend: 'copy' },
                { extend: 'csv' },
                { extend: 'excel', title: 'Resumo_Creditos_' + $scope.dtProcessamento },

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

        $scope.limparFiltro = function () {
            $scope.obj.filtroManual.MesCompetencia = new Date();
            $scope.obj.filtroManual.Credito = ""
            $scope.obj.filtroManual.TipoItem = ""
            $scope.GetAll($scope.obj);
        }
        $scope.filtrar = function () {

            $scope.ObterPlanilha($scope.obj);
        }
    })
    .controller('ManualH05Ctrl', function ($scope, $uibModal, SweetAlert, DTOptionsBuilder, ManualService, $q, $http, $loading) {
        $scope.obj = { pageNumber: 1, pageSize: 10, "filtroManual": { MesCompetencia: new Date(), Credito: "", TipoItem: "" } }
        $scope.maxSize = 10;
        $scope.currentPage = 1;
        $scope.numPerPage = $scope.obj.pageSize;
        $scope.totalRecords = 0;

        $scope.creditos = ["Creditável", "Não Creditável"];
        $scope.tiposCredito = ["01 - Imobilizado", "02 - Bens", "03 - Serviços", "06 - aluguel", "08 - aluguel", "01 - imobilizado importação", "02 - bens importação"];

        $scope.dateOptions = {
            formatYear: 'yy',
            maxDate: new Date(),
            minDate: new Date(),
            startingDay: 1
        };

        $scope.inlineOptions = {
            customClass: getDayClass,
            minDate: new Date(),
            showWeeks: true
        };

        $scope.format = 'MM/yyyy'

        $scope.toggleMin = function () {
            $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
            $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
            $scope.dateOptions.datepickerMode = "month";
            $scope.dateOptions.minMode = "month";
        };

        $scope.toggleMin();

        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };

        $scope.popup1 = {
            opened: false
        };

        function getDayClass(data) {
            var date = data.date,
                mode = data.mode;
            if (mode === 'day') {
                var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

                for (var i = 0; i < $scope.events.length; i++) {
                    var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                    if (dayToCheck === currentDay) {
                        return $scope.events[i].status;
                    }
                }
            }

            return '';
        }

        $scope.ObterPlanilha = function (d) {
            $loading.start('load');
            ManualService.GetH05(d).then(function (data) {
                $scope.listH05 = data.data;
                $scope.totalRecords = data.totalRecords;
                $loading.finish('load');
            })
        }

        $scope.ObterPlanilha($scope.obj);

        $scope.pageChanged = function () {
            $scope.obj.pageNumber = $scope.currentPage;
            $scope.ObterPlanilha($scope.obj);
        }

        $scope.editar = function (obj) {
            $uibModal.open({
                scope: $scope,
                templateUrl: 'views/modal/Manual/editar_manuais.html',
                controller: function ($scope, $uibModalInstance, manualSelected) {

                    $scope.creditos = ["Creditável", "Não Creditável"];
                    $scope.tiposCredito = ["01 - Imobilizado", "02 - Bens", "03 - Serviços", "06 - aluguel", "08 - aluguel", "01 - imobilizado importação", "02 - bens importação"];
                    $scope.obj = {};
                    $scope.obj.Creditos = manualSelected.creditos;
                    $scope.obj.TipoItem = manualSelected.tipoItem

                    $scope.alterar = function () {
                        manualSelected.creditos = $scope.obj.Creditos
                        manualSelected.tipoItem = $scope.obj.TipoItem

                        ManualService.EditH05(manualSelected).then(function () {
                            $uibModalInstance.dismiss('dimiss');
                            SweetAlert.swal({
                                title: "Sucesso!",
                                text: "valores alterados com sucesso",
                                type: "success"
                            });
                        })

                    }

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                },
                windowClass: "animated fadeIn",
                resolve: {
                    manualSelected: function () {
                        return obj;
                    }
                }
            });
        }

        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withButtons([
                { extend: 'copy' },
                { extend: 'csv' },
                { extend: 'excel', title: 'Resumo_Creditos_' + $scope.dtProcessamento },

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

        $scope.limparFiltro = function () {
            $scope.obj.filtroManual.MesCompetencia = new Date();
            $scope.obj.filtroManual.Credito = ""
            $scope.obj.filtroManual.TipoItem = ""
            $scope.GetAll($scope.obj);
        }
        $scope.filtrar = function () {

            $scope.ObterPlanilha($scope.obj);
        }
    })
    .controller('UsuariosCtrl', function ($scope, $uibModal, SweetAlert, DTOptionsBuilder, UsuarioService, $q, $http, $loading, $timeout) {

        $loading.start('load');
        var listUsers = UsuarioService.GetUsers();

        $q.all([listUsers]).then(function (response) {
            $scope.GetUsuarios = response[0].data;
            $loading.finish('load');
        });


        $scope.editar = function (data) {
            $uibModal.open({
                scope: $scope,
                templateUrl: 'views/modal/Usuario/editar_usuarios.html',
                controller: function ($scope, $uibModalInstance, usuarioSelected, $timeout) {

                    $scope.obj = {};
                    $scope.obj.cpfCnpj = usuarioSelected.cpfCnpj;
                    $scope.obj.nome = usuarioSelected.nome;
                    $scope.obj.email = usuarioSelected.email;
                    $scope.obj.status = usuarioSelected.status == 'Ativo' ? true : false;
                    $scope.alterar = function () {

                        usuarioSelected = $scope.obj;
                        usuarioSelected.status = $scope.obj.status.toString();
                        console.log("usuario: " + JSON.stringify(usuarioSelected));

                        UsuarioService.EditUser(usuarioSelected).then(function (response) {

                            if (response.success) {
                                $uibModalInstance.dismiss('dimiss');
                                SweetAlert.swal({
                                    title: "Sucesso!",
                                    text: response.message,
                                    type: "success"
                                });


                                $timeout(function () {
                                    window.location.reload();
                                }, 2000);
                            } else {
                                $uibModalInstance.dismiss('dimiss');
                                SweetAlert.swal({
                                    title: "Erro!",
                                    text: response.message,
                                    type: "error"
                                });
                            }
                        }, function (error) {

                        });
                    }

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                },
                windowClass: "animated fadeIn",
                resolve: {
                    usuarioSelected: function () {
                        return data;
                    }
                }
            });
        }

        $scope.addUsuario = function (obj) {
            $uibModal.open({
                scope: $scope,
                templateUrl: 'views/modal/Usuario/editar_usuarios.html',
                controller: function ($scope, $uibModalInstance) {

                    $scope.usuario = obj;
                    $scope.alterar = function () {

                        UsuarioService.CreateUser(obj).then(function () {
                            $uibModalInstance.dismiss('dimiss');
                            SweetAlert.swal({
                                title: "Sucesso!",
                                text: "Usuário alterado com sucesso!",
                                type: "success"
                            });
                        })

                    }

                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                },
                windowClass: "animated fadeIn",
                resolve: {
                    usuarioSelected: function () {
                        return obj;
                    }
                }
            });
        }

        $scope.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('<"html5buttons"B>lTfgitp')
            .withButtons([
                { extend: 'copy' },
                { extend: 'csv' },
                { extend: 'excel', title: 'Resumo_Creditos_' + $scope.dtProcessamento },

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

    })
    ;