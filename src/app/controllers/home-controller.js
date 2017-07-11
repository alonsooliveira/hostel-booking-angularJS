(function () {
    angular.module('app')
        .controller('homeController', homeController);

    function homeController(roomService) {
        var self = this;
        /* methods */
        self.getAll = getAll;
        
        function getAll() {
            return roomService.getAll();
        }
    }
})();