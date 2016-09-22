MyModule.controller("MyController", function ($scope) {

    $scope.Employees = EmployeeService();

    $scope.IsAddNew = false;

    $scope.AddNew = function () {
        $scope.IsAddNew = true;
    }


    //***************************************************************************************************************


    $scope.AddNewController = function ($scope) {

        $scope.Save = function () {
            //alert('a');
            $scope.Employees.push(angular.copy($scope.E));
            $scope.E = null;

            $scope.$parent.IsAddNew = false;
        }


        $scope.CancelAdd = function () {
            //alert("b")
            $scope.$parent.IsAddNew = false;
        }
    }

});
