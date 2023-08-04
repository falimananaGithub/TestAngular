/* chapter1/controllers.js */
'use strict';
/* Controllers */
/**
 * controller main
 */
var myAppController=angular.module("myAppController",['appService']);
/**
 * controller for home page
 */
myAppController.controller('CtrlHome',['$scope',function($scope){
    $scope.message1="hello home";
    
}]);
/**
 * controller for list page
 */
myAppController.controller('CtrlList',['$scope','$location','simpleFactory',function($scope,$location,simpleFactory){
    $scope.etudiants=simpleFactory.getEtudiants();
    
    $scope.deleteEtudiant=(id)=>{
        var i=$('#my-modal'+id).modal('hide');
       var ii= $('div').removeClass('modal-backdrop');
        var nb1=$scope.etudiants.length;
        if(simpleFactory.deleteEtudiant(id)){

            $scope.etudiants=simpleFactory.getEtudiants();
            $(document).ready(
                function(){
                    location.reload(true);
                }
            );
            $location.path('/list');
        }
    }
    $scope.EditEtudiantForm=(id)=>{
        
        $location.path('/edit/'+id);
    }
    
    
}]);
/**
 * controller for add page
 */
myAppController.controller('CtrlAdd',['$scope','$location','simpleFactory',function($scope,$location,simpleFactory){
   $scope.SaveEtudiant=function(){
    var image=$scope.myImage;
    var uploadUrl="../images";
    console.log(image);
    /*if(simpleFactory.postEtudiants($scope.etudiant)){
        $location.path('/list');
        $scope.textalert0="Eleve bien inséré";
    }else{
        $scope.textalert1="Echec d'insertion";
    }*/
   }

    
}]);
myAppController.controller('CtrlEdit',['$scope','$location','$routeParams','simpleFactory',
function($scope,$location,$routeParams,simpleFactory){
    var idUser=$routeParams.id;
    const dataUser=simpleFactory.editEtudiantForm(idUser);
    dataUser.then(
        (response)=>{
            $scope.nomEdit=response.data.data['nom'];
            $scope.prenomEdit=response.data.data['prenom'];
            $scope.ageEdit=response.data.data['age'];
            $scope.ide=response.data.data['id'];
        }
    );
    $scope.SaveEditEtudiant=(id)=>{
        var newEtudiant={};
        newEtudiant.nom=$scope.nomEdit;
        newEtudiant.prenom=$scope.prenomEdit;
        newEtudiant.age=$scope.ageEdit;
        if(simpleFactory.SaveEdit(id,newEtudiant)){
            
            $location.path('/list');
        }else{
            $location.path('/edit/'+id);
        }
    }
    
}]);
