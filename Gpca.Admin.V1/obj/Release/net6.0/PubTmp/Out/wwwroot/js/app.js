
(function () {
    angular.module('gpca', [
        'ui.router',
        'oc.lazyLoad',
        'ui.bootstrap',
        'pascalprecht.translate',
        'ngIdle',
        'ngSanitize',
        'ui.utils.masks',
        'isteven-multi-select',
        'ngStorage',
        'ui.utils',
        'oitozero.ngSweetAlert',
        'ivh.treeview',
        'darthwade.loading',
        'chart.js'
    ])
        .factory('broadcast', function ($localStorage) {

            var factory = {};
            var connection = new signalR.HubConnectionBuilder()
                .withUrl("https://localhost:7011/broadcastHub", {
                    skipNegotiation: true,
                    transport: signalR.HttpTransportType.WebSockets
                })
                .withAutomaticReconnect()
                .build();

            factory.connectionHub = connection;
            
            factory.startBroadcast = function () {
                connection.start().catch(function (err) {
                    return console.log(err.toString());
                });
            };

            factory.receiveMessage = function () {
                connection.on("ReceiveMessage", function (user, message) {

                    var list = [];
                    list.push({ Texto: user + ': ' + message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;") });
                    $localStorage.listMsg = list;
                });
            };

            factory.invokeMessage = function (user, message) {
                connection.invoke("SendMessage", user, message).catch(function (err) {
                    return console.log(err.toString());
                });
            };

            return factory;
        })
        .config(function (ivhTreeviewOptionsProvider) {
            ivhTreeviewOptionsProvider.set({
                twistieCollapsedTpl: '<span class="fa fa-folder"></span>',
                twistieExpandedTpl: '<span class="fa fa-folder-open"></span>',
                twistieLeafTpl: '&#9679;',
                useCheckboxes: true,
                defaultSelectedState: false,
                validate: true,
                expandToDepth: 1,
                twistieLeafTpl: '<span class="fa fa-folder-open"></span>'
            });
        })
        .run(function ($rootScope, SweetAlert, $timeout, broadcast) { })
        .constant('constants',
            {
                //UrlAuthApi: 'http://auth.grupopca.kinghost.net/api/v1/',
                //UrlRelatorioApi: 'http://rest.grupopca.kinghost.net/api/v1/'
                UrlAuthApi: 'https://localhost:8089/api/v1/',
                UrlRelatorioApi: 'https://localhost:7011/api/v1/'
            })
        .filter('parseUrl', function ($sce) {
            var urls = /(\b(https?|ftp):\/\/[A-Z0-9+&@#\/%?=~_|!:,.;-]*[-A-Z0-9+&@#\/%=~_|])/gim
            var emails = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim

            return function (text, asTrusted) {
                if (text.match(urls)) {
                    text = text.replace(urls, "<a href=\"$1\" target=\"_blank\">$1</a>")
                }
                if (text.match(emails)) {
                    text = text.replace(emails, "<a href=\"mailto:$1\">$1</a>")
                }

                if (asTrusted) {
                    return $sce.trustAsHtml(text);
                }
                return text;
            }
        })
        .filter('trim', function () {
            return function (string) {
                if (!angular.isString(string)) {
                    return string;
                }
                return string.replace(/[\s]/g, '');
            }
        });
})();

// Other libraries are loaded dynamically in the config.js file using the library ocLazyLoad