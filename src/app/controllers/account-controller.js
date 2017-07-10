(function () {
    angular.module('app')
        .controller('accountController', accountController);

    function accountController(accountService) {
        var self = this;
        self.login = login;
        self.register = register;


        function login() {
            accountService.login(self.model)
                .then(function (success) {

                })
                .error(function (error) {

                });
        }

        function register() {
            accountService.register(self.model)
                .then(function (success) {
                    console.log('success');
                })
                .error(function (error) {

                });
        }

    }
})();