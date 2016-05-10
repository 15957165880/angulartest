angular.module("sportsStore", ["customFilter","cart"])

.controller("sportsStoreControl",["$scope","$http","$filter","dataUrl","selecltedCategory","activeClass","cart",
	function($scope,$http,$filter,dataUrl,selecltedCategory,activeClass,cart){
	$http.get(dataUrl)
		.success(function(req,status,fn,url){
			$scope.data=req
			$scope.data.error=false
			$scope.data.statu=status
		})
		.error(function(err,status,fn,url){
			$scope.data={}
			$scope.data.error=true
			$scope.data.statu=status
		})

	$scope.selectCategory=function(newCategory){
		selecltedCategory=newCategory
		$scope.selectedPage=1;
	}
	$scope.categoryFilterFn=function(product){
		return selecltedCategory==null||product.category==selecltedCategory
	}

	$scope.getCategoryClass=function(category,activeClass){
		return category==selecltedCategory?activeClass:""
	};
	$scope.pageSize=2;
	$scope.selectedPage=1;
	$scope.selectPage=function(newPage){
		$scope.selectedPage=newPage
	}
	$scope.getPageClass = function(page){
		return $scope.selectedPage == page?activeClass:""
	}

	$scope.addProductToCart=function(product){
		cart.addProduct(product.id,product.name,product.price)
	}
}])
.constant("dataUrl","data/products.json")
.constant("selecltedCategory",null)
.constant("activeClass","btn-primary")




