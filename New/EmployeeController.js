MyModule.controller("MyController", function ($scope,Service) {

   // $scope.Employees = Service.Employees;

    $scope.Employees = Service.GetEmployee();
    $scope.IsAddNew = true;

    $scope.AddNew = function () {
        $scope.IsAddNew = true;
    }


    //***************************************************************************************************************


    $scope.AddNewController = function ($scope) {

        $scope.Save = function () {
            //alert('a');
            Service.Add(angular.copy($scope.E));
            $scope.E = null;

            $scope.$parent.IsAddNew = false;
        }


        $scope.CancelAdd = function () {
            //alert("b")
            $scope.$parent.IsAddNew = false;
        }
    }

});
