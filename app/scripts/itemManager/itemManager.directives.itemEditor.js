(function () {
    'use strict';
    
    var directivesModule = angular.module('itemManager.directives');

    directivesModule.directive('itemEditor', itemEditor);

    itemEditor.$inject = [];

    function itemEditor() {
        var directive = {
            link: link,
            scope: {},
            controller: controller,
            controllerAs: 'vm',
            require: ['^itemManager', 'itemEditor'],
            templateUrl: 'app/scripts/itemManager/itemManager.directives.itemEditor.html',
            restrict: 'A'
        };
        
        return directive;

        function link(scope, element, attrs, controllers) {
            var itemManagerController = controllers[0];
            var itemEditorController = controllers[1];
            
            itemEditorController.itemManager = itemManagerController;
            
            itemEditorController.initialize();
        }
        
        function controller() {
            var vm = this;
            
            // Properties
            vm.itemManager = {};
            vm.item = { id: -1, name: "", size: "" };
            
            // Methods
            vm.initialize = initialize;
            vm.updateItem = updateItem;
            vm.editItem = editItem;
            
            // Functions
            function initialize() {
                vm.itemManager.respondToEditsWith(vm.editItem);
            }
            
            function updateItem() {
                vm.itemManager.updateItem(vm.item);
                vm.item = {};
            }
            
            function editItem(item) {
                vm.item.id = item.id;
                vm.item.name = item.name;
                vm.item.size = item.size;
            }
        }
    }
}());