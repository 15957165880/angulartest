angular.module("filter", [])
	.filter('booksSelect',function() {
		return function(items,a){
			var arr=[];
			if(a!=null){
				if(a=="") arr=items;
				else{    				
		        		angular.forEach(items,function(item){
		        			if(item.c==a) arr.push(item);
		        		})
				}
			}else{
				arr=items;
			}
			return arr
		}
});