(function () {
    angular.module('app')
        .controller('homeController', homeController);

    function homeController(roomService) {
        var self = this;
        /* methods */
        self.getAll = getAll;
        self.rooms = [];

        getAll();
        
        function getAll() {
            roomService.getAll().then(function (result) {
                console.log(self.rooms);
                self.rooms = result;
                return self.rooms;
            });
        }
    }
})();