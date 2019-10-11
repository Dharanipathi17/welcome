
var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {

    $scope.register = {
      

    };
    $scope.registers=[];

    $scope.Gender =    [
        {"Name":"Male"}, {"Name":"Female"},{"Name":"Others"},
      ];

      $scope.Country = [
        {"Name":"India"}, {"Name":"Pakistan"},{"Name":"Nepal"},{"Name":"Gujarat"},
      ];

      $scope.District = [
        {"Name":"Chennai"}, {"Name":"Karachi"},{"Name":"Bhutan"},{"Name":"Varanasi"},
      ];

      $scope.State = [
        {"Name":"Tn"}, {"Name":"Snp"},{"Name":"Brp"},{"Name":"Asn"},
      ];

      $scope.PinCode = [
        {"Name":"7709"}, {"Name":"2288"},{"Name":"4455"},{"Name":"7655"},
      ];

      $scope.EmployeeCode = [
        {"Name":"0001"}, {"Name":"0002"},{"Name":"0003"},{"Name":"0004"},
      ];

      

      

 $scope.saveform=function(){
  var newItem = {
    'FirstName': $scope.register.FirstName, 
    'LastName': $scope.register.LastName, 
    'Address1': $scope.register.Address1,
    'Address2': $scope.register.Address2,
    'Address3': $scope.register.Address3,
    'PhoneNo': $scope.register.PhoneNo,
    'Dob': $scope.register.Dob,
    'Gender': $scope.register.Gender,
    'Country': $scope.register.Country,
    'District': $scope.register.District,
    'State': $scope.register.State,
    'PinCode': $scope.register.PinCode,
    'EmployeeCode': $scope.register.EmployeeCode

};
  
  $scope.registers.push(newItem);
 }


  });