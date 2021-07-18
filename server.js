const express= require('express');
const app=express();
const path=require('path');

app.use(express.static(__dirname+'/dist'));
app.listen(process.env.port||8080);

app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/Dolfin/index.html'));
    if(err){
        res.writeHead(404,{'Content-Type':'text/html'});
        return  res.end("404 Not Found :"+err);
    }

})


console.log('console listening!');