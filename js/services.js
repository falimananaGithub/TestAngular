'use strict'
const data=($http,id)=>{
    var e=[];
    
    if(id==null){
        $http.get('http://127.0.0.1:3000/etudiants')
        .then(function(response){
                for (let i in response.data.data){
                    e.push(response.data.data[i]);
                }   
            });
            return e;
    }else{
        var e1=[];
        return $http.get('http://127.0.0.1:3000/etudiant/'+id)
        
    }
   
    
}

var serviceApp=angular.module('appService',['ngResource']);
serviceApp.factory('simpleFactory',['$http',
    function($http){
        var factory={};
        factory.uploadFileToUrl = function(file, uploadUrl) {
             
        } 
        
        
        factory.getEtudiants=function(){
            
                return data($http,null);
        }
        /**
         * upload image
         */
      
        factory.postEtudiants=function(argEtudiant){
            var re;
            if($http.post('http://127.0.0.1:3000/etudiant/add/',argEtudiant)){
                re=true;
            }else{
                re=false;
            }
                
            return re;
        }
        factory.deleteEtudiant=(id)=>{
            var ret;
            if($http.delete('http://127.0.0.1:3000/etudiant/delete/'+id)){
                ret=true;
            }else{
                ret=false
            }
                
            return ret;
        }
        factory.editEtudiantForm=(id)=>{
            
            return data($http,id);
        }

        factory.SaveEdit=(id,args)=>{
            var reU;
            if($http.put('http://127.0.0.1:3000/etudiant/update/'+id,args)){
                reU=true;
            }else{
                reU=false;
            }
            return reU;
        }
    
        return factory;
    }
]);