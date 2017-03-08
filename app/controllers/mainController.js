app.controller("mainController", function($scope) {
    $scope.showAlert = function(ev) {
        $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.querySelector('#main_view')))
                .clickOutsideToClose(true)
                .title('What is this?')
                .textContent('In order to confirm this purchase, a member of our team will contact you. This is in order to ensure your satisfaction..')
                .ok('Got it!')
                .targetEvent(ev)
        );
    }
})
