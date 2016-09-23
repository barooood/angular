function EmployeeDynamicService() {
 

   

    var myObject={};

    myObject.GetEmployee=function(){
    	// Employees.push(e);
    	// return Employees;
        var Employees={};
        $http.get("http://trainitservice.azurewebsites.net/api/Employee")
        .then(function (r){
            for(var i=0;i<r.data.length;i++){
                var Emp1={};
                Emp1.FName=r.data[i].FirstName;
                Emp1.LName=r.data[i].LastName;
                Emp1.Salary=r.data[i].Salary;
                Employees.push(Emp1);
            }
        });
        return Employees;
    }
    myObject.Add=function(e){
        Employees.push(e);
        return Employees;
    }


    return myObject;

}

