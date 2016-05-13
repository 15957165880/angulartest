var http = require('http');
var fs = require('fs');
var url = require('url');










var typeObj={
	'html':'text/html',
	'css':'text/css',
	'json':'text/plain',
	'js':'application/x-javascript'
}


// 创建服务器
http.createServer( function (request, response,dd) {  
   // 解析请求，包括文件名
   var pathname = url.parse(request.url).pathname;
   // console.log(pathname.substr(1))
   
   var fsName=pathname.substr(1);


	 // fs.writeFile('a.txt', a,function (err) {
	 //      if (err) throw err ;
	 //      // console.log(fsName.split('/')[0]+'.txt'+"File Saved !"); //文件被保存
	 //  }) ;
	 // // console.log(pathname)
    // console.log(request.method)

    var method=request.method

    if(method.toLowerCase()=="post"){

      var urlArr=fsName.split('/')
      var data1={"dfdf":"dfdsaf"}
      fs.readFile(fsName, function (err, data) {
         if(err){
            // console.log(err)
            console.log(fsName)
            var newData=[data1]
             fs.writeFile(fsName, JSON.stringify(newData),function (err) {
                  // if (err) throw err ;
               
              }) ;
         }else{
            console.log(data)
            var new1=JSON.parse(data)
                new1.push(data1)
            console.log(new1)
            var newData=JSON.stringify(new1)
             fs.writeFile(fsName, newData,function (err) {
                  if (err) throw err ;
               
              }) ;
         }

      })
    }


   fs.readFile(pathname.substr(1), function (err, data) {
   	var fsNameAft=fsName.split('.')[1]
   	var conType=typeObj[fsNameAft]

      if (err) {
         // console.log(err);
         // HTTP 状态码: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
         response.write('<h1>not find!</h1>');
      }else{	         
         // HTTP 状态码: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': conType});	
         
         // 响应文件内容
         response.write(data.toString());

      }
      //  发送响应数据
      response.end();
   });   
}).listen(8082);

