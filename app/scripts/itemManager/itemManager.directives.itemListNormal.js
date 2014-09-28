(function () {
    'use strict';
    
    var directivesModule = angular.module('itemManager.directives');

    directivesModule.directive('itemListNormal', itemListNormal);

    itemListNormal.$inject = [];

    function itemListNormal() {
        var directive = {
            link: link,
            scope: {},
            controller: controller,
            controllerAs: 'vm',
            require: ['^itemManager', 'itemListNormal'],
            templateUrl: 'app/scripts/itemManager/itemManager.directives.itemListNormal.html',
            restrict: 'A'
        };
        
        return directive;

        function link(scope, element, attrs, controllers) {
            var itemManagerController = controllers[0];
            var itemListNormalController = controllers[1];
            
            itemListNormalController.itemManager = itemManagerController;
            
            itemListNormalController.initialize();
        }
        
        function controller($scope) {
            // View Model
            var vm = this;
            
            // Properties
            vm.itemManager = {};
            vm.items = [{ id: 1, name: "Glass", size: "Small" },
                        { id: 2, name: "Book", size: "Medium" },
                        { id: 3, name: "Box", size: "Large" }];
            
            // Methods
            vm.initialize = initialize;
            vm.modifyItem = modifyItem;
            vm.editItem = editItem;
            
            // Functions
            function initialize() {
                vm.itemManager.respondToUpdatesWith(modifyItem);
            }
            
            function modifyItem(item) {
                var x;
                for (x = 0; x < vm.items.length; x += 1) {
                    if (vm.items[x].id === item.id) {
                        vm.items[x].name = item.name;
                        vm.items[x].size = item.size;
                        return;
                    }
                }
            }
            
            function editItem(item) {
                vm.itemManager.editItem(item);
            }
        }
    }
}());