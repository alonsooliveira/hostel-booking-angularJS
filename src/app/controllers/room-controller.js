(function () {
    angular.module('app')
        .controller('roomController', roomController);

    function roomController(roomService) {
        var self = this;
        /* methods */
        self.getAll = getAll;
        
        function getAll() {
            return roomService.getAll();
        }
    }
})();