angular.module("control", [])
        .controller("ctrl", ["$scope", "$http", function($scope, $http) {
                $http.get("data/products.json")
                .success(function(req,state){
                        $scope.books=req;
                        $scope.navList=function(arr,key){
                                var a=[],b=[],c=[];
                                angular.forEach(arr,function(item){
                                        a.push(item[key])
                                })
                                for(var i in a){
                                        b[a[i]]=i
                                }
                                for(var i in b){
                                        c.push(i)
                                }
                                return c;
                        }

                })
                .error(function(err){
                        console.log(err)
                })
                
                $scope.param=""
                $scope.changeParam=function(target){
                        var param=target.getAttribute("param")
                        $scope.param=param
                }
        }]);